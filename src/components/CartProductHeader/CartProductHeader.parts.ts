import styled from 'styled-components';
import { breakpoints } from '../../commons/constants';
import {EnumStyledCartProductBreakPoints} from "../CartProduct";

interface StyledCartProductProps {
  readonly breakpoint: EnumStyledCartProductBreakPoints | undefined
}

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

export const StyledHeader = styled.div<StyledCartProductProps>`
    padding: 20px;
    padding-top: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    ${props => {
      if (
          props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
      ) {
          return `
          padding: 15px;
          `
      }
    }}

    .centerColumnTitle {
      ${props => {
        switch (props.breakpoint) {
            case EnumStyledCartProductBreakPoints.tabletMd:
                return `
                    padding: 0 10px;
                    padding-left: 15px;
                `
            case EnumStyledCartProductBreakPoints.tabletSm:
                return `
                    padding: 0 10px;
                    padding-left: 15px;
                    padding-right: 0;
                `
            
        }
    }}
      
     
      ${props => {
        if (
            props.breakpoint! <= EnumStyledCartProductBreakPoints.mobileMd
        ) { return `font-size: 0;` }
      }}
    }

    .rightColumnTitle {
      p {
        ${props => {
          if (
              props.breakpoint! <= EnumStyledCartProductBreakPoints.desktopSm
          ) {
              return `
              padding-right: 0;
              `
          }
        }}
      }

      ${props => {
        switch (props.breakpoint) {
             case EnumStyledCartProductBreakPoints.tabletSm:
                return `
                    max-width: calc(90px + 20px);
                    width: calc(90px + 20px);
                `
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
                    display: none;
                `
        }
      }}
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
`

export const StyledCenterColumnTitle = styled(StyledTitle)`
    flex: 1;
    display: flex;
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
    }
`



export const StyledProductList = styled.div`
    font-size: 18px;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
`;