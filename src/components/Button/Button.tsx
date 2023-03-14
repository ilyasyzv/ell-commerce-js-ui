import React from "react"
import { Variants } from "./index"
import { StyledButton as _StyledButton } from "./Button.parts"

export enum Variant {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
}

export type Props = {
    variant: Variant
    type: "button" | "submit" | "reset" | undefined
    label: string
    disabled: boolean | undefined
    onClick: (
        ev:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>
    ) => void
    className?: string
    children?: React.ReactNode
}

export const Button = ({
    variant,
    label,
    className,
    disabled,
    onClick,
    type = "button",
    children,
}: Props) => {
    const StyledButton = Variants[variant] as typeof _StyledButton

    return (
        <StyledButton
            onClick={(ev) => onClick(ev)}
            disabled={disabled}
            className={className}
            type={type}
        >
            {children}
            {label}
        </StyledButton>
    )
}
