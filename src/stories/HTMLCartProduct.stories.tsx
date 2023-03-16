import React, { useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HTMLCartProduct } from "../components/HTMLCartProduct"
import { CartProductHeader } from "../components/CartProductHeader/CartProductHeader"
import { getDefaultMocks } from "./mocks"

export default {
    title: "HTMLCartProduct",
} as ComponentMeta<typeof HTMLCartProduct>

const mock = getDefaultMocks()
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof HTMLCartProduct> = (args) => {
    const [products, setProducts] = useState(args.items)

    return (
        <CartProductHeader>
            {products.map((item, i) => (
                <HTMLCartProduct
                    key={item.id}
                    item={item}
                    currency={args.currency}
                    onChange={(e, item) => {
                        console.log(e.target.value)
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
                    htmlDescription={args.htmlDescription[i]}
                    isHighlighted={args.isHighlighted![i]}
                />
            ))}
        </CartProductHeader>
    )
}

export const WithHeaders = Template.bind({})

WithHeaders.args = {
    items: mock.items,
    currency: mock.currency,
    htmlDescription: mock.items.map((item) => item.description),
    isHighlighted: Array.from({ length: mock.items.length }).fill(false),
}
