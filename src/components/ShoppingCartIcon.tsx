import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cart, CartLineItem } from "ell-commerce-sdk";

const StyledShoppingCartIcon = styled.div`
  display: block;
  position: relative;
  width: 32px;
  height: auto;
  .cart-icon {
    z-index: 1;
    cursor: pointer;
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

  .items-popup {
    position: absolute;
    z-index: 200;
    background-color: #f2f2f2;
    min-width: 480px;
    min-height: 300px;
    right: 0px;
    box-shadow: 6px 6px 6px #0007;
    border: 1px solid #000;
    font-size: 14px;
    padding: 16px;
    color: #000;
    border-radius: 16px;
    font-family: "Open Sans", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;

    @media screen and (max-width: 640px) {
      position: fixed;
      min-width: 0px;
      padding: 8px;
      border-radius: 2px;
      left: 0px;
      margin-top: 8px;

      button {
        font-size: 14px !important;
      }
    }

    .item-popup-container {
      display: flex;
      flex-flow: column;
      align-self: self-start;
      width: 100%;

      .items-list-container {
        margin-top: 16px;
        max-height: 200px;
        overflow-y: auto;
        padding-right: 4px;
        div {
          display: flex;
          justify-content: space-between;
          padding: 8px 0px;

          span:first-child {
            padding-right: 8px;
          }
          span:last-child {
            white-space: nowrap;
          }
        }
      }
      .checkout-row {
        font-size: 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .clear-cart-button {
        position: absolute;
        bottom: 16px;
        font-size: 16px;
        background-color: #777;
      }
      button {
        color: white;
        border: none;
        background-color: #007fa3;
        font-weight: bold;
        font-size: 18px;
        border-radius: 16px;
        padding: 8px;
        cursor: pointer;

        i {
          font-size: 14px;
        }
      }
    }
  }
`;

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
  const [itemsCount, setItemsCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

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

  const togglePopup = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (props.features?.disablePopup) {
      await props.onOpenCart("cartpage");
    } else {
      if (!showPopup) {
        await props.onOpenCart(props.cart?.id);
      }
      setShowPopup(!showPopup);
    }

    e.stopPropagation();
  };

  const onClearCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClearCart(props.cart?.id as string);
    e.stopPropagation();
  };

  const onCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onCheckout(props.cart?.id as string);
    setShowPopup(false);
    e.stopPropagation();
  };

  return (
    <StyledShoppingCartIcon onClick={togglePopup}>
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
      {showPopup && !props.features?.disablePopup && (
        <div className="items-popup">
          {itemsCount === 0 && <span>Your cart is empty</span>}
          {itemsCount > 0 && (
            <div className="item-popup-container">
              <div className="checkout-row">
                <span>
                  Total ({props.cart?.currency.currencyCode}){" "}
                  {props.cart?.currency.symbol}
                  {props.cart?.cartAmount}
                </span>
                <button onClick={onCheckout}>
                  Checkout&nbsp;&nbsp;
                  <i className="far fa-cash-register"></i>
                </button>
              </div>
              <button className="clear-cart-button" onClick={onClearCart}>
                Clear cart&nbsp;&nbsp;
                <i className="far fa-trash"></i>
              </button>
              <div className="items-list-container">
                {props.cart?.lineItems.digitalItems.map((it: CartLineItem) => {
                  return (
                    <div key={it.id}>
                      <span>{`${it.quantity} x ${it.name}`}</span>
                      <span>
                        {props.cart?.currency.symbol}
                        {it.salePrice}
                      </span>
                    </div>
                  );
                })}
                {props.cart?.lineItems.physicalItems.map((it: CartLineItem) => {
                  return (
                    <div key={it.id}>
                      <span>{`${it.quantity} x ${it.name}`}</span>
                      <span>${it.salePrice}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </StyledShoppingCartIcon>
  );
};
