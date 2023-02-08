import React, {PropsWithChildren} from 'react'
import {StyledContainer, StyledHeader, StyledProductList, StyledLeftColumnTitle, StyledCenterColumnTitle, StyledRightColumnTitle} from './CartProductHeader.parts'
import {StyledLeftFlexBlock, StyledRightFlexBlock} from '../CartProduct/CartProduct.parts'

export const CartProductHeader: React.FC<PropsWithChildren> = ({
    children
  }) => {  
    return (
        <StyledContainer>
            <StyledHeader>
                <StyledLeftFlexBlock>
                    <StyledLeftColumnTitle>
                        <p>{"Product"}<span>(s)</span></p>
                    </StyledLeftColumnTitle>
                </StyledLeftFlexBlock>
                
                <StyledRightFlexBlock>
                    <StyledCenterColumnTitle>
                        <p>{"Qty"}</p>
                    </StyledCenterColumnTitle>
                    <StyledRightColumnTitle>
                        <p>{"Price"}</p>
                    </StyledRightColumnTitle>
                </StyledRightFlexBlock>
                            
            </StyledHeader>
            <StyledProductList>
                {children}
            </StyledProductList>
        </StyledContainer>
    );
  };
  