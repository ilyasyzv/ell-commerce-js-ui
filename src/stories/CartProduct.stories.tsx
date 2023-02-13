import React from 'react';
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

    return <CartProductHeader>
        {args.items.map((item) => (
            <CartProduct
                key={item.id}
                item={item}
                currency= {args.currency}
                onChange={args.onChange}
                onDelete={args.onDelete}
            />
        ))}
    </CartProductHeader>
}

export const WithHeaders = Template.bind({});

WithHeaders.args = {
    items: mock.items,
    currency: mock.currency,
    onChange: ()=> {alert('change')},
    onDelete: ()=> {alert("onDelete")}
};
