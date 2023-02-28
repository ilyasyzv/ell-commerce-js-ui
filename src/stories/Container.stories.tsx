
import React from 'react';
import styled from "styled-components";
import styledContainerQuery from  "styled-container-query"

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CartQty } from '../components/CartQty';
import {Container} from "../components/Container/Container";

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Container',

};


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CartQty> = (args) => <Container></Container>;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /*👇 The args you need here will depend on your component */
};