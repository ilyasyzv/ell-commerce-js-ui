import styled from 'styled-components';
import { breakpoints } from '../../commons/constants';

export const StyledContainer = styled.div`
    font-family: "OpenSans", sans-serif;    
    width: 100%;
    max-width: 100%;
    min-width: calc(${breakpoints.mobileSm}px - 40px);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: transparent;
`;

export const StyledHeader = styled.div`
    padding:20px;
    padding-top: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
      padding: 15px;
    }
`;

export const StyledTitle = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #505759;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    p {
      width: 100%;
      max-width: 100%;
      margin: 0;
      padding: 0;
    }
`;


export const StyledLeftColumnTitle = styled(StyledTitle)`
      width: 100%;
      max-width: 100%;
      text-align: left;

      p {
        width: 100%;
        max-width: 100%;
        margin: 0;
        padding: 0;
        white-space: nowrap;
      }
      span {
        display: none;
      }

      @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        span {
          display: inline-block;
        }
      }
`

export const StyledCenterColumnTitle = styled(StyledTitle)`
    flex: 1;
    fisplay: flex;
    justify-content: flex-end;
    padding-right: 15px;
    text-align: right;

    p {
      width: 96px;
      min-width: 96px;
      margin-left: auto;
      text-align: left;

      margin-right: 10%;
    }

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
      font-size: 0;
      padding-right: 10px;
    }
   
    @media screen and (max-width: ${breakpoints.tabletLg - 1}px) {         
       font-size: 16px;
    }

 
    @media screen and (max-width: ${breakpoints.tabletMd - 1}px) {
      padding-right: 0;
      margin-right: 0;
    }

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
      font-size: 0;
    }

    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
      display: none;
    }

`

export const StyledRightColumnTitle = styled(StyledTitle)`
    min-width: 20%;
    max-width: calc(80px + 20px);
    margin: 0;
    padding: 0 10px;
    padding-right: 20px;
    text-align: right;

    p {
      padding-right: 10px;
      width: 100%;
      max-width: 100%;

      @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        padding-right: 0;
      }
    }

    @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        padding: 0 10px;
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
        display: none;
    }
`



export const StyledProductList = styled.ul`
    font-size: 18px;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    max-width: 100%;
`;