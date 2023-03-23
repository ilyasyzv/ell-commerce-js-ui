import { Cart, CartCoupon, CouponCode } from "@pearson-ell/commerce-sdk"
import React, { useState, useRef } from "react"
import { formatPrice } from "../../commons/utils"
import { useTranslation } from "react-i18next"
import {
    CartOrderSummaryComponentBreakPoints,
    StyledFooter,
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
    StyledCouponErrorMessage,
} from "./CartOrderSummary.parts"
import { useBreakpoints } from "../../commons/hooks"
import { Button, Variant } from "../Button"
import { Input } from "../Input"
import { getFormattedPoliciesString } from "./CartOrderSummary.utils"
import {
    // ERROR_MESSAGE,
    COUPON_INPUT_LIMIT,
    COUPON_INPUT_MAX_LEN,
} from "./constants"
import { Message, MessageProps } from "../Message"
import { AxiosError } from "axios"

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
    isDisplayedContinueShoppingBtn?: boolean
    isDisplayedCouponInput?: boolean
    applyCouponCode: (cartId: string, coupon: CouponCode) => Promise<Cart>
    withdrawCouponCode: (cartId: string, coupon: string) => Promise<Cart>
}

export const CartOrderSummary: React.FC<ICartOrderSummary> = ({
    className,
    cart,
    onCheckoutClick,
    onContinueShoppingClick,
    policiesLinks,
    policiesLinksCallback,
    isDisplayedContinueShoppingBtn = true,
    isDisplayedCouponInput = true,
    applyCouponCode,
    withdrawCouponCode,
}: ICartOrderSummary) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [isCouponInputInvalid, setIsCouponInputInvalid] =
        useState<boolean>(false)
    const [couponErrorMessage, setCouponErrorMessage] =
        useState<MessageProps | null>(null)
    const [couponInputValue, setCouponInputValue] = useState<string>("")
    const [couponsApplied, setCouponsApplied] = useState<CartCoupon[]>(
        cart?.coupons || []
    )
    const [isCouponInputShown, setIsCouponInputShown] = useState<boolean>(
        couponsApplied.length === 0 || isDisplayedCouponInput
    )
    const { t } = useTranslation()
    const containerRef = useRef(null)
    const conuponInputRef = useRef<HTMLInputElement | null>(null)
    const breakpoint = useBreakpoints<CartOrderSummaryComponentBreakPoints>(
        containerRef,
        [
            CartOrderSummaryComponentBreakPoints.mobileSm,
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
        if (isCouponInputInvalid) {
            setCouponErrorMessage(null)
            setIsCouponInputInvalid((prevState) => !prevState)
        }
        const reg = /^[\w -]*$/i
        if (ev.target.value.match(reg) === null) {
            return
        }
        setCouponInputValue(ev.target.value)
    }

    const onCouponApply = (
        ev:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>
    ) => {
        ev.preventDefault()
        if (couponsApplied.some((cp) => cp.code === couponInputValue)) {
            setIsCouponInputInvalid(true)
            setCouponErrorMessage({
                id: "duplicateCouponErrorMessage",
                text: `Discount code ${couponInputValue} has already been applied`,
                type: "Error",
            })
            return
        }
        applyCouponCode(cart.id, { code: couponInputValue })
        .then((cart) => {
            setCouponsApplied(cart.coupons)
            setIsCouponInputShown(false)
        })
        .catch((e: AxiosError) => {
            console.log(e)
            setIsCouponInputInvalid(true)
            setCouponErrorMessage({
                id: "errorMessage", 
                text: "You entered an invalid discount code. Please check the code and try again.", 
                type: "Error"
            })
        })
    }

    const onCouponRemove = (coupon: CartCoupon) => {
        withdrawCouponCode(cart.id, coupon.code)
        .then(() => {
            setCouponsApplied((prevState) =>
                prevState.filter(
                    (item) => item.id !== coupon.id
                )
            )
        })
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
            <div className="order-summary-block">
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
                        <StyledCartOrderCouponDiscount key={cp.id}>
                            <p className="coupon-discount-label">
                                {t("coupon_discount")}
                                <span className="coupon-code">{cp.code}</span>
                            </p>

                            <Button
                                className="coupon-remove-btn"
                                variant={Variant.linkLike}
                                type="button"
                                label={t("remove")}
                                onClick={() => onCouponRemove(cp)}
                            />
                            <StyledCartOrderPrice>
                                -
                                {formatPrice(
                                    cp.discountedAmount,
                                    cart.currency
                                )}
                            </StyledCartOrderPrice>
                        </StyledCartOrderCouponDiscount>
                    ))}

                    <StyledCouponBlock className="coupon-block">
                        <Button
                            className="enter-coupon-button"
                            variant={Variant.linkLike}
                            type="button"
                            label={t("enter_discount_code")}
                            aria-expanded={isCouponInputShown}
                            aria-controls="couponInputBlock"
                            onClick={() =>
                                setIsCouponInputShown((prevState) => !prevState)
                            }
                        />

                        <StyledCouponInputWrapper
                            className={
                                isCouponInputShown
                                    ? "coupon-input-wrapper"
                                    : "coupon-input-wrapper hidden"
                            }
                            id="couponInputBlock"
                        >
                            <Input
                                id="couponInput"
                                inputRef={conuponInputRef}
                                className="coupon-input"
                                type="text"
                                maxLength={COUPON_INPUT_MAX_LEN}
                                value={couponInputValue}
                                name={t("enter_discount_code") as string}
                                onChange={(ev) => onCouponInputChage(ev)}
                                isInvalid={isCouponInputInvalid}
                            />
                            <Button
                                className="coupon-btn"
                                variant={Variant.tertiary}
                                type="button"
                                label={t("Apply")}
                                disabled={
                                    couponInputValue.length <
                                        COUPON_INPUT_LIMIT ||
                                    isCouponInputInvalid
                                }
                                onClick={(ev) => onCouponApply(ev)}
                            />
                        </StyledCouponInputWrapper>
                    </StyledCouponBlock>
                    <StyledCouponErrorMessage>
                        {isCouponInputInvalid && couponErrorMessage && (
                            <Message
                                id="couponInput-errorMessage"
                                type={"Error"}
                                text={couponErrorMessage?.text}
                            />
                        )}
                    </StyledCouponErrorMessage>
                </StyledCartOrderPriceWrapper>
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
                <StyledFooter>
                    <StyledCartOrderAgreementWrapper className="agreement-wrapper">
                        <input
                            type="checkbox"
                            onChange={toogleCheckbox}
                            aria-labelledby="agreementText"
                        />
                        <span className="agreement-text" id="agreementText">
                            {t("i_agree")}{" "}
                            {getFormattedPoliciesString(
                                policiesLinks,
                                onPolicieLinkClick
                            )}
                            {/* Reminder about translation: <a>
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
                        type="button"
                        label={t("checkout")}
                        disabled={isDisabled}
                        onClick={(ev) => onSubmit(ev)}
                    />
                    {isDisplayedContinueShoppingBtn && (
                        <Button
                            className="continue-btn"
                            variant={Variant.tertiary}
                            type="button"
                            label={t(" Continue shopping")}
                            onClick={(ev) => onContinueShopping(ev)}
                        />
                    )}
                </StyledFooter>
            </div>
        </StyledCartOrderSummary>
    )
}
