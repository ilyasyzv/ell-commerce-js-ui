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
    padding: 20px;
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
      box-sizing: border-box;
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
      .mobile {
        display: none;
      }

      @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        .mobile {
          display: inline-block;
        }
        .fullscreen {
          display: none;
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
      padding-left: 2px;

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
    max-width: calc(120px + 20px);
    width: calc(120px + 20px);
    margin: 0;
    padding: 0 10px;
    text-align: right;

    p {
      padding-right: 20px;
      width: 100%;
      max-width: 100%;

      @media screen and (max-width: ${breakpoints.desktopSm - 1}px) {
        padding-right: 0;
      }
    }

   
    @media screen and (max-width: ${breakpoints.tabletMd - 1}px) {
        max-width: calc(90px + 20px);
        width: calc(90px + 20px);
    }

    @media screen and (max-width: ${breakpoints.tabletSm - 1}px) {
        padding-right: 5px;
    }
   
    @media screen and (max-width: ${breakpoints.mobileMd - 1}px) {
        display: none;
    }
`



export const StyledProductList = styled.div`
    font-size: 18px;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
`;