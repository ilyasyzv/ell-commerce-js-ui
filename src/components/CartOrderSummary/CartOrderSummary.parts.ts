import styled, { css } from "styled-components"
import WithUiTag from "../../commons/components"
import { MAIN_COLOR } from "../../commons/colors"

export enum CartOrderSummaryComponentBreakPoints {
    mobileMd = 388,
    mobileSm = 335,
    desktopSm = 429,
    desktopMd = 560,
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
    min-width: 200px;
    color: #333333;
    font-family: "OpenSans", sans-serif;

    .order-summary-form {
        padding: 47px 40px;
        ${(props) => {
            switch (props.breakpoint) {
                case CartOrderSummaryComponentBreakPoints.desktopSm: {
                    return `
                    padding: 47px 40px;`
                }
                case CartOrderSummaryComponentBreakPoints.mobileMd: {
                    return `
                    padding: 30px 15px;`
                }
                case CartOrderSummaryComponentBreakPoints.mobileSm: {
                    return `
                    padding: 30px 15px;`
                }
            }
        }}
    }
    .coupon-block {
        ${(props) => {
            switch (props.breakpoint) {
                case CartOrderSummaryComponentBreakPoints.desktopMd: {
                    return `padding-bottom: 40px;`
                }
                case CartOrderSummaryComponentBreakPoints.desktopSm: {
                    return `padding-bottom: 50px;`
                }
                case CartOrderSummaryComponentBreakPoints.mobileMd: {
                    return `padding-bottom: 50px;`
                }
                case CartOrderSummaryComponentBreakPoints.mobileSm: {
                    return `padding-bottom: 75px;`
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

export const StyledCartOrderCouponDiscount = WithUiTag(
    "CartOrderSubtotal"
)(styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :not(:first-child) {
        padding-top: 15px;
    }
    .coupon-discount-label {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }
    .coupon-code {
        color: #7f8384;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 1.1;
        padding: 4px 0;
    }
    .coupon-remove-btn {
        margin-right: auto;
        padding: 5px 10px;
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

export const StyledCouponBlock = WithUiTag(
    "CartOrderCouponInputWrapper"
)(styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    position: relative;
    :not(:first-child) {
        padding-top: 10px;
    }

    .enter-coupon-button {
        align-self: flex-start;
        margin: 0;
        margin-bottom: 5px;
        padding: 5px;
        padding-left: 0;
    }
    #errorMessage {
        position: absolute;
        bottom: 0;
        left: 0;
    }
`)

export const StyledCouponInputWrapper = WithUiTag(
    "CartOrderCouponInputWrapper"
)(
    styled.div(
        ({ className }) => css`
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            display: ${className === "coupon-input-wrapper hidden"
                ? "none"
                : "flex"};
            align-items: center;
            flex-wrap: wrap;

            .coupon-btn {
                padding: 5px 20px;
                margin-left: 10px;
            }
            .coupon-input {
                flex: 1;
            }
        `
    )
)

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
