import React from "react"
import { ComponentStory } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { RecommendedBundle } from "../components/RecommendedBundle"
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
                imageUrl:
                    "data:image/png;base64,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",
                altText: "",
                isThumbNail: true,
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
    onAddButtonClick: action("Click Button"),
}
