import { Cart } from "@pearson-ell/commerce-sdk"
import React, { useState } from "react"
import { formatPrice } from "../../commons/utils"
import { Trans, useTranslation } from "react-i18next"
import { StyledCartOrderSummary } from "./CartOrderSummary.parts"

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

    const toogleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        setIsDisabled(isChecked)
    }

    if (!cart) {
        return <div></div>
    }

    return (
        <StyledCartOrderSummary className={className}>
            <h2>{t("order_summary")}</h2>
            <div className="price_wrapper">
                <div>
                    <span>{t("subtotal")}</span>
                    <span className="price">
                        {formatPrice(cart.baseAmount, cart.currency)}
                    </span>
                </div>
                {cart?.discountAmount > 0 && (
                    <div>
                        <span>{t("discount")}</span>
                        <span className="price">
                            -{formatPrice(cart.discountAmount, cart.currency)}
                        </span>
                    </div>
                )}
            </div>
            {cart?.discountAmount > 0 && (
                <div className="total_wrapper">
                    <span>{t("total")}</span>
                    <span>
                        {formatPrice(cart.preTaxCartAmount, cart.currency)}
                    </span>
                </div>
            )}

            <p className="calculations">{t("final_calculation")}</p>
            <div className="agreement-wrapper">
                <label className="visually-hidden" htmlFor="policiesAgreement">
                    Policies agreement
                </label>
                <input
                    id="policiesAgreement"
                    type="checkbox"
                    onChange={toogleCheckbox}
                />
                <span>
                    {t("i_agree")}{" "}
                    <a>
                        <Trans
                            i18nKey={"privacy_policy"}
                            components={{ b: <b /> }}
                        />
                    </a>
                </span>
            </div>
            <button disabled={!isDisabled} onClick={onCheckoutClick}>
                {t("checkout")}
            </button>
        </StyledCartOrderSummary>
    )
}
