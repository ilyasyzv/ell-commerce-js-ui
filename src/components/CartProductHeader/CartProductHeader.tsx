import React, {PropsWithChildren} from 'react'
import {StyledContainer, StyledHeader, StyledProductList, StyledLeftColumnTitle, StyledCenterColumnTitle, StyledRightColumnTitle} from './CartProductHeader.parts'
import {StyledLeftFlexBlock, StyledRightFlexBlock} from '../CartProduct/CartProduct.parts'
import {useTranslation} from "react-i18next";

export const CartProductHeader: React.FC<PropsWithChildren> = ({
    children
  }) => {
    const {t} = useTranslation()
    return (
        <StyledContainer>
            <StyledHeader>
                <StyledLeftFlexBlock>
                    <StyledLeftColumnTitle>
                        <span className="mobile">{t("product(s)")}</span>
                        <span className="fullscreen">{t("product")}</span>
                    </StyledLeftColumnTitle>
                </StyledLeftFlexBlock>
                <StyledRightFlexBlock>
                    <StyledCenterColumnTitle>
                        <p>{t("qty")}</p>
                    </StyledCenterColumnTitle>
                    <StyledRightColumnTitle>
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
  