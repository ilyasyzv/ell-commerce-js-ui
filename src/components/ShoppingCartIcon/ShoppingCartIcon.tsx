import React from "react";
import { Cart} from "ell-commerce-sdk";
import CartIcon from "../../assets/images/cart-icon.svg"
import {StyledShoppingCartIcon} from "./ShoppingCartIcon.parts"

export interface IShoppingCartIconFeatures {
  disablePopup: boolean;
}

export interface IShoppingCartIconProps {
  cart?: Cart;
  features?: IShoppingCartIconFeatures;
  onOpenCart: (cartId: string | undefined) => void;
  onClearCart: (cartId: string) => void;
  onCheckout: (cartId: string) => void;
}

export const ShoppingCartIcon: React.FunctionComponent<
  IShoppingCartIconProps
> = (props: IShoppingCartIconProps) => {
  const count = props.cart?.items.reduce((sum, item) => {
    sum += item.quantity;
    return sum
  }, 0) ?? 0;
  const togglePopup = async (e: React.MouseEvent<HTMLDivElement>) => {
    await props.onOpenCart("cartpage");
    e.stopPropagation();
  };
  
  let classNameCounter = "total-items"
  if (count > 9) {
    classNameCounter+= " more-nine"
  }

  
  return (
    <StyledShoppingCartIcon onClick={togglePopup}>
      <CartIcon className="cart-icon" />
      {count > 0 && (
        <span className={classNameCounter}>
          {count > 9 ? "9+" : count}
        </span>
      )}
    </StyledShoppingCartIcon>
  );
};
