import React, {useCallback, useRef, useState} from "react";
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
  StyledDiscountWrapper,
  StyledProductHTMLDescription,
} from "./CartProduct/CartProduct.parts";
import noImageSrc from "../assets/images/no-image.png";
import {cutText, formatPrice, mockConfig, onInputDebounce} from "../utils";
import { MAX_PRODUCT_NAME_DISLPAY_LENGTH } from "./CartProduct/constants";
import {DEBOUNCE_INTERVAL} from "../commons/constants";
import { BucketSvg } from "../commons/svgs";
import parse from 'html-react-parser';
import {useTranslation} from "react-i18next";
import { useBreakpoints } from "../commons/hooks";

export enum EnumStyledCartProductBreakPoints {
  mobileSm = 300,
  mobileMd = 353,
  tabletSm = 669,
  tabletMd = 759,
  tabletLg = 949,
  desktopSm = 1125
}

type Props = {
  item: CartItem;
  currency: Currency;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>, item: CartItem) => void | Promise<void>;
  onDelete: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>, itemId: string) => void;
  htmlDescription: string;
  debounceChangeQty?: number;
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

export const HTMLCartProduct: React.FC<Props> = ({
  item,
  currency,
  onChange,
  onDelete,
  htmlDescription,
  debounceChangeQty = DEBOUNCE_INTERVAL
}) => {
  const minPurchaseQuantity = item.minPurchaseQuantity || 1
	const maxPurchaseQuantity = item.maxPurchaseQuantity

  const ref = useRef(null)
	const [value, setValue] = useState(item.quantity)
	const [message, setMessage] = useState({text: "", type: ""})
  const { t } = useTranslation()

	const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>, item: CartItem) => {
    ev.preventDefault();
		const numValue = +ev.target.value
		if (numValue >= minPurchaseQuantity && (numValue <= maxPurchaseQuantity || !maxPurchaseQuantity)) {
			setMessage({text: "", type: ""})
      onChange(ev, item)
      setValue(numValue)
		} else if (numValue < minPurchaseQuantity) {
			setMessage({text: `Min qty is ${minPurchaseQuantity}`, type: "Error"})
		} else if (numValue > maxPurchaseQuantity) {
			setMessage({text: `Max qty is ${maxPurchaseQuantity}`, type: "Error"})
		}
	}

  const onInputDebounceChange = useCallback(onInputDebounce(onInputChange, debounceChangeQty), [onInputChange]);

  const breakpoint = useBreakpoints<EnumStyledCartProductBreakPoints>(ref, [
    EnumStyledCartProductBreakPoints.mobileSm,
    EnumStyledCartProductBreakPoints.mobileMd,
    EnumStyledCartProductBreakPoints.tabletSm,
    EnumStyledCartProductBreakPoints.tabletMd,
    EnumStyledCartProductBreakPoints.tabletLg,
    EnumStyledCartProductBreakPoints.desktopSm
  ])

  return (
    <StyledCartProduct key={item.id} ref={ref} breakpoint={breakpoint}>
      <StyledLeftFlexBlock className={"leftFlexBlock"}>
        <StyledImage
          role="presentation"
          className={"image"}
          src={item.imageUrl || noImageSrc}
          alt=""
        />
      </StyledLeftFlexBlock>

      <StyledRightFlexBlock>
        <StyledProductInfo className={"productInfo"}>
          <StyledProductNameContainer className={"productNameContainer"}>
            <StyledProductName className={"productName"}>
              <StyledProductTitle>{cutText(item.name, MAX_PRODUCT_NAME_DISLPAY_LENGTH)}</StyledProductTitle>
              <StyledProductHTMLDescription>
                {parse(htmlDescription)}
              </StyledProductHTMLDescription>
            </StyledProductName>
            <StyledInput className={"input"}>
							<input
								type={"number"}
								className={message.type === "Error" ? "cart-product-input error" : "cart-product-input"}
                                disabled={maxPurchaseQuantity === 1}
								defaultValue={value}
								min={minPurchaseQuantity}
								max={maxPurchaseQuantity}
								onChange={(ev) => onInputDebounceChange(ev, item)}
							/>
							<Message text={message.text} type={message.type} />
						</StyledInput>
          </StyledProductNameContainer>
          <StyledProductPriceContainer className={"productPriceContainer"}>
            {item.totalOriginalPrice === item.totalSalePrice && (
              <StyledProductPrice className={"productPrice"}>
                {formatPrice(mockConfig, currency.symbol, item.totalOriginalPrice)}
              </StyledProductPrice>
            )}
            {item.totalOriginalPrice !== item.totalSalePrice && (
              <StyledDiscountWrapper className={"discountWrapper"}>
                <StyledProductPrice className={"discount-price-container productPrice"}>
                  {formatPrice(mockConfig, currency.symbol, item.totalSalePrice)}
                </StyledProductPrice>
                <StyledDisabledProductPrice className={"discount-price-container disabledProductPrice"}>
                  {formatPrice(mockConfig, currency.symbol, item.totalOriginalPrice)}
                </StyledDisabledProductPrice>
              </StyledDiscountWrapper>
            )}
            <StyledButton
              className={"button"}
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