import React, { PropsWithChildren, useRef } from "react"
import {
    StyledContainer,
    StyledInnerHeaderContainer,
    StyledHeader,
    StyledProductList,
    StyledLeftColumnTitle,
    StyledCenterColumnTitle,
    StyledRightColumnTitle,
} from "./CartProductHeader.parts"
import {
    StyledLeftFlexBlock,
    StyledRightFlexBlock,
} from "../CartProduct/CartProduct.parts"
import { useTranslation } from "react-i18next"
import { useBreakpoints } from "../../commons/hooks"
import { EnumStyledHeaderBreakPoints } from "./CartProductHeader.parts"

export const CartProductHeader: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const { t } = useTranslation()

    const breakpoint = useBreakpoints<EnumStyledHeaderBreakPoints>(
        containerRef,
        [
            EnumStyledHeaderBreakPoints.mobileSm,
            EnumStyledHeaderBreakPoints.mobileMd,
            EnumStyledHeaderBreakPoints.tabletSm,
            EnumStyledHeaderBreakPoints.tabletMd,
            EnumStyledHeaderBreakPoints.tabletLg,
            EnumStyledHeaderBreakPoints.desktopSm,
        ]
    )

    return (
        <StyledContainer>
            <StyledHeader
                ref={containerRef}
                breakpoint={breakpoint}
                className="header"
            >
                <StyledInnerHeaderContainer className="innerContainer">
                    <StyledLeftFlexBlock className="leftFlexBlock">
                        <StyledLeftColumnTitle className="leftColumnTitle">
                            <span>{t("product")}</span>
                        </StyledLeftColumnTitle>
                    </StyledLeftFlexBlock>

                    <StyledRightFlexBlock className="rightFlexBlock">
                        <StyledCenterColumnTitle className="centerColumnTitle">
                            <p>{t("qty")}</p>
                        </StyledCenterColumnTitle>
                        <StyledRightColumnTitle className="rightColumnTitle">
                            <p>{t("price")}</p>
                        </StyledRightColumnTitle>
                    </StyledRightFlexBlock>
                </StyledInnerHeaderContainer>
            </StyledHeader>
            <StyledProductList>{children}</StyledProductList>
        </StyledContainer>
    )
}
