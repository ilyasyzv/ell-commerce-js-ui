import styled from 'styled-components';
import { breakpoints } from '../../commons/constants';

export const StyledCartProduct = styled.li`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
  margin-bottom: 20px;
  padding: 20px 27px;

   background: #ffffff;
   border: 1px solid #eaeaea;
   border-radius: 6px;

    @media screen and (max-width: ${breakpoints.mobileMd}px) {
        padding: 15px;
    }
`

export const StyledImage = styled.img`
    width: 112px;
    height: 108px;
    margin-right: 15px;
    align-self: flex-start;

    @media screen and (max-width: ${breakpoints.mobileMd}px) {
        margin-right: 10px;
    }
`

export const StyledProductInfo = styled.div`
    margin: 0;
    padding: 0;
    flex: 1;
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: row;
    justify-content: space-between;
    align-self: stretch;

    @media screen and (max-width: ${breakpoints.tabletLg}px) {
        position: relative;
        padding-bottom: 40px;
    }

    @media screen and (max-width: ${breakpoints.tabletMd}px) {
        position: static;
        padding-bottom: 0;
    }

    @media screen and (max-width: ${breakpoints.tabletSm}px) {
        position: relative;
        padding-bottom: 35px;
    }

    @media screen and (max-width: ${breakpoints.mobileSm}px) {
        position: static;
        flex-direction: column;
        padding-bottom: 0;
    }
`

export const StyledProductNameContainer = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    align-self: stretch;
    margin-right: 20px;

    @media screen and (max-width: ${breakpoints.tabletLg}px) {
        flex-direction: column;
    }

    @media screen and (max-width: ${breakpoints.tabletMd}px) {
        flex-direction: row;
    }

    @media screen and (max-width: ${breakpoints.tabletSm}px) {
        flex-direction: column;
    }

    @media screen and (max-width: ${breakpoints.mobileMd}px) {
        flex-direction: column;
    }

    @media screen and (max-width: ${breakpoints.mobileSm}px) {
        margin-right: 0;
    }
`

export const StyledProductName = styled.p`
    color: #151515;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 110%;
    padding: 2px 0;
    margin: 0;
    align-self: flex-start;
    max-width: 60%;
    text-align: left;

    @media screen and (max-width: ${breakpoints.tabletLg}px) {
       margin-bottom: 40px;
    }
  
    @media screen and (max-width: ${breakpoints.tabletSm}px) {
        width: 100%;
        max-width: 100%;
        font-size: 16px;
    }

    @media screen and (max-width: ${breakpoints.mobileMd}px) {
        font-size: 16px;
        width: 100%;
        max-width: 100%;
    }

`

export const StyledSelect = styled.select`
    min-width: 96px;
    height: 48px;
    text-align: center;
    align-self: flex-start;

    @media screen and (max-width: ${breakpoints.mobileMd}px) {
        margin-bottom: 5px;
    }
`

export const StyledProductPriceContainer = styled.div`
    min-width: 20%;
    max-width: 80px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    align-self: stretch;

    @media screen and (max-width: ${breakpoints.tabletLg}px) {
        min-width: 10%;
    }

    @media screen and (max-width: ${breakpoints.mobileMd}px) {
        max-width: 50px;
      }

    @media screen and (max-width: ${breakpoints.mobileSm}px) {
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
    overflow: auto;

    @media screen and (max-width: ${breakpoints.mobileMd}px) {
        font-size: 16px;
    }

    @media screen and (max-width: ${breakpoints.mobileSm}px) {
        text-align: left;
    }
`

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    box-shadow: none;
    min-width: 80px;
    padding: 5px 0;
    margin: 0;
    align-self: flex-end;

    i {
        width: 16px;
        height: 18px;
        margin-right: 6px;
    }

    @media screen and (max-width: ${breakpoints.tabletLg}px) {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    @media screen and (max-width: ${breakpoints.tabletMd}px) {
        position: static;
    }

    @media screen and (max-width: ${breakpoints.tabletSm}px) {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    @media screen and (max-width: ${breakpoints.mobileSm}px) {
        position: static;
        order: -1;
        margin-bottom: 20px;
        align-self: flex-start;
    }
`


