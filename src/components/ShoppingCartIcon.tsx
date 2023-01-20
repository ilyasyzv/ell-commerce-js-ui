import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cart } from "ell-commerce-sdk";

const StyledShoppingCartIcon = styled.div`
  display: block;
  position: relative;
  width: 32px;
  height: auto;
  .cart-icon {
    z-index: 1;
  }
  .total-items {
    position: absolute;
    padding: 1.5px;
    top: -10px;
    right: -6px;
    z-index: 2;
    font-weight: 400;
    font-size: 10.5px;
    line-height: 16px;
    background-color: #ffbb1c;
    color: #ffffff;
    border: 2.25px solid #ffffff;
    border-radius: 50%;
    height: 15px;
    min-width: 15px;
    display: inline-block;
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    .cart-icon {
      width: 18px;
      height: 18px;
    }
  }
`;

export interface IShoppingCartIconProps {
  togglePopup: (e: React.MouseEvent<HTMLDivElement>) => void;
  cart?: Cart;
}

export const ShoppingCartIcon: React.FunctionComponent<
  IShoppingCartIconProps
> = (props: IShoppingCartIconProps) => {
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    const { cart } = props;
    if (cart) {
      let count = 0;
      cart.lineItems.digitalItems.forEach((item) => {
        count += item.quantity;
      });
      cart.lineItems.physicalItems.forEach((item) => {
        count += item.quantity;
      });
      setItemsCount(count);
    } else {
      setItemsCount(0);
    }
  }, [props.cart]);

  return (
    <StyledShoppingCartIcon onClick={props.togglePopup}>
      <svg
        className="cart-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.75 17.5001C8.7165 17.5001 9.5 18.2836 9.5 19.2501C9.5 20.2166 8.7165 21.0001 7.75 21.0001C6.7835 21.0001 6 20.2166 6 19.2501C6 18.2836 6.7835 17.5001 7.75 17.5001ZM18.25 17.5001C19.2165 17.5001 20 18.2836 20 19.2501C20 20.2166 19.2165 21.0001 18.25 21.0001C17.2835 21.0001 16.5 20.2166 16.5 19.2501C16.5 18.2836 17.2835 17.5001 18.25 17.5001ZM2.93808 0C3.90455 0 4.73278 0.691034 4.90583 1.64188L5.335 3.99994L21.5009 4.0001C22.0532 4.0001 22.5009 4.44782 22.5009 5.00011C22.5009 5.06033 22.4955 5.12043 22.4847 5.17967L20.9588 13.5388C20.6986 14.9643 19.4566 16.0001 18.0075 16.0001H7.98778C6.5379 16.0001 5.29551 14.963 5.03619 13.5365L3.05096 2.61583C2.98613 2.25919 2.6755 1.99995 2.31301 1.99997L1 2.00005C0.487194 2.00008 0.0645253 1.61409 0.00673422 1.11678L0 1.00011C0 0.44782 0.447709 0 1 0H2.93808ZM5.698 5.99994L7.00367 13.1789C7.08294 13.6147 7.43751 13.9414 7.86829 13.9929L7.98752 13.9999L18.007 14.0001C18.4498 14.0001 18.8345 13.71 18.9624 13.2956L18.9907 13.1796L20.301 6.00011L5.698 5.99994Z"
          fill="#151515"
        />
      </svg>
      {itemsCount > 0 && (
        <span className="total-items">
          {itemsCount > 9 ? "9+" : itemsCount}
        </span>
      )}
    </StyledShoppingCartIcon>
  );
};
