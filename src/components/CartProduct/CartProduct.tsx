import React, { useEffect, useState } from "react";
import { CartItem, Currency } from "ell-commerce-sdk";
import {
  StyledCartProduct,
  StyledImage,
  StyledProductInfo,
  StyledProductNameContainer,
  StyledProductName,
  StyledInput,
  StyledProductPriceContainer,
  StyledProductPrice,
  StyledButton,
  StyledLeftFlexBlock,
  StyledRightFlexBlock,
  StyledDisabledProductPrice,
} from "./CartProduct.parts";
import noImageSrc from "../../assets/images/no-image.png";
import {formatPrice, mockConfig} from "../../utils"
import { MAX_PRODUCT_NAME_DISLPAY_LENGTH } from "./constants";
import { BucketSvg } from "../../commons/svgs";

type Props = {
  item: CartItem;
  currency: Currency;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>, item: CartItem) => void;
  onDelete: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>, itemId: string) => void;
};

type MessageProps = {
	text: string;
	type: string;
}

const Message: React.FC<MessageProps> = ({
	text,
	type
}) => {
	return (
		<div className="message">
			<p style={type === "Error" ? {color: "#D30018"} : {color: "#008638"}}>{text}</p>
		</div>
	)
}

export const CartProduct: React.FC<Props> = ({
  item,
  currency,
  onChange,
  onDelete,
}) => {
	const [value, setValue] = useState(item.quantity)
	const [temporaryValue, setTemporaryValue] = useState(item.quantity)
	const [message, setMessage] = useState({text: "", type: ""})

	const minPurchaseQuantity = item.minPurchaseQuantity
	const maxPurchaseQuantity = item.maxPurchaseQuantity

	const onInputDebounce = (debounce: number) => {
		const timeout = setTimeout(() => {
			setValue(temporaryValue);
		}, debounce);

		return () => clearTimeout(timeout);
	}

	useEffect(() => onInputDebounce(250), [temporaryValue])

	const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>, item: CartItem) => {
		const numValue = +ev.target.value
		
		if (numValue >= minPurchaseQuantity && numValue <= maxPurchaseQuantity) {
			setTemporaryValue(numValue)
			setMessage({text: "", type: ""})
			onChange(ev, item)
		} else if (numValue < minPurchaseQuantity) {
			setMessage({text: `Min qty is ${minPurchaseQuantity}`, type: "Error"})
		} else if (numValue > maxPurchaseQuantity) {
			setMessage({text: `Max qty is ${maxPurchaseQuantity}`, type: "Error"})
		}
	}

  return (
    <StyledCartProduct key={item.id}>
      <StyledLeftFlexBlock>
        <StyledImage
          role="presentation"
          src={item.imageUrl || noImageSrc}
          alt=""
        />
      </StyledLeftFlexBlock>

      <StyledRightFlexBlock>
        <StyledProductInfo>
          <StyledProductNameContainer>
            <StyledProductName>
              {item.name.length <= MAX_PRODUCT_NAME_DISLPAY_LENGTH
                ? item.name
                : `${item.name.slice(0, MAX_PRODUCT_NAME_DISLPAY_LENGTH)}...`}
            </StyledProductName>
            <StyledInput>
							<input
								type={"number"}
								className="cart-product-input"
								disabled={maxPurchaseQuantity === 1 ? true : false}
								defaultValue={value}
								min={minPurchaseQuantity}
								max={maxPurchaseQuantity}
								onChange={(ev) => onInputChange(ev, item)}
							/>
							<Message text={message.text} type={message.type} />
						</StyledInput>
          </StyledProductNameContainer>
          <StyledProductPriceContainer>
            {item.originalPrice === item.salePrice && (
              <StyledProductPrice>
                {formatPrice(mockConfig, currency.symbol, item.originalPrice)}
              </StyledProductPrice>
            )}
            {item.originalPrice !== item.salePrice && (
              <div>
                <StyledDisabledProductPrice>
                  {formatPrice(mockConfig, currency.symbol, item.originalPrice)}
                </StyledDisabledProductPrice>
                <StyledProductPrice>
                  {formatPrice(mockConfig, currency.symbol, item.salePrice)}
                </StyledProductPrice>
              </div>
            )}
            <StyledButton
              aria-label={`Remove ${item.name}`}
              onClick={(ev) => onDelete(ev, item.id)}
            >
              <i>
                <BucketSvg />
              </i>
              Remove
            </StyledButton>
          </StyledProductPriceContainer>
        </StyledProductInfo>
      </StyledRightFlexBlock>
    </StyledCartProduct>
  );
};
