
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CartOrderSummary } from '../components/CartOrderSummary';

export default {
    title: 'CartOrderSummary',
    component: CartOrderSummary,
} as ComponentMeta<typeof CartOrderSummary>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CartOrderSummary> = (args) => <CartOrderSummary {...args}/>;

export const FirstStory = Template.bind({});

FirstStory.args = {
    cart: {
        currency: {symbol: "$"},
        baseAmount: 500,
        discountAmount: 200,
        onCheckoutClick: ()=> {alert("click")}
    }
};