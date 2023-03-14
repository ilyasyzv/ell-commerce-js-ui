import styled from "styled-components"
import WithUiTag from "../../commons/components"
import { MAIN_COLOR } from "../../commons/colors"

export enum CartOrderSummaryComponentBreakPoints {
    mobileMd = 388,
    mobileSm = 335,
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
    box-sizing: border-box;
    max-width: 796px;
    color: #333333;
    font-family: "OpenSans", sans-serif;

    .order-summary-form {
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

    .checkout-btn,
    .continue-btn {
        ${(props) => {
            if (
                props.breakpoint &&
                props.breakpoint >=
                    CartOrderSummaryComponentBreakPoints.desktopSm
            ) {
                return `
                width: 350px;
                max-width: 350px;`
            }
            return `width: 100%;
            max-width: 100%;`
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

export const StyledCouponInputWrapper = WithUiTag(
    "CartOrderCouponInputWrapper"
)(styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    :not(:first-child) {
        padding-top: 15px;
    }

    .coupon-input-label {
        display: flex;
        flex-direction: column;
        flex: 1;

        .coupon-input-label-text {
            color: #007a9c;
            font-weight: 600;
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 5px;
        }
    }

    .coupon-input {
        background: #ffffff;
        border: 1px solid #959595;
        border-radius: 4px;
        text-transform: uppercase;
        font-size: 16px;
        line-height: 1.1;
        padding: 14px 15px;
    }

    .coupon-btn {
        padding: 5px 20px;
        margin-bottom: 6px;
        margin-left: 10px;
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
    align-items: baseline;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    padding-top: 18px;
    margin-bottom: 20px;
`)

export const StyledTotalLabel = WithUiTag("CartOrderTotalLabel")(styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;

    .label {
        margin-bottom: 5px;
    }
    .tax-note {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.1;
        color: #333333;
    }
`)

export const StyledFormFooter = WithUiTag("CartOrderFormFooter")(styled.div`
    margin: 0;
    padding: 0;
    padding-top: 10px;
    width: auto;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    .continue-btn,
    .checkout-btn {
        display: block;
        margin: 0 auto;
    }

    .checkout-btn {
        margin-bottom: 20px;
        margin-top: 40px;
    }
`)

export const StyledCartOrderAgreementWrapper = WithUiTag(
    "CartOrderAgreementWrapper"
)(styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
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
    }

    a {
        font-size: 14px;
        line-height: 21px;
    }
`)
