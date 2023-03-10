import React from "react"
import { useTranslation } from "react-i18next"
import { StyledCartQty } from "./CartQty.parts"

interface ICartQty {
    itemsCount: number
    className?: string
}

export const CartQty: React.FC<ICartQty> = ({
    itemsCount,
    className,
}: ICartQty) => {
    const { t } = useTranslation()
    return (
        <StyledCartQty className={className}>
            <span className="text-wrapper">{t("your_cart")}</span>
            {itemsCount !== 0 && (
                <span className="items-wrapper">
                    {itemsCount === 1 && `(1 ${t("item")})`}
                    {itemsCount > 1 && `(${itemsCount} ${t("items")})`}
                </span>
            )}
        </StyledCartQty>
    )
}
