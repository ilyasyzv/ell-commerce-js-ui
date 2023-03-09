import styled from "styled-components"
import { breakpoints } from "../../commons/constants"
import WithUiTag from "../../commons/components"

export enum EnumStyledHeaderBreakPoints {
    mobileSm = 301,
    mobileMd = 354,
    tabletSm = 670,
    tabletMd = 760,
    tabletLg = 950,
    desktopSm = 1126,
}

interface StyledCartProductProps {
    readonly breakpoint: EnumStyledHeaderBreakPoints | undefined
}

export const StyledContainer = WithUiTag(
    "CartProductHeaderContainer"
)(styled.div`
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
    align-items: center;
    background-color: transparent;
`)
export const StyledHeader = WithUiTag(
    "CartProductHeader"
)(styled.div<StyledCartProductProps>`
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    .innerContainer {
        ${(props) => {
            if (
                props.breakpoint &&
                props.breakpoint <= EnumStyledHeaderBreakPoints.mobileMd
            ) {
                return `
                    padding: 15px;
                `
            }
        }}
    }

    .centerColumnTitle {
        ${(props) => {
            switch (props.breakpoint) {
                case EnumStyledHeaderBreakPoints.tabletMd: {
                    return `
                    padding: 0 10px;
                    padding-left: 15px;
                `
                }
                case EnumStyledHeaderBreakPoints.tabletSm: {
                    return `
                    padding: 0 10px;
                    padding-left: 15px;
                    padding-right: 0;
                `
                }
            }
        }}

        ${(props) => {
            if (
                props.breakpoint &&
                props.breakpoint <= EnumStyledHeaderBreakPoints.mobileMd
            ) {
                return `font-size: 0;
                `
            }
        }}
    }

    .rightColumnTitle {
        p {
            ${(props) => {
                if (
                    props.breakpoint &&
                    props.breakpoint <= EnumStyledHeaderBreakPoints.desktopSm
                ) {
                    return `
              padding-right: 0;
              `
                }
            }}
        }

        ${(props) => {
            switch (props.breakpoint) {
                case EnumStyledHeaderBreakPoints.tabletSm: {
                    return `
                    max-width: calc(90px + 20px);
                    width: calc(90px + 20px);
                `
                }
                case EnumStyledHeaderBreakPoints.mobileMd: {
                    return `
                    max-width: calc(90px + 10px);
                    width: calc(90px + 10px);
                    padding-right: 5px;
                `
                }
                case EnumStyledHeaderBreakPoints.mobileSm: {
                    return `
                    display: none;
                `
                }
            }
        }}
    }
`)

export const StyledInnerHeaderContainer = WithUiTag(
    "HeaderInnerContainer"
)(styled.div`
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 20px;
    padding-top: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
`)

export const StyledTitle = WithUiTag("CartProductTitle")(styled.div`
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
`)
export const StyledLeftColumnTitle = WithUiTag(
    "CartProductLeftColumnTitle"
)(styled(StyledTitle)`
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
`)
export const StyledCenterColumnTitle = WithUiTag(
    "CartProductCenterColumnTitle"
)(styled(StyledTitle)`
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
`)
export const StyledRightColumnTitle = WithUiTag(
    "CartProductRightColumnTitle"
)(styled(StyledTitle)`
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
`)
export const StyledProductList = WithUiTag("CartProductList")(styled.div`
    font-size: 18px;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
`)
