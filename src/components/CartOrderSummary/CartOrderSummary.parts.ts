import styled from "styled-components"
import WithUiTag from "../../commons/components"
import { breakpoints } from "../../commons/constants"
import { MAIN_COLOR } from "../../commons/colors"

export const StyledCartOrderSummary = WithUiTag("CartOrderSummary")(styled.div`
    padding: 47px 40px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    max-width: 100%;
    box-sizing: border-box;
    min-width: calc(${breakpoints.mobileSm}px - 40px);
    color: #333333;

    font-family: "OpenSans", sans-serif;
    h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 21px;
        margin: 0;
        padding: 0;
    }

    .price_wrapper {
        padding-bottom: 58px;
        :has(div:nth-child(2)) {
            padding-bottom: 30px;
        }
        padding-top: 36px;
        font-size: 16px;
        font-weight: 400;
        border-bottom: 1px solid #eaeaea;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            :not(:first-child) {
                padding-top: 15px;
            }
        }

        .price {
            font-weight: 600;
            font-size: 16px;
        }
    }

    .total_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        font-size: 16px;
        padding-top: 18px;
        padding-bottom: 50px;
    }

    p.calculations {
        margin: 0;
        padding-top: 25px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-align: left;
        color: #000000;
    }

    .agreement-wrapper {
        display: flex;
        align-items: flex-start;
        margin-top: 108px;
        color: #151515;
        input {
            accent-color: ${MAIN_COLOR};
        }

        .visually-hidden {
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            width: 1px;
        }

        span {
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
    }

    button {
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
    }

    // Mobile
    @media only screen and (min-device-width: ${breakpoints.mobileSm}px) and (max-device-width: ${breakpoints.mobileMd}px) {
        h3 {
            font-size: 14px;
        }
    }

    // Tablet
    @media only screen and (max-width: ${breakpoints.tabletMd + 1}px) {
        .agreement-wrapper {
            justify-content: center;
        }
    }

    @media only screen and (min-width: ${breakpoints.tabletLg}px) {
        max-width: 373px;
    }

    // Desktop
    @media only screen and (min-width: ${breakpoints.desktopMd}px) {
        min-width: 429px;
    }
`)
