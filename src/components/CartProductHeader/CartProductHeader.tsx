import React, {PropsWithChildren} from 'react'
import {StyledContainer, StyledHeader, StyledProductList, StyledTitle} from './CartProductHeader.parts'
import {HEADER_TITLES} from './constants';

export const CartProductHeader: React.FC<PropsWithChildren> = ({
    children
  }) => {  
    return (
        <StyledContainer>
            <StyledHeader>
                {HEADER_TITLES.map((title) => (
                                <StyledTitle
                                    key={title}
                                >
                                    {title}
                                </StyledTitle>
                            ))}</StyledHeader>
            <StyledProductList>
                {children}
            </StyledProductList>
        </StyledContainer>
    );
  };
  