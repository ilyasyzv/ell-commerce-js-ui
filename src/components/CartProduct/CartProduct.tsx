import React, { useCallback, useRef, useState, useMemo} from "react";
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
  StyledProductDescription,
  StyledDiscountWrapper,
} from "./CartProduct.parts";
import noImageSrc from "../../assets/images/no-image.png";
import {cutText, formatPrice, onInputDebounce} from "../../utils";
import { MAX_PRODUCT_NAME_DISLPAY_LENGTH } from "./constants";
import {DEBOUNCE_INTERVAL} from "../../commons/constants"
import { BucketSvg } from "../../commons/svgs";
import {Message} from "../Message";
import parse from 'html-react-parser';
import {useTranslation} from "react-i18next";
import { useBreakpoints } from "../../commons/hooks";

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
  hasDescription?: boolean;
  debounceChangeQty?: number;
};

const allowedKeys = ['Backspace','Delete','ArrowLeft','ArrowRight']

export const CartProduct: React.FC<Props> = ({
  item,
  currency,
  onChange,
  onDelete,
  hasDescription = false,
  debounceChangeQty = DEBOUNCE_INTERVAL
}) => {
  const minPurchaseQuantity = item.minPurchaseQuantity || 1;
	const maxPurchaseQuantity = item.maxPurchaseQuantity;
  const parsedShortDescription = useMemo(() => parse(item.shortDescription), [item.shortDescription]);

  const ref = useRef(null)
	const [value, setValue] = useState(item.quantity)
	const [message, setMessage] = useState({text: "", type: ""})
  const { t } = useTranslation()

  const onKeydown = useCallback((event:  React.KeyboardEvent<HTMLInputElement>)=> {
      if(!allowedKeys.includes(event.code) &&
          isNaN(Number(event.key))) {
          event.preventDefault()
      }
  },[])

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
              {hasDescription && item.shortDescription && <StyledProductDescription>{parsedShortDescription}</StyledProductDescription>}   
            </StyledProductName>
            <StyledInput className={"input"}>
							<input
								type="number"
                onKeyDown={onKeydown}
								className={message.type === "Error" ? "cart-product-input error" : "cart-product-input"}
                disabled={maxPurchaseQuantity === 1}
								defaultValue={value}
								min={minPurchaseQuantity}
								max={maxPurchaseQuantity}
								onChange={(ev) => onInputDebounceChange(ev, item)}
                aria-label="Quantity of product"
							/>
							<Message text={message.text} type={message.type} />
						</StyledInput>
          </StyledProductNameContainer>
          <StyledProductPriceContainer className={"productPriceContainer"}>
            {item.totalOriginalPrice === item.totalSalePrice && (
              <StyledProductPrice className={"productPrice"}>
                {formatPrice(item.totalOriginalPrice, currency)}
              </StyledProductPrice>
            )}
            {item.totalOriginalPrice !== item.totalSalePrice && (
              <StyledDiscountWrapper className={"discountWrapper"}>
                <StyledProductPrice className={"discount-price-container productPrice"}>
                  {formatPrice(item.totalSalePrice, currency)}
                </StyledProductPrice>
                <StyledDisabledProductPrice className={"discount-price-container disabledProductPrice"}>
                  {formatPrice(item.totalOriginalPrice, currency)}
                </StyledDisabledProductPrice>
              </StyledDiscountWrapper>
            )}
            <StyledButton
              className={"button"}
              aria-label={`${t('remove')} ${item.name}`}
              onClick={(ev) => onDelete(ev, item.id)}
            >
              <i>
                <BucketSvg aria-hidden={true} />
              </i>
                {t('remove')}
            </StyledButton>
          </StyledProductPriceContainer>
        </StyledProductInfo>
      </StyledRightFlexBlock>
    </StyledCartProduct>
  );
};