import React, {PropsWithChildren, useRef} from 'react'
import {StyledContainer, StyledHeader, StyledProductList, StyledLeftColumnTitle, StyledCenterColumnTitle, StyledRightColumnTitle} from './CartProductHeader.parts'
import {StyledLeftFlexBlock, StyledRightFlexBlock} from '../CartProduct/CartProduct.parts'
import {useTranslation} from "react-i18next";
import { useBreakpoints } from "../../commons/hooks";
import {EnumStyledCartProductBreakPoints} from "../CartProduct";

export const CartProductHeader: React.FC<PropsWithChildren> = ({
    children
  }) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const {t} = useTranslation()

    const breakpoint = useBreakpoints<EnumStyledCartProductBreakPoints>(containerRef, [
        EnumStyledCartProductBreakPoints.mobileSm,
        EnumStyledCartProductBreakPoints.mobileMd,
        EnumStyledCartProductBreakPoints.tabletSm,
        EnumStyledCartProductBreakPoints.tabletMd,
        EnumStyledCartProductBreakPoints.tabletLg,
        EnumStyledCartProductBreakPoints.desktopSm
      ])

    return (
        <StyledContainer>
            <StyledHeader ref={containerRef} breakpoint={breakpoint} className='header'>
                <StyledLeftFlexBlock className='leftFlexBlock'>
                    <StyledLeftColumnTitle className='leftColumnTitle'>
                        <span>{t("product")}</span>
                    </StyledLeftColumnTitle>
                </StyledLeftFlexBlock>

                <StyledRightFlexBlock className='rightFlexBlock'>
                    <StyledCenterColumnTitle className='centerColumnTitle'>
                        <p>{t("qty")}</p>
                    </StyledCenterColumnTitle>
                    <StyledRightColumnTitle className='rightColumnTitle'>
                        <p>{t("price")}</p>
                    </StyledRightColumnTitle>
                </StyledRightFlexBlock>
                            
            </StyledHeader>
            <StyledProductList>
                {children}
            </StyledProductList>
        </StyledContainer>
    );
  };
  