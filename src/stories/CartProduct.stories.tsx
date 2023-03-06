import React, { useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { CartProduct } from "../components/CartProduct"
import { CartProductHeader } from "../components/CartProductHeader/CartProductHeader"
import { DEBOUNCE_INTERVAL } from "../commons/constants"
import { getDefaultMocks, getModifiedDefaultMocks } from "./mocks"

export default {
    title: "CartProduct",
} as ComponentMeta<typeof CartProduct>

const mock = getDefaultMocks()
const testImageHeightMock = getModifiedDefaultMocks()
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CartProduct> = (args) => {
    const [products, setProducts] = useState(args.items)

    return (
        <CartProductHeader>
            {products.map((item) => (
                <CartProduct
                    key={item.id}
                    item={item}
                    currency={args.currency}
                    debounceChangeQty={args.debounceChangeQty}
                    onChange={(e, item) => {
                        setProducts((prevState) =>
                            prevState.map((stateItem) => {
                                if (stateItem.id === item.id) {
                                    stateItem.originalPrice =
                                        stateItem.listPrice *
                                        Number(e.target.value)
                                    stateItem.salePrice =
                                        stateItem.listPrice *
                                        Number(e.target.value)
                                }
                                return stateItem
                            })
                        )
                    }}
                    onDelete={(
                        e:
                            | React.MouseEvent<HTMLButtonElement>
                            | React.KeyboardEvent<HTMLButtonElement>,
                        itemId: string
                    ) => {
                        setProducts((prevState) =>
                            prevState.filter((item) => item.id !== itemId)
                        )
                    }}
                    hasDescription={args.hasDescription}
                />
            ))}
        </CartProductHeader>
    )
}

export const WithHeaders = Template.bind({})
export const TestImageHeightStory = Template.bind({})

WithHeaders.args = {
    items: mock.items,
    currency: mock.currency,
    debounceChangeQty: DEBOUNCE_INTERVAL,
    hasDescription: false,
}

TestImageHeightStory.args = {
    items: testImageHeightMock.items,
    currency: mock.currency,
    debounceChangeQty: 250,
    hasDescription: false,
}
