import React from "react";
import styled from "styled-components";
import { breakpoints } from "../commons/constants";

const StyledCartQty = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #333333;

  span.text-wrapper {
    font-family: "OpenSansBold";
  }

  span.items-wrapper {
    color: #000000;
    font-weight: 400;
    font-size: 16px;
    margin-left: 20px;
  }

  @media screen and (min-device-width: ${breakpoints.tabletSm}px) and (max-device-width: ${breakpoints.tabletLg}px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      margin: 5px 0px 0px;
    }
  }
`;

interface ICartQty {
  itemsCount: number;
  className?: string;
}

export const CartQty: React.FC<ICartQty> = ({
  itemsCount,
  className,
}: ICartQty) => {
  return (
    <StyledCartQty className={className}>
      <span className='text-wrapper'>Your Cart</span>
      {itemsCount !== 0 && (<span className='items-wrapper'>{itemsCount === 1 && '(1 item)'} {itemsCount > 1 && `(${itemsCount} items)`}</span>)}
    </StyledCartQty>
  );
};
