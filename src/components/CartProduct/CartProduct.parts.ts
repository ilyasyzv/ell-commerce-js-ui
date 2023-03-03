import styled from 'styled-components';
import { breakpoints } from '../../commons/constants';
import { EnumStyledCartProductBreakPoints } from './CartProduct';

interface StyledCartProductProps {
    readonly breakpoint: EnumStyledCartProductBreakPoints | undefined
}

export const StyledCartProduct = styled.div<StyledCartProductProps>`
    font-family: "OpenSans", sans-serif;  
    width: 100%;
    max-width: 100%;
    min-width: calc(${breakpoints.mobileSm}px - 40px);
    min-height: 230px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    margin: 0;
    margin-bottom: 20px;
    padding: 27px 20px;
    box-sizing: border-box;

    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 6px;

    .leftFlexBlock {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
            ) {
                return `
                    width: 98px;
                    min-width: 98px;
                `
            }
        }}
    }

    .image {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
            ) { return `max-height: 150px;`}
        }}
    }

    .productInfo {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileSm
            ) { return `flex-direction: column;` }
        }}
    }

    .productNameContainer {
        ${props => {
            switch (props.breakpoint) {
                case EnumStyledCartProductBreakPoints.tabletMd:
                    return `
                        padding: 0 10px;
                        padding-left: 15px;
                        flex-direction: row;
                    `
                case EnumStyledCartProductBreakPoints.tabletSm:
                    return `
                        padding: 0 10px;
                        padding-left: 15px;
                        flex-direction: row;
                        padding-right: 0;
                    `
                case EnumStyledCartProductBreakPoints.mobileMd:
                    return `
                        padding: 0 10px;
                        padding-left: 15px;
                        padding-right: 0;
                        flex-direction: column;
                    `
                case EnumStyledCartProductBreakPoints.mobileSm:
                    return `
                        padding: 0 10px;
                        padding-left: 15px;
                        padding-right: 0;
                        flex-direction: column;
                        width: 100%;
                        max-width: 100%;
                    `
            }
        }}
    }

    .productName {
        ${props => {
            switch (props.breakpoint) {
                case EnumStyledCartProductBreakPoints.tabletLg:
                    return `
                        margin-bottom: 40px;
                        max-width: 65%;
                        padding-right: 50px;
                    `
                case EnumStyledCartProductBreakPoints.tabletMd:
                    return `
                        margin-bottom: 40px;
                        padding-right: 50px;
                        font-size: 16px;
                        width: 100%;
                        max-width: 100%;
                    `
                case EnumStyledCartProductBreakPoints.tabletSm:
                    return `
                        margin-bottom: 40px;
                        padding-right: 50px;
                        font-size: 16px;
                        width: 100%;
                        max-width: 100%;
                    `
                case EnumStyledCartProductBreakPoints.mobileMd:
                    return `
                        font-size: 16px;
                        width: 100%;
                        max-width: 100%;
                        padding-right: 10px;
                        margin-bottom: 35px;
                    `
                case EnumStyledCartProductBreakPoints.mobileSm:
                    return `
                        font-size: 16px;
                        width: 100%;
                        max-width: 100%;
                        padding-right: 10px;
                        margin-bottom: 40px;
                    `
            }
        }}
    }

    .productDescription {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
            ) { return `display: none;` }
        }}
    }

    .input {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
            ) {
                return `
                    margin-bottom: 10px;
                    margin-right: 10px;
                `
            }
        }}
    }

    .productPriceContainer {
        padding: 0 10px;
        ${props => {
            switch (props.breakpoint) {
                case EnumStyledCartProductBreakPoints.tabletSm:
                    return `
                        max-width: calc(90px + 20px);
                        width: calc(90px + 20px);
                    `
                case EnumStyledCartProductBreakPoints.mobileMd:
                    return `
                        max-width: calc(90px + 20px);
                        width: calc(90px + 20px);
                        padding-right: 5px;
                    `
                case EnumStyledCartProductBreakPoints.mobileSm:
                    return `
                        width: 100%;
                        max-width: 100%;
                        padding: 5px 10px;
                        flex-direction: row;
                        flex-wrap: nowrap;
                    `
            }
        }}
    }

    .productPrice {
     padding-right: 0;
        ${props => {
            switch (props.breakpoint) {
                case EnumStyledCartProductBreakPoints.tabletMd:
                    return `font-size: 16px;`
                case EnumStyledCartProductBreakPoints.tabletSm:
                    return `font-size: 16px;`
                case EnumStyledCartProductBreakPoints.mobileMd:
                    return `font-size: 16px;`
                case EnumStyledCartProductBreakPoints.mobileSm:
                    return `
                        font-size: 20px;
                        text-align: left;
                    `
            }
        }}
    }

    .disabledProductPrice {
        padding-right: 0;
        ${props => {
            if (
                props.breakpoint! === EnumStyledCartProductBreakPoints.mobileSm
            ) { return `text-align: left;` }
        }}
    }

    .button {
        right: -10px;
        ${props => {
            switch (props.breakpoint) {
                case EnumStyledCartProductBreakPoints.tabletMd:
                    return `
                        min-width: 100px;
                        max-width: 100px;
                    `
                case EnumStyledCartProductBreakPoints.tabletSm:
                    return `
                        min-width: 100px;
                        max-width: 100px;
                    `
                case EnumStyledCartProductBreakPoints.mobileMd:
                    return `
                        min-width: 90px;
                        max-width: 90px;
                        right: -5px;
                        bottom: 0;
                        padding: 0 10px;
                    `
                case EnumStyledCartProductBreakPoints.mobileSm:
                    return `
                        min-width: 90px;
                        max-width: 90px;
                        right: -5px;
                        padding: 0 10px;
                        min-height: 48px;
                        bottom: -25%;
                    `
            }
        }}
    }

    .discountWrapper {
        right: -10px;
        ${props => {
            switch (props.breakpoint) {
                case EnumStyledCartProductBreakPoints.mobileMd:
                    return `
                        right: -5px;
                        padding-right: 10px;
                    `
                case EnumStyledCartProductBreakPoints.mobileSm:
                    return `
                        right: -5px;
                        padding-right: 10px;
                        position: static;
                        padding: 0;
                        margin: 0;
                        .discount-price-container {
                            padding: 0;
                            margin: 0;
                            text-align: left;
                        }
                    `
            }
        }}
    }

`

export const StyledLeftFlexBlock = styled.div`
    width: 112px;
    min-width: 112px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`

export const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
`

export const StyledRightFlexBlock = styled.div`
    margin: 0;
    padding: 0;
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-self: stretch;
    box-sizing: border-box;
`


export const StyledProductInfo = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
`

export const StyledProductNameContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    align-self: stretch;
    padding: 0 15px;
    box-sizing: border-box;
`

export const StyledProductName = styled.div`
    color: #151515;
    font-family: "OpenSans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 110%;
    padding: 12px 0;
    padding-right: 10px;
    margin: 0;
    align-self: flex-start;
    max-width: 60%;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export const StyledProductTitle = styled.p`
    width: 100%;
    max-width: 100%;
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    box-sizing: border-box;
`

export const StyledProductDescription = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const StyledProductHTMLDescription = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const StyledInput = styled.div`
    position: relative;
    margin-right: 10%;
    box-sizing: border-box;
    padding-bottom: 20px;
    position: relative;

    .cart-product-input {
        outline: none;
        box-sizing: border-box;
        width: 96px;
        height: 48px;
        color: #333333;
        background: #FFFFFF;
        border: 1px solid #919191;
        border-radius: 4px;
        padding: 12px 13px;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        align-self: flex-start;
        margin-bottom: 5px;

        &:hover {
            border: 1px solid #151515;
        }

        &:focus {
            border: 2px solid #151515;
        }
    
        &:disabled {
            background: #F5F5F5;
            border: 1px solid #919191;
            color: #919191;
        }
    
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {  
            height: 24px;
            opacity: 1;
        }

        &.error {
            border: 2px solid #D30018;
        }
    }

    .message {
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #151515;
        
        p {
            margin: 0;
        }
    }
`

export const StyledProductPriceContainer = styled.div`
    max-width: calc(120px + 20px);
    width: calc(120px + 20px);
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    align-self: stretch;
    box-sizing: border-box;
    position: relative;
`

export const StyledProductPrice = styled.p`
    font-weight: 600;
    font-size: 18px;
    padding: 0;
    padding-right: 20px;
    margin: 0;
    margin-bottom: auto;
    text-align: right;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: auto;
    box-sizing: border-box;
`

export const StyledDisabledProductPrice = styled.p`
    font-weight: 400;
    font-size: 14px;
    padding: 0;
    margin: 0;
    margin-bottom: auto;
    text-align: right;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: auto;
    padding-right: 10px;
    text-decoration: line-through;
    box-sizing: border-box;
`

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: end;
    text-align: right;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    box-shadow: none;
    width: auto;
    max-width: 100%;
    min-width: 44px;
    min-height: 44px;
    padding: 0 20px;
    margin: 0;
    box-sizing: border-box;

    position: absolute;
    right: 10px;
    bottom: -15px;

    &:disabled {
        opacity: 0.6;
    }
    
    color: #007FA3;
    svg path {
        fill: #007FA3;
    }
    &:hover {
        color: #376A86;
        text-decoration: underline;
        svg path {
            fill: #376A86;
        }
    }
    &:focus-visible {
        outline: 4px solid #77C2F9;
    }
    &:active {
        color: #235C60;
    }

    i {
        width: 16px;
        height: 18px;
        margin-right: 6px;
    }
`

export const StyledDiscountWrapper = styled.div`
    padding: 0;
    margin: 0;
    position: absolute;
    right: 10px;
    padding-right: 20px;
    .discount-price-container {
        padding: 0;
        margin: 0;
    }
`;
