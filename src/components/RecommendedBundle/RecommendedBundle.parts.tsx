import styled from 'styled-components';
import { RecommendedBundleComponentBreakPoints } from './RecommendedBundle';

interface StyledContainerProps {
    readonly breakpoint: RecommendedBundleComponentBreakPoints | undefined
}

const getHeight = (breakpoint: number | undefined) => {
    switch (breakpoint) {
        case RecommendedBundleComponentBreakPoints.small:
            return `height: 156px`;
        case RecommendedBundleComponentBreakPoints.medium:
            return `height: 157px`;
        case RecommendedBundleComponentBreakPoints.large:
            return `height: 186px`;
    }
}

const getPositionValue = (breakpoint: number | undefined) => {
    switch (breakpoint) {
        case RecommendedBundleComponentBreakPoints.small:
            return `top: 71px`;
        case RecommendedBundleComponentBreakPoints.medium:
            return `top: 68px`;
        case RecommendedBundleComponentBreakPoints.large:
            return `top: 90px`;
    }
}

export const StyledContainer = styled.div<StyledContainerProps>`
    container-type: inline-size;
    margin: 0;
    padding: 0;
    max-width: 371px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position: relative;
    padding-bottom: 30px;
    font-family: "OpenSans", sans-serif;

    .header {
        ${props => getHeight(props.breakpoint)}
    }

    .image-container {
        ${props => getPositionValue(props.breakpoint)}
    }
`;

export const StyledHeader = styled.div`
    padding: 0;
    margin: 0;
    background-image: url(${props => props.backgroundImageUrl || "" });
    border-radius: 5px 5px 0px 0px;
    height: 186px;
`;

export const StyledImgContainer = styled.div`
    padding: 0;
    margin: 0;
    position: absolute;
    left: 30px;
    top: 90px;
`;

export const StyledProductInfoContainer = styled.div`
    padding: 0;
    margin: 0;
    padding: 44px 30px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
`;

export const StyledDescriptionContainer = styled.div`
    padding: 0;
    margin: 38px 0px 0px;
    padding: 0px 30px;
    font-weight: 400;
    font-size: 14px;
    height: 135px;
    overflow-y: overlay;
`;

export const StyledBtn = styled.button`
    display: flex;
    align-items: center;
    padding: 6px 20px;
    margin: 20px 30px 0px;
    border: 2px solid #007A9C;
    border-radius: 40px;
    background-color: #fff;
    color: #007A9C;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    .icon {
        margin-left: 15px;
        display: inline-block;
        width: 7px;
        height: 7px;
        border-right: 2px solid #007FA3;
        border-bottom: 2px solid #007FA3;
        border-top-right-radius: 1.5px;
        border-bottom-left-radius: 1.5px;
        border-bottom-right-radius: 1.5px;
        transform: rotate(-45deg);
    }

    &:hover {
        background-color: #007A9C;
        color: #fff;

        .icon {
            border-right: 2px solid #fff;
            border-bottom: 2px solid #fff;
        }
    }
`;