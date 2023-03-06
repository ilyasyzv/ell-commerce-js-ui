import React from "react"
import { ComponentStory } from "@storybook/react"
import { CartQty } from "../components/CartQty"
import { Container } from "../components/Container/Container"
export default {
    title: "Container",
}

const Template: ComponentStory<typeof CartQty> = () => <Container></Container>
export const FirstStory = Template.bind({})

FirstStory.args = {}
