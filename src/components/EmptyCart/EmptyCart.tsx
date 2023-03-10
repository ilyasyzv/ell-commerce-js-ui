import React from "react"
import { EmptyCartSvg } from "../../commons/svgs"
import { StyledEmptyCart } from "./EmptyCart.parts"

interface EmptyCartProps {
    onBackButtonClick: () => void
    className?: string
}

export const EmptyCart: React.FunctionComponent<EmptyCartProps> = (
    props: EmptyCartProps
) => {
    return (
        <StyledEmptyCart className={props.className}>
            <EmptyCartSvg className="cart-image" />
            <p className="text">
                Your cart is empty. Discover products to add to your cart
            </p>
            <button
                className="button"
                onClick={() => props.onBackButtonClick()}
            >
                Browse products
            </button>
        </StyledEmptyCart>
    )
}
