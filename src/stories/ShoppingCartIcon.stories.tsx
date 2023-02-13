
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShoppingCartIcon } from '../components/ShoppingCartIcon';
import { getDefaultMocks } from "./mocks";

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'ShoppingCartIcon',
    component: ShoppingCartIcon,
} as ComponentMeta<typeof ShoppingCartIcon>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ShoppingCartIcon> = (args) => <ShoppingCartIcon {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    cart: getDefaultMocks()
};