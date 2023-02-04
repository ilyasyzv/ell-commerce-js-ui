import styled from 'styled-components';
import { breakpoints } from '../../commons/constants';

export const StyledContainer = styled.div`
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
    padding: 0 20px;
    margin: 0;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: row;
    width: 100%;
    max-width: 100%;

    @media screen and (max-width: ${breakpoints.mobileMd}px) {
      padding: 15px;
    }
`;

export const StyledTitle = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #505759;
    margin: 0;
    padding: 0;

    &:nth-of-type(1) {
        width: 112px;
        margin-right: 15px;
        align-self: flex-start;
        text-align: left;
    
        @media screen and (max-width: ${breakpoints.mobileMd}px) {
            margin-right: 10px;
        }
    }
  
    &:nth-of-type(2) {
      flex: 1;
      margin-right: 20px;
      text-align: right;
      padding-right: 40px;

      @media screen and (max-width: ${breakpoints.desktopSm}px) {
        padding-right: 20px;
      }

      @media screen and (max-width: ${breakpoints.tabletLg}px) {
         font-size: 0;
      }
      
      @media screen and (max-width: ${breakpoints.tabletMd}px) {
          font-size: 16px;
      }

      @media screen and (max-width: ${breakpoints.tabletSm}px) {
          font-size: 0;
      }
    }
  
    &:nth-of-type(3) {
      min-width: 20%;
      margin: 0;
      padding: 0;
      text-align: right;

      @media screen and (max-width: 385px) {
          font-size: 0;
      }
    }
`;

export const StyledProductList = styled.ul`
    font-size: 18px;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    max-width: 100%;
`;