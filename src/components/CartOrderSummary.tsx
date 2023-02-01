import React, { useState } from 'react'
import styled from 'styled-components';
import { MAIN_COLOR } from '../commons/colors';
import { DESKTOP_BREAKPOINTS, MOBILE_BREAKPOINTS, TABLET_BREAKPOINTS } from '../commons/constants';

const StyledCartOrderSummary = styled.div`
    padding: 47px 40px;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    border-radius: 6px;
    max-width: 100%;

    h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 21px;
    }

    .subtotal_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 400;
        border-bottom: 1px solid #EAEAEA;
        padding-bottom: 58px;

        .price {
            font-weight: 600;
            font-size: 16px;
        }
    }

    h3 {
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
    
            a {
                text-decoration: underline;
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
        color: #FEFEFE;

        &[aria-disabled='true'] {
            background: #E6E6E6;
            color: #919191;
        }
    }

    // Mobile
    @media only screen and (min-device-width: ${MOBILE_BREAKPOINTS.small}px) and (max-device-width: ${MOBILE_BREAKPOINTS.medium}px) {
        h3 {
            font-size: 14px;
        }
    }

    // Tablet
    @media only screen and (min-width: ${TABLET_BREAKPOINTS.large}px) {
        max-width: 373px;
    }

    // Desktop
    @media only screen and (min-width: ${DESKTOP_BREAKPOINTS.large}px) {
        max-width: 429px;
    }


`;

interface ICartOrderSummary {
    className?: string;
    price: string;
}

export const CartOrderSummary: React.FC<ICartOrderSummary> = ({className, price = ''}: ICartOrderSummary) => {
    const [disabled, setDisabled] = useState<boolean>(false);

    const toogleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setDisabled(isChecked);
    }

    return (
        <StyledCartOrderSummary className={className}>
            <h2>Order summary</h2>
            <div className='subtotal_wrapper'>
                <span>Subtotal</span>
                <span className="price">{price}</span>
            </div>
            <h3>*All final calculations will be made at checkout.</h3>
            <div className='agreement-wrapper'>
                <input 
                    type="checkbox" 
                    onChange={toogleCheckbox}
                />
                <span>I agree to Pearson’s <a><b>Privacy Policy, Refund Policy and Terms of Use</b></a></span>
            </div>
            <button aria-disabled={!disabled}>Checkout</button>
        </StyledCartOrderSummary>
    );
}