import React from "react"
import { ComponentStory } from "@storybook/react"
import { CartOrderSummary } from "../components/CartOrderSummary"
import { getDefaultMocks } from "./mocks"

export default {
    title: "CartOrderSummary",
}

const mock = getDefaultMocks()
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CartOrderSummary> = (args) => (
    <CartOrderSummary {...args} />
)

export const FirstStory = Template.bind({})

FirstStory.args = {
    cart: {
        currency: mock.currency,
        baseAmount: 500,
        discountAmount: 200,
        preTaxCartAmount: 300,
    },
    onCheckoutClick: () => {
        alert("click")
    },
}
