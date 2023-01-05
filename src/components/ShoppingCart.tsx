import React, { useEffect, useState } from "react";
import { Cart, CartLineItem } from "ell-commerce-sdk";
import styled from "styled-components";

const StyledShoppingCart = styled.div.attrs(() => ({
  className: "ell-commerce-cart",
}))`
  position: absolute;
  font-size: 36px;
  cursor: pointer;

  .total-items {
    background-color: #0075a3;
    color: white;
    font-size: 16px;
    position: absolute;
    padding: 2px 8px;
    border-radius: 24px;
    font-weight: bold;
    top: -4px;
    right: -8px;
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

  @media screen and (max-width: 640px) {
    i {
      font-size: 24px;
    }

    .total-items {
      font-size: 14px;
      padding: 2px 6px;
      top: 2px;
      right: -8px;
    }
  }
`;

export interface IShoopingCartFeatures {
  disablePopup: boolean;
}

export interface IShoppingCartProps {
  cart?: Cart;
  features?: IShoopingCartFeatures;
  onOpenCart: (carId: string | undefined) => void;
  onClearCart: (cartId: string) => void;
  onCheckout: (cartId: string) => void;
}

export const ShoppingCart: React.FunctionComponent<IShoppingCartProps> = (
  props: IShoppingCartProps
) => {
  const [itemsCount, setItemsCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const windowClickListener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".ell-commerce-cart") && showPopup) {
        setShowPopup(false);
      }
    };

    window.addEventListener("mousedown", windowClickListener);
    return () => {
      window.removeEventListener("mousedown", windowClickListener);
    };
  });

  useEffect(() => {
    if (props.cart) {
      let c = 0;
      props.cart.lineItems.digitalItems.forEach((i) => (c += i.quantity));
      props.cart.lineItems.physicalItems.forEach((i) => (c += i.quantity));
      setItemsCount(c);
    } else {
      setItemsCount(0);
    }
  }, [props.cart]);

  const togglePopup = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (props.features?.disablePopup) {
      await props.onOpenCart(props.cart?.id);
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
    <StyledShoppingCart>
      <div onClick={togglePopup}>
        <i className="far fa-shopping-cart"></i>
        {itemsCount > 0 && <div className="total-items">{itemsCount}</div>}
      </div>
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
    </StyledShoppingCart>
  );
};
