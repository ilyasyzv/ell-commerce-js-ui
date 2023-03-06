import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { RecommendedProduct } from "../components/RecommendedProduct"
import { getRecommendedProductMocks } from "./mocks"

export default {
    title: "RecommendedProduct",
} as ComponentMeta<typeof RecommendedProduct>

const mock = getRecommendedProductMocks()
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof RecommendedProduct> = (args) => {
    return (
        <>
            {args.items.map((item) => (
                <RecommendedProduct
                    key={item.id}
                    product={item}
                    onAddToCart={() => {
                        console.log(`${item.id} added to cart`)
                    }}
                />
            ))}
        </>
    )
}

export const WithHeaders = Template.bind({})

WithHeaders.args = {
    items: mock.items,
}
