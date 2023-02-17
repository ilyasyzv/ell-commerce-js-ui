import React from "react";
import styled from "styled-components";
import { breakpoints } from "../commons/constants";
import { useTranslation } from 'react-i18next'

const StyledCartQty = styled.div`
  display: flex;
  font-family: "OpenSans", sans-serif;
  flex-wrap: wrap;
  align-items: end;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 26px;
  color: #333333;
  box-sizing: border-box;
  .text-wrapper {
    padding-right: 20px;
  }
  .items-wrapper {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
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
          <span className='items-wrapper'>{itemsCount === 1 && `(1 ${t('item')})`}
            {itemsCount > 1 && `(${itemsCount} ${t('items')})`}</span>)}
    </StyledCartQty>
  );
};
