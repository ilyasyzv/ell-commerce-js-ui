import React, { useCallback, useRef, useState, useMemo, useEffect } from "react"
import { CartItem, Currency } from "@pearson-ell/commerce-sdk"
import {
    StyledCartProduct,
    StyledInnerContainer,
    StyledImage,
    StyledProductInfo,
    StyledProductNameContainer,
    StyledProductName,
    StyledInput,
    StyledProductPriceContainer,
    StyledProductPrice,
    StyledButton,
    StyledLeftFlexBlock,
    StyledRightFlexBlock,
    StyledDisabledProductPrice,
    StyledProductTitle,
    StyledProductDescription,
    StyledDiscountWrapper,
    EnumStyledCartProductBreakPoints,
} from "./CartProduct.parts"
import noImageSrc from "../../assets/images/no-image.png"
import { cutText, formatPrice, onInputDebounce } from "../../commons/utils"
import {
    DEBOUNCE_INTERVAL,
    ALLOWED_KEYS,
    MAX_PRODUCT_NAME_DISPLAY_LENGTH,
} from "../../commons/constants"
import { BucketSvg } from "../../commons/svgs"
import { Message } from "../Message"
import parse from "html-react-parser"
import { useTranslation } from "react-i18next"
import { useBreakpoints } from "../../commons/hooks"
import { setAriaInvalidAttributes } from "../../commons/utils"

export type Props = {
    item: CartItem
    currency: Currency
    onChange: (
        ev: React.ChangeEvent<HTMLInputElement>,
        item: CartItem
    ) => void | Promise<void>
    onDelete: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>,
        itemId: string
    ) => void
    hasDescription?: boolean
    debounceChangeQty?: number
    isBusy?: boolean
}

export const CartProduct: React.FC<Props> = ({
    item,
    currency,
    onChange,
    onDelete,
    hasDescription = false,
    debounceChangeQty = DEBOUNCE_INTERVAL,
    isBusy = false,
}) => {
    const minPurchaseQuantity = item.minPurchaseQuantity || 1
    const maxPurchaseQuantity = item.maxPurchaseQuantity
    const parsedShortDescription = useMemo(
        () => parse(item.shortDescription),
        [item.shortDescription]
    )

    const containerRef = useRef<HTMLDivElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [value, setValue] = useState(item.quantity)
    const [isInvalid, setIsInvalid] = useState(false)
    const [isDisabled, setIsDisabled] = useState(
        maxPurchaseQuantity === item.quantity
    )
    const [message, setMessage] = useState({ text: "", type: "" })
    const { t } = useTranslation()

    useEffect(() => {
        if (maxPurchaseQuantity !== item.quantity) {
            setIsDisabled(isBusy)
        }
    }, [isBusy, maxPurchaseQuantity])

    useEffect(() => {
        setAriaInvalidAttributes(inputRef, isInvalid, "errorMessage")
    }, [isInvalid])

    const onKeydown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (
                !ALLOWED_KEYS.includes(event.code) &&
                Number.isNaN(Number(event.key))
            ) {
                event.preventDefault()
            }
        },
        []
    )

    const onInputChange = (
        ev: React.ChangeEvent<HTMLInputElement>,
        item: CartItem
    ) => {
        ev.preventDefault()
        const numValue = +ev.target.value
        if (
            numValue >= minPurchaseQuantity &&
            (numValue <= maxPurchaseQuantity || !maxPurchaseQuantity)
        ) {
            setIsInvalid(false)
            setMessage({ text: "", type: "" })
            onChange(ev, item)
            setValue(numValue)
        } else if (numValue < minPurchaseQuantity) {
            setIsInvalid(true)
            setMessage({
                text: `Min qty is ${minPurchaseQuantity}`,
                type: "Error",
            })
        } else if (numValue > maxPurchaseQuantity) {
            setIsInvalid(true)
            setMessage({
                text: `Max qty is ${maxPurchaseQuantity}`,
                type: "Error",
            })
        }
    }

    const onInputDebounceChange = useCallback(
        onInputDebounce(onInputChange, debounceChangeQty),
        [onInputChange]
    )

    const breakpoint = useBreakpoints<EnumStyledCartProductBreakPoints>(
        containerRef,
        [
            EnumStyledCartProductBreakPoints.mobileSm,
            EnumStyledCartProductBreakPoints.mobileMd,
            EnumStyledCartProductBreakPoints.tabletSm,
            EnumStyledCartProductBreakPoints.tabletMd,
            EnumStyledCartProductBreakPoints.tabletLg,
            EnumStyledCartProductBreakPoints.desktopSm,
        ]
    )

    return (
        <StyledCartProduct
            key={item.id}
            ref={containerRef}
            breakpoint={breakpoint}
        >
            <StyledInnerContainer className="innerContainer">
                <StyledLeftFlexBlock className={"leftFlexBlock"}>
                    <StyledImage
                        role="presentation"
                        className={"image"}
                        src={item.imageUrl || noImageSrc}
                        alt=""
                    />
                </StyledLeftFlexBlock>

                <StyledRightFlexBlock>
                    <StyledProductInfo className={"productInfo"}>
                        <StyledProductNameContainer
                            className={"productNameContainer"}
                        >
                            <StyledProductName className={"productName"}>
                                <StyledProductTitle>
                                    {cutText(
                                        item.name,
                                        MAX_PRODUCT_NAME_DISPLAY_LENGTH
                                    )}
                                </StyledProductTitle>
                                {hasDescription && item.shortDescription && (
                                    <StyledProductDescription>
                                        {parsedShortDescription}
                                    </StyledProductDescription>
                                )}
                            </StyledProductName>
                            <StyledInput className={"input"}>
                                <input
                                    ref={inputRef}
                                    type="number"
                                    onKeyDown={onKeydown}
                                    className={
                                        message.type === "Error"
                                            ? "cart-product-input error"
                                            : "cart-product-input"
                                    }
                                    disabled={isDisabled}
                                    defaultValue={value}
                                    min={minPurchaseQuantity}
                                    max={maxPurchaseQuantity}
                                    onChange={(ev) =>
                                        onInputDebounceChange(ev, item)
                                    }
                                    aria-label="Quantity of product"
                                />
                                {isInvalid && (
                                    <Message
                                        id="errorMessage"
                                        text={message.text}
                                        type={message.type}
                                    />
                                )}
                            </StyledInput>
                        </StyledProductNameContainer>
                        <StyledProductPriceContainer
                            className={"productPriceContainer"}
                        >
                            {item.totalOriginalPrice ===
                                item.totalSalePrice && (
                                <StyledProductPrice className={"productPrice"}>
                                    {formatPrice(
                                        item.totalOriginalPrice,
                                        currency
                                    )}
                                </StyledProductPrice>
                            )}
                            {item.totalOriginalPrice !==
                                item.totalSalePrice && (
                                <StyledDiscountWrapper
                                    className={"discountWrapper"}
                                >
                                    {item.totalSalePrice >= 0 && (
                                        <StyledProductPrice
                                            className={
                                                "discount-price-container productPrice"
                                            }
                                        >
                                            {formatPrice(
                                                item.totalSalePrice,
                                                currency
                                            )}
                                        </StyledProductPrice>
                                    )}
                                    <StyledDisabledProductPrice
                                        className={
                                            "discount-price-container disabledProductPrice"
                                        }
                                    >
                                        {formatPrice(
                                            item.totalOriginalPrice,
                                            currency
                                        )}
                                    </StyledDisabledProductPrice>
                                </StyledDiscountWrapper>
                            )}
                            <StyledButton
                                className={"button"}
                                aria-label={`${t("remove")} ${item.name}`}
                                onClick={(
                                    ev:
                                        | React.MouseEvent<HTMLButtonElement>
                                        | React.KeyboardEvent<HTMLButtonElement>
                                ) => onDelete(ev, item.id)}
                            >
                                <i>
                                    <BucketSvg aria-hidden={true} />
                                </i>
                                {t("remove")}
                            </StyledButton>
                        </StyledProductPriceContainer>
                    </StyledProductInfo>
                </StyledRightFlexBlock>
            </StyledInnerContainer>
        </StyledCartProduct>
    )
}
