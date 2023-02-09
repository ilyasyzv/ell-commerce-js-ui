import styled from 'styled-components';
import { breakpoints } from '../../commons/constants';

export const StyledCartProduct = styled.li`
  font-family: "OpenSans";  
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-start;
  margin: 0;
  margin-bottom: 20px;
  padding: 27px 20px;

   background: #ffffff;
   border: 1px solid #eaeaea;
   border-radius: 6px;

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        padding: 15px;
    }
`

export const StyledLeftFlexBlock = styled.div`
    width: 112px;
    margin: 0;
    padding: 0;

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        width: 98px;
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
`


export const StyledProductInfo = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    
    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        position: relative;
        padding-bottom: 40px;
    }

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        position: static;
        padding-bottom: 0;
    }

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        position: relative;
        padding-bottom: 35px;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        position: static;
        flex-direction: column;
        padding-bottom: 0;
    }
`

export const StyledProductNameContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    align-self: stretch;
    margin-right: 20px;
    padding: 10px 15px;


    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        flex-direction: column;
        padding: 0 10px;
    }

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        flex-direction: row;
    }

    @media screen and (max-width: ${breakpoints.tabletMd - 1}px) {
        margin-right: 0;
        padding-right: 0;
    }
   
    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        flex-direction: column;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        margin-right: 0;
    }
`

export const StyledProductName = styled.p`
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

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
       margin-bottom: 40px;
    }

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        font-size: 16px;
        width: 100%;
        max-width: 100%;
    }

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        margin-bottom: 35px;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        margin-bottom: 40px;
    }
   
`

export const StyledSelect = styled.select`
    width: 96px;
    min-width: 96px;
    height: 48px;
    text-align: center;
    align-self: flex-start;

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        margin-bottom: 5px;
    }
`

export const StyledProductPriceContainer = styled.div`
    min-width: 20%;
    max-width: calc(80px + 20px);
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    align-self: stretch;

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        padding: 0 15px;
    }

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        padding: 0 10px;
    }

    @media screen and (max-width: ${breakpoints.tabletMd - 1}px) {
        min-width: 10%;
    }

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        min-width: 15%;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        align-items: flex-start;
    }
`

export const StyledProductPrice = styled.p`
    font-weight: 600;
    font-size: 18px;
    padding: 0;
    margin: 0;
    margin-bottom: auto;
    text-align: right;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: auto;
    padding-right: 10px;

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        padding-right: 0;
    }

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        font-size: 16px;
    }

    @media screen and (max-width: ${breakpoints.tabletMd - 1}px) {
        font-size: 14px;
    }
    

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        text-align: left;
    }
`

export const StyledDisabledProductPrice = styled.p`
    font-weight: 600;
    font-size: 18px;
    padding: 0;
    margin: 0;
    margin-bottom: auto;
    text-align: right;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: auto;
    padding-right: 10px;
    color: #e6e6e6;
    text-decoration: line-through;

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        padding-right: 0;
    }

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        font-size: 16px;
    }

    @media screen and (max-width: ${breakpoints.tabletMd - 1}px) {
        font-size: 14px;
    }
 
    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        text-align: left;
    }
`

export const StyledButton = styled.button`
    display: flex;
    align-items: flex-end;
    justify-content: end;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    box-shadow: none;
    width: 100%;
    max-width: 100%;
    min-width: 44px;
    min-height: 44px;
    padding: 0;
    padding-right: 10px;
    margin: 0;
    align-self: center;


    i {
        width: 16px;
        height: 18px;
        margin-right: 6px;
    }

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        position: absolute;
        left: 15px;
        bottom: -10px;
        width: 80px;
        padding-bottom: 20px;
        padding-right: 0;
    }

    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {
        position: static;
        width: 100%;
        max-width: 100%;
        padding-bottom: 0;
    }

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        position: absolute;
        left: 15px;
        bottom: -10px;
        width: 80px;
        padding-bottom: 20px;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        position: static;
        order: -1;
        margin-bottom: 10px;
        align-self: flex-start;
    }
`


