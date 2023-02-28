
import React, {useState} from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShoppingCartIcon } from '../components/ShoppingCartIcon';
import { getDefaultMocks } from "./mocks";
import {LanguageSelector} from "../components/LanguageSelector";
import {CartOrderSummary, CartProduct, CartProductHeader, CartQty} from "../components";
import {Cart} from "ell-commerce-sdk";
import styled from "styled-components";
import {breakpoints} from "../commons/constants";
export default {
    title: 'LanguageSelector',
}


const StyledContainer = styled.div`
  display: grid;
  grid-template-columns:  1fr 300px;
  
  .buttons {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .products {
    padding: 15px;
  }
`;

const mock = getDefaultMocks()
const Template: ComponentStory<typeof ShoppingCartIcon> = (args) => {
    const [products, setProducts] = useState(args.items)
 return   <StyledContainer>
     <div className="buttons">
         <LanguageSelector></LanguageSelector>
         <CartQty itemsCount={args.cartQty1}></CartQty>
     </div>
     <div className="products">
     <CartProductHeader>
         {products.map((item) => (
             <CartProduct
                 key={item.id}
                 item={item}
                 currency={args.currency}
                 onChange={args.onChange}
                 onDelete={(e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>, itemId: string) => {
                     setProducts((prevState) => prevState.filter((item) => item.id !== itemId))
                 }}
             />
         ))}
     </CartProductHeader>
     </div>
     <CartOrderSummary cart={args.cart}></CartOrderSummary>
    </StyledContainer>
}
export const FirstStory = Template.bind({});

FirstStory.args = {
    cartQty1: 3,
    cart: {
        currency:{symbol: "$"},
        baseAmount: 63530.19,
        discountAmount: 100
    },
    items: mock.items,
    currency: mock.currency,

};