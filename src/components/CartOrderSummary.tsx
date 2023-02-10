import { Cart } from "ell-commerce-sdk";
import React, { useState } from "react";
import styled from "styled-components";
import { MAIN_COLOR } from "../commons/colors";
import { breakpoints } from "../commons/constants";

const StyledCartOrderSummary = styled.div`
    padding: 47px 40px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    max-width: 100%;
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
    }

    .agreement-wrapper {
        display: flex;
        align-items: flex-start;
        margin-top: 108px;

        input {
            accent-color: ${MAIN_COLOR};
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
`;

interface ICartOrderSummary {
    className?: string;
    cart: Cart;
    onCheckoutClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CartOrderSummary: React.FC<ICartOrderSummary> = ({
    className,
    cart,
    onCheckoutClick,
}: ICartOrderSummary) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const toogleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setIsDisabled(isChecked);
    };

    if (!cart) {
        return <div></div>;
    }

    return (
        <StyledCartOrderSummary className={className}>
            <h2>Order summary</h2>
            <div className="price_wrapper">
                <div>
                    <span>Subtotal</span>
                    <span className="price">
                        {cart.currency.symbol}
                        {cart.baseAmount}
                    </span>
                </div>
                {cart?.discountAmount > 0 && (
                    <div>
                    <span>Discount</span>
                    <span className="price">
                        -{cart.currency.symbol}
                        {cart.discountAmount}
                    </span>
                    </div>
                )}
            </div>
            {cart?.discountAmount > 0 && (
                <div className="total_wrapper">
                    <span>Total</span>
                    <span>
                        {cart.currency.symbol}
                        {(cart.baseAmount - cart.discountAmount).toFixed(2)}
                    </span>
                </div>
            )}

            <p className="calculations">*All final calculations will be made at checkout.</p>
            <div className="agreement-wrapper">
                <input type="checkbox" onChange={toogleCheckbox} />
                <span>
                    I agree to Pearson’s{" "}
                    <a>
                        <b>Privacy Policy, Refund Policy</b> and <b>Terms of Use</b>
                    </a>
                </span>
            </div>
            <button disabled={!isDisabled} onClick={onCheckoutClick}>
                Checkout
            </button>
        </StyledCartOrderSummary>
    );
};
