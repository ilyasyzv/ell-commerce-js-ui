import React from "react";
import styled from "styled-components";
import { breakpoints } from "../commons/constants";
import { useTranslation } from 'react-i18next'

const StyledCartQty = styled.div`
  display: flex;
  font-family: "OpenSans", sans-serif;
  align-items: end;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 26px;
  color: #333333;
  box-sizing: border-box;
  
  .items-wrapper {
    font-weight: 400;
    font-size: 16px;
    margin-left: 20px;
    line-height: 20px;
  }

  @media screen and (min-device-width: ${breakpoints.tabletSm}px) and (max-device-width: ${breakpoints.tabletLg}px) {
    flex-direction: column;
    align-items: flex-start;
    .items-wrapper {
      margin-left: 0;
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
  const{t} =useTranslation()
  return (
    <StyledCartQty className={className}>
      <span className='text-wrapper'>{t("your_cart")}</span>
      {itemsCount !== 0 && (
          <span className='items-wrapper'>{itemsCount === 1 && `(1 ${t('item')}})`}
            {itemsCount > 1 && `(${itemsCount} ${t('items')})`}</span>)}
    </StyledCartQty>
  );
};
