import React from "react";
import styled from "styled-components";
import { breakpoints } from '../commons/constants';
import EmptyCartImage from "../assets/images/empty-cart.svg"

const StyledEmptyCart = styled.div`
	box-sizing: border-box;
	max-height: 379px;
	max-width: 1025px;
	width: 100%;
	background: #FFFFFF;
	border: 1px solid #EAEAEA;
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
		margin: 38px 0;
		color: #151515;
		font-weight: 400;
		font-size: 18px;
		line-height: 104.5%;
		text-align: center;
	}

	.button {
		cursor: pointer;
		padding: 12px 20px;
		color: #FEFEFE;
		font-weight: 600;
		font-size: 16px;
		line-height: 150%;
		background: #151515;
		border-radius: 40px;
	}

	@media screen and (max-width: ${breakpoints.tabletSm}px) {
		padding: 69px 20px 79px 20px;
	}

	@media screen and (max-width: ${breakpoints.desktopLg}px) {
        margin-right: 0;
		margin-bottom: 30px;
    }
`

interface EmptyCartProps {
	onBackButtonClick: () => void;
	className?: string
}

export const EmptyCart: React.FunctionComponent<EmptyCartProps> = (props: EmptyCartProps) => {
	return (
			<StyledEmptyCart className={props.className}>
				<EmptyCartImage className="cart-image" />
				<p className="text">Your cart is empty. Discover products to add to your cart</p>
				<button className="button" onClick={() => props.onBackButtonClick()}>Browse products</button>
			</StyledEmptyCart>
	)
}