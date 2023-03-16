import React, { useState, useRef, useMemo, useEffect, useCallback } from "react"
import { Product, Variant } from "@pearson-ell/commerce-sdk"
import {
    StyledRecommendedProduct,
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
    StyledProductTitle,
    StyledProductDescription,
    StyledShowMoreBtn,
    EnumStyledRecommendedProductBreakPoints,
} from "./RecommendedProduct.parts"
import noImageSrc from "../../assets/images/no-image.png"
import { cutText, formatPrice } from "../../commons/utils"
import {
    ALLOWED_KEYS,
    MAX_PRODUCT_NAME_DISPLAY_LENGTH,
} from "../../commons/constants"
import { ArrowControlsDown, ArrowControlsUp } from "../../commons/svgs"
import { Message } from "../Message"
import parse from "html-react-parser"
import { useTranslation } from "react-i18next"
import { useBreakpoints } from "../../commons/hooks"
import { SelectVariant } from "../SelectVariant/SelectVariant"

type Props = {
    product: Product
    onAddToCart: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>,
        product: Product,
        quantity: number,
        variant?: Variant
    ) => void
}

export const RecommendedProduct: React.FC<Props> = ({
    product,
    onAddToCart,
}) => {
    const {
        id,
        name,
        price,
        description,
        shortDescription,
        maxPurchaseQuantity,
        images,
        currency,
        variants,
    } = product
    const image = images.find((img) => img.isThumbnail)
    const minPurchaseQuantity = product.minPurchaseQuantity || 1
    const parsedDescription = useMemo(() => parse(description), [description])
    const parsedShortDescription = useMemo(
        () => parse(shortDescription),
        [shortDescription]
    )
    const selectedVariant = useRef<Variant | undefined>()
    const onChangeVariants = useCallback(
        (variant: Variant | undefined) => {
            selectedVariant.current = variant
        },
        [selectedVariant]
    )

    const containerRef = useRef<HTMLDivElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [quantity, setQuantity] = useState(minPurchaseQuantity)
    const [expanded, setExpanded] = useState(false)
    const [isInvalid, setIsInvalid] = useState(false)
    const [message, setMessage] = useState({ text: "", type: "" })
    const { t } = useTranslation()

    useEffect(() => {
        const input = inputRef.current
        if (input && isInvalid) {
            input.setAttribute("aria-invalid", "true")
            input.setAttribute("aria-describedby", "errorMessage")
        } else if (input && !isInvalid) {
            input.removeAttribute("aria-invalid")
            input.removeAttribute("aria-describedby")
        }
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

    const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault()
        const numValue = +ev.target.value
        if (
            numValue >= minPurchaseQuantity &&
            (numValue <= maxPurchaseQuantity || !maxPurchaseQuantity)
        ) {
            setIsInvalid(false)
            setMessage({ text: "", type: "" })
            setQuantity(numValue)
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

    const breakpoint = useBreakpoints<EnumStyledRecommendedProductBreakPoints>(
        containerRef,
        [
            EnumStyledRecommendedProductBreakPoints.mobileSm,
            EnumStyledRecommendedProductBreakPoints.mobileMd,
            EnumStyledRecommendedProductBreakPoints.tabletSm,
            EnumStyledRecommendedProductBreakPoints.tabletMd,
            EnumStyledRecommendedProductBreakPoints.tabletLg,
            EnumStyledRecommendedProductBreakPoints.desktopSm,
            EnumStyledRecommendedProductBreakPoints.desktopMd,
        ]
    )

    return (
        <StyledRecommendedProduct
            key={id}
            ref={containerRef}
            breakpoint={breakpoint}
        >
            <StyledInnerContainer className="innerContainer">
                <StyledLeftFlexBlock className="leftFlexBlock">
                    <StyledImage
                        className="image"
                        src={image?.imageUrl || noImageSrc}
                        alt={image?.altText || ""}
                    />
                </StyledLeftFlexBlock>

                <StyledRightFlexBlock>
                    <StyledProductInfo className="productInfo">
                        <StyledProductNameContainer className="productNameContainer">
                            <StyledProductName className="productName">
                                <StyledProductTitle>
                                    {cutText(
                                        name,
                                        MAX_PRODUCT_NAME_DISPLAY_LENGTH
                                    )}
                                </StyledProductTitle>
                                <StyledProductPrice className="productPriceMobile">
                                    {formatPrice(price, currency)}
                                </StyledProductPrice>
                                <StyledProductDescription
                                    className="description"
                                    id={`${id}-descriptionBlock`}
                                >
                                    {expanded
                                        ? parsedDescription
                                        : parsedShortDescription}
                                </StyledProductDescription>
                                <StyledShowMoreBtn
                                    className="showMore"
                                    onClick={() =>
                                        setExpanded((prevState) => !prevState)
                                    }
                                    aria-expanded={expanded}
                                    aria-controls={`${id}-descriptionBlock`}
                                >
                                    <span className="showMoreLabel">
                                        {expanded
                                            ? t("show_less")
                                            : t("show_more")}
                                        <i>
                                            {expanded ? (
                                                <ArrowControlsUp
                                                    aria-hidden={true}
                                                />
                                            ) : (
                                                <ArrowControlsDown
                                                    aria-hidden={true}
                                                />
                                            )}
                                        </i>
                                    </span>
                                </StyledShowMoreBtn>
                            </StyledProductName>
                            <StyledInput className="input">
                                {variants?.length > 0 ? (
                                    <SelectVariant
                                        onChange={onChangeVariants}
                                        className={"variants"}
                                        variants={variants}
                                    ></SelectVariant>
                                ) : null}
                                <input
                                    ref={inputRef}
                                    onKeyDown={onKeydown}
                                    type="number"
                                    className={
                                        message.type === "Error"
                                            ? "cart-product-input error"
                                            : "cart-product-input"
                                    }
                                    disabled={maxPurchaseQuantity === 1}
                                    defaultValue={quantity}
                                    min={minPurchaseQuantity}
                                    max={maxPurchaseQuantity}
                                    onChange={(ev) => onInputChange(ev)}
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
                        <StyledProductPriceContainer className="productPriceContainer">
                            <StyledProductPrice className="productPrice">
                                {formatPrice(price, currency)}
                            </StyledProductPrice>
                            <StyledButton
                                className="button"
                                aria-label={`${t("add_to_cart")} ${name}`}
                                onClick={(
                                    ev:
                                        | React.MouseEvent<HTMLButtonElement>
                                        | React.KeyboardEvent<HTMLButtonElement>
                                ) =>
                                    onAddToCart(
                                        ev,
                                        product,
                                        quantity,
                                        selectedVariant.current
                                    )
                                }
                            >
                                {t("add_to_cart")}
                            </StyledButton>
                        </StyledProductPriceContainer>
                    </StyledProductInfo>
                </StyledRightFlexBlock>
            </StyledInnerContainer>
        </StyledRecommendedProduct>
    )
}
