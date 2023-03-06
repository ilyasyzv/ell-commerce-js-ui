import React from "react"
import { ComponentStory } from "@storybook/react"
import { RecommendedBundle } from "../components/RecommendedBundle"
import { Product } from "ell-commerce-sdk"
import { getDefaultMocks } from "./mocks"

export default {
    title: "RecommendedBundle",
}

const mock = getDefaultMocks()
const Template: ComponentStory<typeof RecommendedBundle> = (args) => (
    <RecommendedBundle {...args} />
)

export const FirstStory = Template.bind({})

FirstStory.args = {
    data: {
        images: [
            {
                imageUrl: "",
                altText: "",
            },
        ],
        name: "Gold Package",
        price: 130,
        currency: mock.currency,
        shortDescription: `
            All our test prep together to give you the very best support for success. Includes:
            <ul>
                <li>5 tests</li>
                <li>PTE Academic Question Bank</li>
                <li>The Official Guide to PTE Academic</li>
            </ul>
        `,
    },
    backgroundImageUrl:
        "https://mcdn.wallpapersafari.com/medium/38/7/fhixbC.jpg",
    onAddButtonClick: (data: Product) => {
        console.log(data)
    },
}
