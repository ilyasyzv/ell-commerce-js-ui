import React from 'react'
import { CartItem } from "ell-commerce-sdk"
import {StyledCartProduct, StyledImage, StyledProductInfo, StyledProductNameContainer,
    StyledProductName, StyledSelect, StyledProductPriceContainer, StyledProductPrice, StyledButton} from './CartProduct.parts'
import BucketIcon from "../../assets/images/bucket.svg"
import noImageSrc from "../../assets/images/no-image.png"
import {MAX_PRODUCT_NAME_DISLPAY_LENGTH} from './constants'   

type Props = {
    item : CartItem;
    price:string;
    onChange:(ev: React.ChangeEvent<HTMLSelectElement>,item: CartItem) => void;
    onDelete : (e: React.MouseEvent<HTMLSpanElement>,itemId: string) => void
}

export const CartProduct: React.FC<Props> = ({
    item,
    price,
    onChange,
    onDelete
  }) => {  
    return (
        <StyledCartProduct key={item.id}>
        <StyledImage
            role="presentation"
            src={item.imageUrl || noImageSrc}
            alt=""
        />
        <StyledProductInfo>
            <StyledProductNameContainer>
                <StyledProductName>
                    {item.name.length <= MAX_PRODUCT_NAME_DISLPAY_LENGTH
                        ? item.name
                        : `${item.name.slice(
                              0,
                              MAX_PRODUCT_NAME_DISLPAY_LENGTH
                          )}...`}
                </StyledProductName>
                <StyledSelect
                    value={item.quantity}
                    onChange={(ev) =>
                        onChange(
                            ev,
                            item
                        )
                    }
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </StyledSelect>
            </StyledProductNameContainer>
            <StyledProductPriceContainer>
                <StyledProductPrice>
                    {price}
                </StyledProductPrice>
                <StyledButton
                    aria-label={`Remove ${item.name}`}
                    onClick={(ev) =>
                        onDelete(ev, item.id)
                    }
                >
                    <i>
                        <BucketIcon />
                    </i>
                    Remove
                </StyledButton>
            </StyledProductPriceContainer>
        </StyledProductInfo>
        </StyledCartProduct>
    );
  };
  