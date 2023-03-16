import WithUiTag from "../../commons/components"
import styled from "styled-components"

export const VariantContainer = WithUiTag("VariantContainer")(styled.div`
    width: 100%;
    position: relative;
    box-sizing: border-box;

    .select-arrow {
        min-height: 7px;
        min-width: 12px;
    }
    .select-value {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .select-options {
        top: 0;
        position: absolute;
        width: inherit;
        background: #fefefe;
        border: 1px solid #151515;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        z-index: 50;
    }

    @media only screen and (max-width: 600px) {
        .select-options {
            overscroll-behavior: none;
            overflow-y: auto;
            position: fixed;
            width: calc(100% - 16px);
            bottom: 6px;
            top: 70%;
            left: 6px;
            margin-left: auto;
        }
    }

    .select-options-hide {
        display: none;
    }

    .select-option {
        display: flex;
        align-items: center;
        height: 48px;
        padding-left: 6px;
        padding-right: 6px;
    }

    .select-option:hover {
        background-color: #f5f5f5;
        border-radius: 4px;
        cursor: pointer;
    }

    .select-option-header {
        display: flex;
        align-items: center;
        height: 48px;
        padding-left: 6px;
        padding-right: 6px;
    }

    .select-custom {
        box-sizing: border-box;
        width: 100%;
        height: 48px;
        border: 1px solid #919191;
        border-radius: 4px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        padding: 12px 13px;
    }
`)
export const StyledSelectVariants = WithUiTag("SelectVariant")(styled.select`
    outline: none;
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    border: 1px solid #919191;
    border-radius: 4px;
    padding: 12px 13px;
    font-weight: 400;
    font-size: 16px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    -webkit-appearance: none;
    appearance: none;
`)
