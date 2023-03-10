import styled from "styled-components"
import WithUiTag from "../../commons/components"

export const StyledCartQty = WithUiTag("CartQty")(styled.div`
    display: flex;
    font-family: "OpenSans", sans-serif;
    flex-wrap: wrap;
    align-items: end;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 26px;
    color: #333333;
    box-sizing: border-box;
    .text-wrapper {
        padding-right: 20px;
    }
    .items-wrapper {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
    }
`)
