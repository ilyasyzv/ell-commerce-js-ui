
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import {EmptyCart} from "../components";

export default {
    title: 'EmptyCart',
    component: EmptyCart,
} as ComponentMeta<typeof EmptyCart>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof EmptyCart> = (args) =>{

    return <EmptyCart {...args} ></EmptyCart>
}

export const FirstStory = Template.bind({});

FirstStory.args = {
}