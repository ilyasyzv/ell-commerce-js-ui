import React from "react"
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Button.parts"
import { Variant } from "./index"

export const Variants: { [Property in Variant]: React.FC } = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    tertiary: TertiaryButton,
}
