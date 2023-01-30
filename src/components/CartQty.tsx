import React from "react";
import styled from 'styled-components';
import { TABLET_BREAKPOINTS } from '../commons/constants';

const StyledShoppingCartIcon = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #333333;

  span {
    color: #000000;
    font-weight: 400;
    font-size: 16px;
    margin-left: 20px;
  }

  @media screen and (min-device-width: ${TABLET_BREAKPOINTS.small}px) and (max-device-width: ${TABLET_BREAKPOINTS.large}px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      margin: 5px 0px 0px;
    }
  }    
`;

interface ICartQty {
  itemsCount: number
}

export const CartQty: React.FC<ICartQty> = ({itemsCount}: ICartQty) => {
  return (
    <StyledShoppingCartIcon>
      Your cart 
      {itemsCount !== 0 && (<span>{itemsCount === 1 && '(1 item)'} {itemsCount > 1 && `(${itemsCount} items)`}</span>)}
    </StyledShoppingCartIcon>
  );
};
