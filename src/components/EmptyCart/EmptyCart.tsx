import React from "react"
import { useTranslation } from "react-i18next"
import { EmptyCartSvg } from "../../commons/svgs"
import { Button, Variant } from "../Button"
import { StyledEmptyCart } from "./EmptyCart.parts"

interface EmptyCartProps {
    onBackButtonClick: () => void
    className?: string
}

export const EmptyCart: React.FunctionComponent<EmptyCartProps> = (
    props: EmptyCartProps
) => {
    const { t } = useTranslation()

    return (
        <StyledEmptyCart className={props.className}>
            <EmptyCartSvg className="cart-image" />
            <p className="text">
                Your cart is empty. Discover products to add to your cart
            </p>
            <Button
                className="button"
                variant={Variant.secondary}
                type="button"
                label={t("Browse products")}
                onClick={() => props.onBackButtonClick()}
            />
        </StyledEmptyCart>
    )
}
