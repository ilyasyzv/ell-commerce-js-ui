import React from "react"
import { StyledLink } from "./Link.parts"

export type Props = {
    rel?: string
    className?: string
    onClick?: (
        ev:
            | React.MouseEvent<HTMLLinkElement>
            | React.KeyboardEvent<HTMLLinkElement>
    ) => void
    children?: React.ReactNode
    disabled?: boolean
    href?: string
    target?: string
    label?: string
}

export const Link: React.FC<Props> = ({
    children,
    className,
    href,
    target,
    label,
    onClick,
    disabled,
}) => {
    return (
        <StyledLink
            href={href}
            className={className}
            target={target}
            disabled={disabled}
            aria-label={label}
            onClick={onClick}
        >
            {children}
        </StyledLink>
    )
}
