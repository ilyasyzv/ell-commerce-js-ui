import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CartProduct } from '../components/CartProduct';
import { CartProductHeader } from '../components/CartProductHeader/CartProductHeader';
import {getDefaultMocks} from "./mocks";

export default {
    title: 'CartProduct',
    component: CartProduct,
} as ComponentMeta<typeof CartProduct>;

const mock = getDefaultMocks()
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CartProduct> = (args) =>
{
    const [products, setProducts] = useState(args.items)

    return <CartProductHeader>
        {products.map((item) => (
            <CartProduct
                key={item.id}
                item={item}
                currency= {args.currency}
                onChange={(e, item)=> {
                    console.log(e.target.value);
                    setProducts((prevState) => prevState.map((stateItem) => {
                        if(stateItem.id === item.id) {
                            stateItem.originalPrice = stateItem.listPrice * Number(e.target.value)
                            stateItem.salePrice = stateItem.listPrice * Number(e.target.value)
                        }
                        return stateItem
                    }))
                }}
                onDelete={(e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>, itemId:string) => {
                    setProducts((prevState) => prevState.filter((item) => item.id !== itemId))
                }}
            />
        ))}
    </CartProductHeader>
}

export const WithHeaders = Template.bind({});

WithHeaders.args = {
    items: mock.items,
    currency: mock.currency,
};
