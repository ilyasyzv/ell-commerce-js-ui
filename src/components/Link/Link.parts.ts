import styled from "styled-components"
import WithUiTag from "../../commons/components"

export const StyledLink = WithUiTag("Link")(styled.a`
    font-family: "OpenSans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    color: #007a9c;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #005d77;
        text-decoration: underline;
    }
    &:focus-visible {
        outline: 4px solid #4fa8ff;
    }
    &:active {
        color: #004b60;
    }
    &[disabled] {
        opacity: 0.6;
        cursor: default;
    }
`)
