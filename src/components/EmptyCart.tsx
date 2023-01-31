import React from "react";
import styled from "styled-components";
import { TABLET_BREAKPOINTS } from '../commons/constants';
import EmptyCartImage from "../assets/images/empty-cart.svg"

const StyledEmptyCart = styled.div`
	background: #FFFFFF;
	border: 1px solid #EAEAEA;
	padding: 69px 0 79px 0;

	p {
		margin: 38px 0;
		color: #151515;
		font-weight: 400;
		font-size: 18px;
		line-height: 104.5%;
	}

	button {
		cursor: pointer;
		padding: 12px 20px;
		color: #FEFEFE;
		font-weight: 600;
		font-size: 16px;
		line-height: 150%;
		background: #151515;
		border-radius: 40px;
	}

	@media screen and (max-width: ${TABLET_BREAKPOINTS.small}px) {
		padding: 69px 20px 79px 20px;
	}
`

interface EmptyCartProps {
	navigateTo: (to: string) => void;
}

export const EmptyCart: React.FunctionComponent<EmptyCartProps> = (props: EmptyCartProps) => {
	return (
			<StyledEmptyCart>
				<EmptyCartImage />
				<p>Your cart is empty. Discover tests to add to your cart</p>
				<button onClick={() => props.navigateTo("/")}>Browse products</button>
			</StyledEmptyCart>
	)
}