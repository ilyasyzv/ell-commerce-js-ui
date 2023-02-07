import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cart, CartItem } from "ell-commerce-sdk";
import CartIcon from "../assets/images/cart-icon.svg"

const StyledShoppingCartIcon = styled.div`
  display: block;
  position: relative;
  width: 32px;
  height: auto;
  .cart-icon {
    z-index: 1;
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
  .total-items {
    position: absolute;
    padding: 1.5px;
    top: -10px;
    right: -6px;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 14px;
    background-color: #9E007E;
    color: #ffffff;
    border: 2.25px solid #ffffff;
    border-radius: 50%;
    height: 21px;
    min-width: 21px;
    display: block;
    text-align: center;
  }
  
  .more-nine {
    font-size: 0.7rem;
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
    font-family: "OpenSans", sans-serif;
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
