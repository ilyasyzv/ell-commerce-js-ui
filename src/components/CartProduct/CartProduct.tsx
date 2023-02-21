import React, {useEffect, useState} from "react";
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
  StyledProductTitle,
  StyledProductDescription
} from "./CartProduct.parts";
import noImageSrc from "../../assets/images/no-image.png";
import {formatPrice, mockConfig} from "../../utils"
import { MAX_PRODUCT_NAME_DISLPAY_LENGTH } from "./constants";
import { BucketSvg } from "../../commons/svgs";
import parse from 'html-react-parser';
import {useTranslation} from "react-i18next";

type Props = {
  item: CartItem;
  currency: Currency;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>, item: CartItem) => void | Promise<void>;
  onDelete: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>, itemId: string) => void;
  hasDescription: boolean;
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
  hasDescription = false
}) => {
  const minPurchaseQuantity = item.minPurchaseQuantity || 1
	const maxPurchaseQuantity = item.maxPurchaseQuantity

	const [value, setValue] = useState(item.quantity)
  const [disabled, setDisabled] = useState(maxPurchaseQuantity === 1)
	const [temporaryValue, setTemporaryValue] = useState(item.quantity)
	const [message, setMessage] = useState({text: "", type: ""})
  const { t } = useTranslation()

	

	const onInputDebounce = (debounce: number) => {
		const timeout = setTimeout(() => {
			setValue(temporaryValue);
    }, debounce);

		return () => clearTimeout(timeout);
	}

	useEffect(() => onInputDebounce(250), [temporaryValue])

	const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>, item: CartItem) => {
    ev.preventDefault();
		const numValue = +ev.target.value
		if (numValue >= minPurchaseQuantity && (numValue <= maxPurchaseQuantity || !maxPurchaseQuantity)) {
			setMessage({text: "", type: ""})
      setDisabled(true)
      let res = onChange(ev, item)
     
      if(res as any instanceof Promise) {
       res = res as Promise<void>
       res
        .then(() => {
          setTemporaryValue(numValue)
        })
        .catch((err) => {
          console.log(err)
          return
        })
        .finally (() => setDisabled(false))
      } else {
        setTemporaryValue(numValue)
        setDisabled(false)
      }
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
              <StyledProductTitle>{item.name.length <= MAX_PRODUCT_NAME_DISLPAY_LENGTH
                ? item.name
                : `${item.name.slice(0, MAX_PRODUCT_NAME_DISLPAY_LENGTH)}...`}</StyledProductTitle>

              {hasDescription && item.shortDescription && <StyledProductDescription>{parse(item.description)}</StyledProductDescription>}   
            </StyledProductName>
            <StyledInput>
							<input
								type={"number"}
								className={message.type === "Error" ? "cart-product-input error" : "cart-product-input"}
                disabled={disabled}
								value={value}
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
                {t('remove')}
            </StyledButton>
          </StyledProductPriceContainer>
        </StyledProductInfo>
      </StyledRightFlexBlock>
    </StyledCartProduct>
  );
};
