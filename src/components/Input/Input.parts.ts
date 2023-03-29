import styled from "styled-components"
import WithUiTag from "../../commons/components"

interface IStyledInput {
    readonly invalid: boolean | undefined
}

export const StyledInputWrapper = WithUiTag("InputWrapper")(styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`)

export const StyledInput = WithUiTag("Input")(styled.input<IStyledInput>`
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #919191;
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.1;
    padding: 14px 15px;
    cursor: pointer;

    ${(props) => {
        if (props.invalid) {
            return `border: 2px solid #D30018;`
        }
    }}
    ${(props) => {
        if (!props.invalid) {
            return `
            &:hover {
                background: #ffffff;
                border: 1px solid #151515;
            }
            `
        }
    }}
    &:focus-visible {
        background: #ffffff;
        border: 2px solid #151515;
    }
    &[disabled] {
        color: #919191;
        background: #f5f5f5;
        border: 1px solid #919191;
        cursor: default;
    }
`)

export const StyledLabel = WithUiTag("InputLabel")(styled.label`
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 5px;
`)

export const StyledHelpMessage = WithUiTag("HelpMessage")(styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #151515;
    margin: 0;
    padding: 5px 0;
`)
