import styled from "styled-components"
import WithUiTag from "../../commons/components"

export const StyledShoppingCartIcon = WithUiTag("ShoppingCartIcon")(styled.div`
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 32px;
    height: 32px;
    text-align: center;
    box-sizing: border-box;

    @media screen and (max-width: 640px) {
        width: calc(32px * 0.75);
        height: calc(32px * 0.75);
    }

    .cart-icon {
        z-index: 1;
        cursor: pointer;
        width: 75%;
        height: 75%;
    }
    .total-items {
        min-width: 65.625%;
        height: 65.625%;
        padding: 1.5px;
        border: 2.25px solid #ffffff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -9px;
        right: -7px;
        z-index: 20;
        box-sizing: border-box;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1;
        color: #ffffff;
        background-color: #9e007e;

        @media screen and (max-width: 640px) {
            top: -6px;
            right: -5px;
        }
    }

    .more-nine {
        font-size: 0.7rem;
    }

    .items-popup {
        position: absolute;
        z-index: 200;
        background-color: #f2f2f2;
        min-width: 480px;
        min-height: 300px;
        right: 0px;
        box-shadow: 6px 6px 6px #0007;
        border: 1px solid #000;
        font-size: 14px;
        padding: 16px;
        color: #000;
        border-radius: 16px;
        font-family: "OpenSans", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;

        @media screen and (max-width: 640px) {
            position: fixed;
            min-width: 0px;
            padding: 8px;
            border-radius: 2px;
            left: 0px;
            margin-top: 8px;

            button {
                font-size: 14px !important;
            }
        }

        .item-popup-container {
            display: flex;
            flex-flow: column;
            align-self: self-start;
            width: 100%;

            .items-list-container {
                margin-top: 16px;
                max-height: 200px;
                overflow-y: auto;
                padding-right: 4px;
                div {
                    display: flex;
                    justify-content: space-between;
                    padding: 8px 0px;

                    span:first-child {
                        padding-right: 8px;
                    }
                    span:last-child {
                        white-space: nowrap;
                    }
                }
            }
            .checkout-row {
                font-size: 22px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .clear-cart-button {
                position: absolute;
                bottom: 16px;
                font-size: 16px;
                background-color: #777;
            }
            button {
                color: white;
                border: none;
                background-color: #007fa3;
                font-weight: bold;
                font-size: 18px;
                border-radius: 16px;
                padding: 8px;
                cursor: pointer;

                i {
                    font-size: 14px;
                }
            }
        }
    }
`)
