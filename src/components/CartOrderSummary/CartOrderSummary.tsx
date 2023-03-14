import { Cart } from "@pearson-ell/commerce-sdk"
import React, { useState, useRef } from "react"
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
    StyledCouponInputWrapper,
} from "./CartOrderSummary.parts"
import { useBreakpoints } from "../../commons/hooks"
import { Button, Variant } from "../Button"
import { Link } from "../Link"

type PolicieLink = {
    name: string
    url: string
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
}

export const CartOrderSummary: React.FC<ICartOrderSummary> = ({
    className,
    cart,
    onCheckoutClick,
    onContinueShoppingClick,
    policiesLinks,
}: ICartOrderSummary) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const policiesLength = policiesLinks.length
    const { t } = useTranslation()
    const ref = useRef(null)
    const breakpoint = useBreakpoints<CartOrderSummaryComponentBreakPoints>(
        ref,
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

    if (!cart) {
        return <div></div>
    }

    return (
        <StyledCartOrderSummary
            className={className}
            ref={ref}
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
                    <StyledCouponInputWrapper>
                        <label className="coupon-input-label">
                            <span className="coupon-input-label-text">
                                {t("Enter discount code")}
                            </span>
                            <input className="coupon-input" type="text" />
                        </label>

                        <Button
                            className="coupon-btn"
                            variant={Variant.tertiary}
                            type="button"
                            label={t("Apply")}
                            disabled={true}
                            onClick={(ev) => console.log(ev)}
                        />
                    </StyledCouponInputWrapper>
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
                                        <Link
                                            key={link.name}
                                            href={link.url}
                                            rel="noopener noreferrer"
                                        >
                                            {link.name}
                                            {index === policiesLength - 2
                                                ? ""
                                                : ", "}
                                        </Link>
                                    )
                                })}
                            {t(" and ")}{" "}
                            <Link
                                key={policiesLinks[policiesLength - 1].name}
                                href={policiesLinks[policiesLength - 1].url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {policiesLinks[policiesLength - 1].name}
                                {"."}
                            </Link>
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
                        disabled={false}
                        onClick={(ev) => onContinueShopping(ev)}
                    />
                </StyledFormFooter>
            </form>
        </StyledCartOrderSummary>
    )
}
