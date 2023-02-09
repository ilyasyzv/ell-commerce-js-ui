import React from "react";
import { CartItem, Currency } from "ell-commerce-sdk";
import {
  StyledCartProduct,
  StyledImage,
  StyledProductInfo,
  StyledProductNameContainer,
  StyledProductName,
  StyledSelect,
  StyledProductPriceContainer,
  StyledProductPrice,
  StyledButton,
  StyledLeftFlexBlock,
  StyledRightFlexBlock,
  StyledDisabledProductPrice,
} from "./CartProduct.parts";
import BucketIcon from "../../assets/images/bucket.svg";
import noImageSrc from "../../assets/images/no-image.png";
import { MAX_PRODUCT_NAME_DISLPAY_LENGTH } from "./constants";

type Props = {
  item: CartItem;
  currency: Currency;
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>, item: CartItem) => void;
  onDelete: (e: React.MouseEvent<HTMLSpanElement>, itemId: string) => void;
};

export const CartProduct: React.FC<Props> = ({
  item,
  currency,
  onChange,
  onDelete,
}) => {
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
            <StyledSelect
              value={item.quantity}
              onChange={(ev) => onChange(ev, item)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </StyledSelect>
          </StyledProductNameContainer>
          <StyledProductPriceContainer>
            {item.originalPrice === item.salePrice && (
              <StyledProductPrice>
                {currency.symbol}
                {item.originalPrice}
              </StyledProductPrice>
            )}
            {item.originalPrice !== item.salePrice && (
              <div>
                <StyledDisabledProductPrice>
                  {currency.symbol}
                  {item.originalPrice}
                </StyledDisabledProductPrice>
                <StyledProductPrice>
                  {currency.symbol}
                  {item.salePrice}
                </StyledProductPrice>
              </div>
            )}
            <StyledButton
              aria-label={`Remove ${item.name}`}
              onClick={(ev) => onDelete(ev, item.id)}
            >
              <i>
                <BucketIcon />
              </i>
              Remove
            </StyledButton>
          </StyledProductPriceContainer>
        </StyledProductInfo>
      </StyledRightFlexBlock>
    </StyledCartProduct>
  );
};
