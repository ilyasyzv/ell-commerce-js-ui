import styled from 'styled-components';
import { breakpoints } from '../../commons/constants';

export const StyledCartProduct = styled.div`
  font-family: "OpenSans", sans-serif;  
  width: 100%;
  max-width: 100%;
  min-width: calc(${breakpoints.mobileSm}px - 40px);
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

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        padding: 15px;
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

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        width: 98px;
        min-width: 98px;
    }
`

export const StyledImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: 108px;
   
    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        height: 94px;
    }
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
    

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        flex-direction: column;
    }
`

export const StyledProductNameContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    align-self: stretch;
    padding: 10px 15px;
    box-sizing: border-box;


    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        flex-direction: column;
        padding: 0 10px;
        padding-left: 15px;
    }

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        flex-direction: row;
    }

    @media screen and (max-width: ${breakpoints.tabletMd - 1}px) {
        padding-right: 0;
    }
   
    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        flex-direction: column;
        padding: 0 10px;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        width: 100%;
        max-width: 100%;
    }
`

export const StyledProductName = styled.div`
    color: #151515;
    font-family: "OpenSans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 110%;
    padding: 2px 0;
    padding-right: 10px;
    margin: 0;
    align-self: flex-start;
    max-width: 60%;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
       margin-bottom: 40px;
       max-width: 65%;

       padding-right: 50px;
    }

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        font-size: 16px;
        width: 100%;
        max-width: 100%;
    }

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        padding-right: 10px;
        margin-bottom: 35px;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        margin-bottom: 40px;
    }
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

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        display: none;
    }
    
`

export const StyledInput = styled.div`
    position: relative;
    margin-right: 10%;
    box-sizing: border-box;

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

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        margin-bottom: 10px;
        margin-right: 10px;
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

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        padding: 0 10px;
    }

    @media screen and (max-width: ${breakpoints.tabletMd - 1}px) {
        max-width: calc(90px + 20px);
        width: calc(90px + 20px);
    }

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        padding-right: 5px;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        width: 100%;
        max-width: 100%;
        padding: 5px 10px;
        flex-direction: row;
        flex-wrap: nowrap;
    }
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

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        font-size: 16px;
    }

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        padding-right: 0;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        font-size: 20px;
        text-align: left;
    }
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

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        padding-right: 0;
    }
 
    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        text-align: left;
    }
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

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        right: -10px;
    }

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        min-width: 100px;
        max-width: 100px;
    }

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        min-width: 90px;
        max-width: 90px;
        right: -5px;
        bottom: 0;
        padding: 0 10px;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        min-height: 48px;
        bottom: -25%;
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
    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        right: -10px;
    }

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        right: -5px;
        padding-right: 10px;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        position: static;
        padding: 0;
        margin: 0;
        .discount-price-container {
            padding: 0;
            margin: 0;
            text-align: left;
        }
    }
`;
