import { Cart } from "@pearson-ell/commerce-sdk"
import React, { useState, useRef, useEffect } from "react"
import { formatPrice } from "../../commons/utils"
import { useTranslation } from "react-i18next"
import {
    CartOrderSummaryComponentBreakPoints,
    StyledFormFooter,
    StyledCartOrderAgreementWrapper,
    StyledCartOrderDiscount,
    StyledCartOrderHeader,
    StyledCartOrderPrice,
    StyledCartOrderPriceWrapper,
    StyledCartOrderSubtotal,
    StyledCartOrderSummary,
    StyledCartOrderTotalWrapper,
    StyledTotalLabel,
    StyledCouponBlock,
    StyledCouponInputWrapper,
    StyledCartOrderCouponDiscount,
} from "./CartOrderSummary.parts"
import { useBreakpoints } from "../../commons/hooks"
import { Button, Variant } from "../Button"
import { Input } from "../Input"
import { getPolicieLink } from "./CartOrderSummary.utils"
import { COUPON_INPUT_LIMIT, COUPON_INPUT_MAX_LEN } from "./constants"

export type PolicieLink = {
    name: string
    url?: string
}

export interface ICartOrderSummary {
    className?: string
    cart: Cart
    onContinueShoppingClick?: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>
    ) => void
    onCheckoutClick?: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>
    ) => void
    policiesLinks: PolicieLink[]
    policiesLinksCallback?: (
        e:
            | React.MouseEvent<HTMLLinkElement>
            | React.KeyboardEvent<HTMLLinkElement>,
        linkName: string
    ) => void
}

export const CartOrderSummary: React.FC<ICartOrderSummary> = ({
    className,
    cart,
    onCheckoutClick,
    onContinueShoppingClick,
    policiesLinks,
    policiesLinksCallback,
}: ICartOrderSummary) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [couponInputValue, setCouponInputValue] = useState<string>("")
    const [couponsApplied, setCouponsApplied] = useState<string[]>([])
    const [isCouponInputShown, setIsCouponInputShown] = useState<boolean>(
        couponsApplied.length === 0
    )
    const policiesLength = policiesLinks.length
    const { t } = useTranslation()
    const containerRef = useRef(null)
    const conuponInputRef = useRef<HTMLInputElement | null>(null)
    const breakpoint = useBreakpoints<CartOrderSummaryComponentBreakPoints>(
        containerRef,
        [
            CartOrderSummaryComponentBreakPoints.mobileMd,
            CartOrderSummaryComponentBreakPoints.desktopSm,
        ]
    )

    const onSubmit = (
        ev:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>
    ) => {
        ev.preventDefault()
        if (onCheckoutClick) {
            onCheckoutClick(ev)
        }
    }
    const onContinueShopping = (
        ev:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>
    ) => {
        ev.preventDefault()
        if (onContinueShoppingClick) {
            onContinueShoppingClick(ev)
        }
    }

    const toogleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        setIsDisabled(!isChecked)
    }

    const onPolicieLinkClick = (
        e:
            | React.MouseEvent<HTMLLinkElement>
            | React.KeyboardEvent<HTMLLinkElement>,
        linkName: string
    ) => {
        e.preventDefault()
        if (policiesLinksCallback) {
            policiesLinksCallback(e, linkName)
        }
    }

    const onCouponInputChage = (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault()

        // validate input - WIP

        setCouponInputValue(ev.target.value)
    }

    const onCouponApply = (
        ev:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>
        // couponCode:string
    ) => {
        ev.preventDefault()
        // API call
        // .then(() => {
        // setCouponsApplied((prevState) => [...prevState, couponCode])
        // setIsCouponInputShown(false)
        // })
    }

    if (!cart) {
        return <div></div>
    }

    return (
        <StyledCartOrderSummary
            className={className}
            ref={containerRef}
            breakpoint={breakpoint}
        >
            <form className="order-summary-form">
                <StyledCartOrderHeader>
                    {t("order_summary")}
                </StyledCartOrderHeader>
                <StyledCartOrderPriceWrapper>
                    <StyledCartOrderSubtotal>
                        <span>{t("subtotal")}</span>
                        <StyledCartOrderPrice>
                            {formatPrice(cart.baseAmount, cart.currency)}
                        </StyledCartOrderPrice>
                    </StyledCartOrderSubtotal>
                    {cart?.discountAmount > 0 && (
                        <StyledCartOrderDiscount>
                            <span>{t("discount")}</span>
                            <StyledCartOrderPrice>
                                -
                                {formatPrice(
                                    cart.discountAmount,
                                    cart.currency
                                )}
                            </StyledCartOrderPrice>
                        </StyledCartOrderDiscount>
                    )}

                    {[...new Set(couponsApplied)].map((cp) => (
                        <StyledCartOrderCouponDiscount key={cp}>
                            <p className="coupon-discount-label">
                                {t("coupon_discount")}
                                <span className="coupon-code">{cp}</span>
                            </p>

                            <Button
                                className="coupon-remove-btn"
                                variant={Variant.linkLike}
                                type="button"
                                label={t("remove")}
                                onClick={() =>
                                    setCouponsApplied((prevState) =>
                                        prevState.filter((item) => item !== cp)
                                    )
                                }
                            />
                            <StyledCartOrderPrice>
                                -
                                {formatPrice(
                                    cart.discountAmount,
                                    cart.currency
                                )}
                            </StyledCartOrderPrice>
                        </StyledCartOrderCouponDiscount>
                    ))}

                    <StyledCouponBlock>
                        <Button
                            className="enter-coupon-button"
                            variant={Variant.linkLike}
                            type="button"
                            label={t("enter_discount_code")}
                            aria-expanded={isCouponInputShown}
                            aria-controls="couponInput"
                            onClick={() =>
                                setIsCouponInputShown((prevState) => !prevState)
                            }
                        />

                        <StyledCouponInputWrapper
                            className={isCouponInputShown ? "" : "hidden"}
                            id="couponInput"
                        >
                            <Input
                                inputRef={conuponInputRef}
                                className="coupon-input"
                                type="text"
                                maxLength={COUPON_INPUT_MAX_LEN}
                                // pattern="[a-zA-Z0-9_\ -]"
                                value={couponInputValue}
                                name={t("enter_discount_code") as string}
                                onChange={(ev) => onCouponInputChage(ev)}
                                isInvalid={false}
                                errorMessage={null}
                            />
                            <Button
                                className="coupon-btn"
                                variant={Variant.tertiary}
                                type="button"
                                label={t("Apply")}
                                disabled={
                                    couponInputValue.length < COUPON_INPUT_LIMIT
                                }
                                onClick={(ev) => onCouponApply(ev)}
                            />
                        </StyledCouponInputWrapper>
                    </StyledCouponBlock>
                </StyledCartOrderPriceWrapper>
                {cart?.discountAmount > 0 && (
                    <StyledCartOrderTotalWrapper>
                        <StyledTotalLabel>
                            <span className="label">{t("total")}</span>
                            <span className="tax-note">
                                {cart.taxIncluded ? t("include") : t("exclude")}{" "}
                                {t("Tax")}
                            </span>
                        </StyledTotalLabel>

                        <StyledCartOrderPrice>
                            {formatPrice(cart.preTaxCartAmount, cart.currency)}
                        </StyledCartOrderPrice>
                    </StyledCartOrderTotalWrapper>
                )}
                <StyledFormFooter>
                    <StyledCartOrderAgreementWrapper className="agreement-wrapper">
                        <input
                            type="checkbox"
                            onChange={toogleCheckbox}
                            aria-labelledby="agreementText"
                        />
                        <span className="agreement-text" id="agreementText">
                            {t("i_agree")}{" "}
                            {policiesLinks
                                .slice(0, policiesLength - 1)
                                .map((link, index) => {
                                    return (
                                        <span key={link.name}>
                                            {getPolicieLink(
                                                link,
                                                onPolicieLinkClick
                                            )}{" "}
                                            {index === policiesLength - 2
                                                ? ""
                                                : ", "}
                                        </span>
                                    )
                                })}
                            {t(" and ")}{" "}
                            {
                                <span
                                    key={policiesLinks[policiesLength - 1].name}
                                >
                                    {getPolicieLink(
                                        policiesLinks[policiesLength - 1],
                                        onPolicieLinkClick
                                    )}
                                </span>
                            }
                            {"."}
                            {/* <a>
                                <Trans
                                    i18nKey={"privacy_policy"}
                                    components={{ b: <b /> }}
                                />
                            </a> */}
                        </span>
                    </StyledCartOrderAgreementWrapper>

                    <Button
                        className="checkout-btn"
                        variant={Variant.secondary}
                        type="submit"
                        label={t("checkout")}
                        disabled={isDisabled}
                        onClick={(ev) => onSubmit(ev)}
                    />
                    <Button
                        className="continue-btn"
                        variant={Variant.tertiary}
                        type="button"
                        label={t(" Continue shopping")}
                        onClick={(ev) => onContinueShopping(ev)}
                    />
                </StyledFormFooter>
            </form>
        </StyledCartOrderSummary>
    )
}
