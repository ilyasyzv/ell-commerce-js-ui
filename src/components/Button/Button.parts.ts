import styled from "styled-components"
import WithUiTag from "../../commons/components"

export const StyledButton = styled.button`
    font-family: "OpenSans", sans-serif;
    border: 2px solid transparent;
    box-shadow: none;
    box-sizing: border-box;
    padding: 12px 20px;
    border-radius: 40px;
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
    cursor: pointer;

    &[disabled] {
        cursor: default;
    }
`
export const PrimaryButton = WithUiTag("PrimaryButton")(styled(StyledButton)``)

export const SecondaryButton = WithUiTag("SecondaryButton")(styled(
    StyledButton
)`
    color: #fefefe;
    background: #151515;
    border: 2px solid #151515;
    &:hover,
    &:active {
        border: 2px solid #505759;
        background: #505759;
    }
    &:focus-visible {
        background: #151515;
        border: 3px solid #4fa8ff;
        outline: none;
    }
    &[disabled] {
        color: #919191;
        background: #e6e6e6;
        border: 2px solid #e6e6e6;
    }
`)

export const TertiaryButton = WithUiTag("TertiaryButton")(
    styled(StyledButton)`
        color: #151515;
        font-weight: 600;
        background: transparent;
        border: 2px solid #151515;
        &:hover,
        &:active {
            color: #fefefe;
            background: #151515;
        }
        &:focus-visible {
            color: #151515;
            background: transparent;
            border: 3px solid #4fa8ff;
            outline: none;
        }
        &[disabled] {
            color: #919191;
            border: 2px solid #e6e6e6;
            background: transparent;
        }
    `
)

export const LinkLikeButton = WithUiTag("LinkLikeButton")(
    styled(StyledButton)`
        color: #007a9c;
        background: transparent;
        font-weight: 600;
        font-size: 14px;
        line-height: 1.5;
        border-radius: 0;
        border: none;

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
        }
    `
)
