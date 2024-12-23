import styled from "styled-components"
import { breakpoints } from "../../commons/constants"
import WithUiTag from "../../commons/components"

export const StyledEmptyCart = WithUiTag("EmptyCart")(styled.div`
    box-sizing: border-box;
    max-height: 379px;
    max-width: 1025px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #eaeaea;
    padding: 69px 20px 79px 20px;
    min-width: 335px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .cart-image {
        min-width: 148px;
        min-height: 88px;
    }

    .text {
        font-family: "OpenSans", sans-serif;
        margin: 38px 0;
        color: #151515;
        font-weight: 400;
        font-size: 18px;
        line-height: 104.5%;
        text-align: center;
    }

    .button {
        font-family: "OpenSans", sans-serif;
        padding: 12px 20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        border-radius: 40px;
    }

    @media screen and (max-width: ${breakpoints.tabletSm}px) {
        padding: 69px 20px 79px 20px;
    }

    @media screen and (max-width: ${breakpoints.desktopLg}px) {
        margin-right: 0;
        margin-bottom: 30px;
    }
`)
