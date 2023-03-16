import React, { useCallback, useEffect, useRef, useState } from "react"
import { FC } from "react"
import { VariantContainer } from "./SelectVariant.parts"
import { ArrowControlsDown } from "../../commons/svgs"
import { Variant } from "@pearson-ell/commerce-sdk"

export interface ISelectVariant {
    variants: Variant[]
    defaultValue?: Variant
    className?: string
    onChange?: (variant: Variant | undefined) => void
}

export const SelectVariant: FC<ISelectVariant> = ({
    variants,
    defaultValue,
    className,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(defaultValue)
    const optionsRef = useRef(null)

    const onSelectClick = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [setIsOpen])

    useEffect(() => {
        const close = (event: any) => {
            if (
                event.target.parentNode !== optionsRef.current &&
                event.target !== optionsRef.current
            ) {
                event.stopPropagation()
                setIsOpen(false)
            }
        }

        if (isOpen) {
            window.addEventListener("mousedown", close)
            window.addEventListener("touchstart", close)
        }

        return () => {
            window.removeEventListener("touchstart", close)
            window.removeEventListener("mousedown", close)
        }
    }, [isOpen, setIsOpen, optionsRef.current])

    const onOptionClick = useCallback(
        (event: any, item?: Variant) => {
            event.stopPropagation()

            setSelectedItem(item)
            if (onChange) {
                onChange(item)
            }
            setIsOpen(false)
        },
        [setSelectedItem, setIsOpen, onChange]
    )

    return (
        <VariantContainer className={className}>
            <div className="select-custom" onClick={onSelectClick}>
                <span className="select-value">
                    {selectedItem?.shortName ?? "Version:"}
                </span>
                <ArrowControlsDown className="select-arrow"></ArrowControlsDown>
            </div>
            <div
                className={isOpen ? "select-options" : "select-options-hide"}
                ref={optionsRef}
            >
                <div
                    className="select-option"
                    onClick={(event) => onOptionClick(event)}
                >
                    Version:
                </div>
                {variants.map((item) => (
                    <div
                        className="select-option"
                        key={item.id}
                        onClick={(event) => onOptionClick(event, item)}
                    >
                        {item.shortName}
                    </div>
                ))}
            </div>
        </VariantContainer>
    )
}
