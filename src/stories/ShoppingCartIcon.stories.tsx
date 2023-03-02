import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ShoppingCartIcon } from '../components/ShoppingCartIcon';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'ShoppingCartIcon',
} as ComponentMeta<typeof ShoppingCartIcon>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ShoppingCartIcon> = (args) =>{

    const cart = {items: [{quantity: args.count}]}
    return <ShoppingCartIcon cart={cart}></ShoppingCartIcon>
}

export const FirstStory = Template.bind({});

FirstStory.args = {
    count: 1
};