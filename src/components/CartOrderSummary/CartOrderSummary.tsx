import { Cart } from "@pearson-ell/commerce-sdk"
import React, { useState, useRef } from "react"
import { formatPrice } from "../../commons/utils"
import { Trans, useTranslation } from "react-i18next"
import {
    CartOrderSummaryComponentBreakPoints,
    StyledCartOrderAgreementWrapper,
    StyledCartOrderButton,
    StyledCartOrderCalculations,
    StyledCartOrderDiscount,
    StyledCartOrderHeader,
    StyledCartOrderPrice,
    StyledCartOrderPriceWrapper,
    StyledCartOrderSubtotal,
    StyledCartOrderSummary,
    StyledCartOrderTotalWrapper,
} from "./CartOrderSummary.parts"
import { useBreakpoints } from "../../commons/hooks"

export interface ICartOrderSummary {
    className?: string
    cart: Cart
    onCheckoutClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const CartOrderSummary: React.FC<ICartOrderSummary> = ({
    className,
    cart,
    onCheckoutClick,
}: ICartOrderSummary) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const { t } = useTranslation()
    const ref = useRef(null)
    const breakpoint = useBreakpoints<CartOrderSummaryComponentBreakPoints>(
        ref,
        [
            CartOrderSummaryComponentBreakPoints.mobileMd,
            CartOrderSummaryComponentBreakPoints.desktopSm,
        ]
    )

    const toogleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        setIsDisabled(isChecked)
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
            <div className="inner-wrapper">
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
                </StyledCartOrderPriceWrapper>
                {cart?.discountAmount > 0 && (
                    <StyledCartOrderTotalWrapper>
                        <span>{t("total")}</span>
                        <StyledCartOrderPrice>
                            {formatPrice(cart.preTaxCartAmount, cart.currency)}
                        </StyledCartOrderPrice>
                    </StyledCartOrderTotalWrapper>
                )}
                <StyledCartOrderCalculations>
                    {t("final_calculation")}
                </StyledCartOrderCalculations>
                <StyledCartOrderAgreementWrapper className="agreement-wrapper">
                    <label
                        className="visually-hidden"
                        htmlFor="policiesAgreement"
                    >
                        Policies agreement
                    </label>
                    <input type="checkbox" onChange={toogleCheckbox} />
                    <span className="agreement-text">
                        {t("i_agree")}{" "}
                        <a>
                            <Trans
                                i18nKey={"privacy_policy"}
                                components={{ b: <b /> }}
                            />
                        </a>
                    </span>
                </StyledCartOrderAgreementWrapper>
                <StyledCartOrderButton
                    disabled={!isDisabled}
                    onClick={onCheckoutClick}
                    className="button"
                >
                    {t("checkout")}
                </StyledCartOrderButton>
            </div>
        </StyledCartOrderSummary>
    )
}
