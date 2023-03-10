import styled from "styled-components"
import WithUiTag from "../../commons/components"
import { MAIN_COLOR } from "../../commons/colors"

export enum CartOrderSummaryComponentBreakPoints {
    mobileMd = 388,
    desktopSm = 429,
}

interface IStyledCartOrderSummary {
    readonly breakpoint: CartOrderSummaryComponentBreakPoints | undefined
}

export const StyledCartOrderSummary = WithUiTag(
    "CartOrderSummary"
)(styled.div<IStyledCartOrderSummary>`
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    max-width: 100%;
    box-sizing: border-box;
    max-width: 796px;
    color: #333333;
    font-family: "OpenSans", sans-serif;

    .inner-wrapper {
        ${(props) => {
            switch (props.breakpoint) {
                case CartOrderSummaryComponentBreakPoints.desktopSm: {
                    return `padding: 47px 40px;`
                }
                case CartOrderSummaryComponentBreakPoints.mobileMd: {
                    return `padding: 30px 15px;`
                }
            }
        }}
    }
`)

export const StyledCartOrderHeader = WithUiTag("CartOrderHeader")(styled.h2`
    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
    margin: 0;
    padding: 0;
`)

export const StyledCartOrderPriceWrapper = WithUiTag(
    "CartOrderPriceWrapper"
)(styled.div`
    padding-bottom: 58px;
    :has(div:nth-child(2)) {
        padding-bottom: 30px;
    }
    padding-top: 36px;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #eaeaea;
`)

export const StyledCartOrderSubtotal = WithUiTag(
    "CartOrderSubtotal"
)(styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    :not(:first-child) {
        padding-top: 15px;
    }
`)

export const StyledCartOrderDiscount = WithUiTag(
    "CartOrderDiscount"
)(styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    :not(:first-child) {
        padding-top: 15px;
    }
`)

export const StyledCartOrderPrice = WithUiTag("CartOrderPrice")(styled.span`
    font-weight: 600;
    font-size: 16px;
`)

export const StyledCartOrderTotalWrapper = WithUiTag(
    "CartOrderTotalWrapper"
)(styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    padding-top: 18px;
    padding-bottom: 50px;
`)

export const StyledCartOrderCalculations = WithUiTag(
    "CartOrderCalculations"
)(styled.p`
    margin: 0;
    padding-top: 25px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    color: #000000;
`)

export const StyledCartOrderAgreementWrapper = WithUiTag(
    "CartOrderAgreementWrapper"
)(styled.div`
    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }

    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 108px;
    color: #151515;
    input {
        accent-color: ${MAIN_COLOR};
    }

    .agreement-text {
        font-weight: 400;
        font-size: 14px;
        margin-left: 12px;
        text-align: left;
        line-height: 21px;

        b {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`)

export const StyledCartOrderButton = WithUiTag("CartOrderButton")(styled.button`
    display: block;
    width: 100%;
    cursor: pointer;
    padding: 12px;
    border: none;
    border-radius: 40px;
    margin-top: 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    background: #151515;
    color: #fefefe;

    &[disabled] {
        background: #e6e6e6;
        color: #919191;
        cursor: default;
    }
`)
