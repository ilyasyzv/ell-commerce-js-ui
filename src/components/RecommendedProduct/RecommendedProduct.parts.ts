import styled from 'styled-components';
import { breakpoints } from '../../commons/constants';
import { EnumStyledCartProductBreakPoints } from './RecommendedProduct';
import {WithUiTag} from "../../commons/components";

interface StyledCartProductProps {
    readonly breakpoint: EnumStyledCartProductBreakPoints | undefined
}
export const StyledCartProduct = WithUiTag("RecommendedProduct")(styled.div<StyledCartProductProps>`
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

  ${props => {
        if (
            props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
        ) {
            return `
            padding: 15px;`
        }
   }}
   
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
                        padding: 5px 10px;
                        flex-direction: row;
                        flex-wrap: nowrap;
                    `
            }
        }}
   }

  .leftFlexBlock {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
            ) {
                return `
                    width: 98px;
                    min-width: 98px;`
            }
        }}
    }

    .productInfo {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
            ) {
                return `
                  flex-direction: column;`
            }
           }}
    }

    .productNameContainer {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.tabletMd
            ) {
                return `
                    flex-direction: column;
                    padding: 0 10px;
                    padding-left: 15px;`
            }
       }}
    }

    .productName {
           ${props => {
                if (
                    props.breakpoint! <= EnumStyledCartProductBreakPoints.tabletLg
                ) {
                    return `
                    margin-bottom: 40px;
                    max-width: 65%;
                    padding-right: 50px;
                    `
                }
           }}
           ${props => {
                if (
                    props.breakpoint! <= EnumStyledCartProductBreakPoints.tabletMd
                ) {
                    return `
                    font-size: 16px;
                    width: 100%;
                    max-width: 100%;
                    `
                }
           }}
           ${props => {
                if (
                    props.breakpoint! <= EnumStyledCartProductBreakPoints.tabletSm
                ) {
                    return `
                    padding-right: 10px;
                    margin-bottom: 35px;
                    `
                }
           }}
           ${props => {
                if (
                    props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
                ) {
                    return `
                    margin-bottom: 40px;
                    `
                }
           }}
    }

    .input {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
            ) {
                return `
                margin-bottom: 20px;
                margin-right: 10px;
                `
            }
           }}
        
    }

    .productPrice {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.tabletMd
            ) {
                return `
                  display: none;
                `
            }
           }}
    }

    .productPriceMobile {
        display: none;

        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.tabletMd
            ) {
                return `
                    display: block;
                    margin: 0;
                    text-align: left;
                    width: auto;
                    max-width: 100%;
                    overflow: visible;
                ` 
            }
           }}
           ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
            ) {
                return `
                   font-size: 18px;
                ` 
            }
           }}
    }

    .showMore {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.tabletLg
            ) {
                return `
                 width: calc(100% - 50px);
                 max-width: calc(100% - 50px);
                `
            }
       }}
    }

    .showMore,
    .description {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.tabletMd
            ) {
                return `
                display: none;
                `
            }
       }}
    }
    
    .button {
        ${props => {
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.tabletLg
            ) {
                return `
                padding: 0 5px;
                width: 100%;
                `
            }
            if (
                props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
            ) {
                return `
                min-height: 48px;
                `
            }
       }}
    }
`)
export const StyledLeftFlexBlock = WithUiTag("RecommendedProductLeftBlock")(styled.div`
    width: 112px;
    min-width: 112px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`)
export const StyledImage = WithUiTag("RecommendedProductImage")(styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
`)
export const StyledRightFlexBlock = WithUiTag("RecommendedProductRightBlock")(styled.div`
    margin: 0;
    padding: 0;
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-self: stretch;
    box-sizing: border-box;
`)
export const StyledProductInfo = WithUiTag("RecommendedProductInfo")(styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;

`)
export const StyledProductNameContainer = WithUiTag("RecommendedProductNameContainer")(styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    align-self: stretch;
    padding: 0 15px;
    box-sizing: border-box;

`)
export const StyledProductName = WithUiTag("RecommendedProductName")(styled.div`
    color: #151515;
    font-family: "OpenSans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 110%;
    padding: 12px 0;
    margin: 0;
    align-self: flex-start;
    max-width: 60%;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
`)
export const StyledProductTitle = WithUiTag("RecommendedProductLeftBlock")(styled.p`
    width: 100%;
    max-width: 100%;
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    box-sizing: border-box;
`)
export const StyledProductDescription = WithUiTag("RecommendedProductDescription")(styled.div`
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    padding-bottom: 20px;
    box-sizing: border-box;
`)
export const StyledShowMoreBtn = WithUiTag("RecommendedProductShowMoreButton")(styled.button`
    width: 100%;
    max-width: 100%;
    align-self: flex-end;
    margin: 0;
    padding: 10px 0;
    margin-top: auto;
    box-sizing: border-box;
    border: none;
    box-shadow: none;
    background: transparent;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    font-size: 14px;
    line-height: 150%;
    font-family: 'OpenSans', sans-serif;
    font-style: normal;
    font-weight: 600;
    color: #007A9C;
    overflow: hidden;

    position: absolute;
    bottom: -10px;
    left: 0;

    &:hover {
        color: #376A86;
        .showMoreLabel{
            text-decoration: underline;
        }
        svg path {
            fill: #376A86;
        }
    }
    &:focus-visible {
        outline: none;
        .showMoreLabel{
            outline: 4px solid #77C2F9;
            outline-offset: 5px;
        }
    }
    &:active {
        color: #235C60;
    }
    

    &:before,
    &:after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        height: 1px;
        width: 100%;
        background: #DFE1E1;
        position: relative;
    }

    &:before {
        margin-left: -100%;
        left: -14px;
    }

    &:after {
        margin-right: -100%;
        right: -14px;
    }

    span {
        display: inline-block;
        vertical-align: middle;
    }

    i {
        display: inline-block;
        vertical-align: middle;
        padding: 5px;
        margin-top: -5px;

        svg path {
            fill: #007A9C;
        }
    }
`)
export const StyledInput = WithUiTag("RecommendedProductInput")(styled.div`
    position: relative;
    margin-right: 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
`)
export const StyledProductPriceContainer = WithUiTag("RecommendedProductPriceContainer")(styled.div`
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

`)
export const StyledProductPrice = WithUiTag("RecommendedProductPrice")(styled.p`
    font-weight: 600;
    font-size: 16px;
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
`)
export const StyledButton = WithUiTag("RecommendedProductButton")(styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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
    border: 2px solid  #007A9C;
    border-radius: 20px;
    box-sizing: border-box;

    &:disabled {
        opacity: 0.6;
    }
    
    color: #007A9C;

    &:hover {
        color: #FFFFFF;
        background: #007A9C;
    }

    &:focus-visible {
        outline: 4px solid #77C2F9;
    }
   
    &:active {
        color: #007A9C;
    }

`)
