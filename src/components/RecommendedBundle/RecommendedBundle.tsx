import React, { useRef } from 'react';
import {
    StyledBtn,
    StyledContainer,
    StyledDescriptionContainer,
    StyledHeader,
    StyledImgContainer,
    StyledProductInfoContainer
} from './RecommendedBundle.parts';
import noImageSrc from "../../assets/images/no-image.png";
import { Product } from "ell-commerce-sdk";
import { cutText, formatPrice } from '../../utils';
import parse from 'html-react-parser';
import { useBreakpoints } from "../../commons/hooks";


export enum RecommendedBundleComponentBreakPoints {
    small = 269,
    medium = 314,
    large = 370
}

interface IRecommendedBundle {
    data: Product,
    backgroundImageUrl: string;
    onAddButtonClick: (data: Product) => void;
}


export const RecommendedBundle: React.FC<IRecommendedBundle> = (props: IRecommendedBundle) => {
    const { data, backgroundImageUrl, onAddButtonClick } = props;
    const ref = useRef(null);
    const breakpoint = useBreakpoints<RecommendedBundleComponentBreakPoints>(ref, [
        RecommendedBundleComponentBreakPoints.small,
        RecommendedBundleComponentBreakPoints.medium,
        RecommendedBundleComponentBreakPoints.large
    ]);

    const thumbNail = data.images ? data.images.find((i) => i.isThumbnail) : null;
    const background = (!backgroundImageUrl || backgroundImageUrl === "") && data.images ?
        data.images.find((i) => i.isDefault) : null;

    return (
        <StyledContainer ref={ref} breakpoint={breakpoint}>
            <StyledHeader className='header' backgroundImageUrl={background ? background.imageUrl : backgroundImageUrl}/>
            <StyledImgContainer className='image-container'>
                {
                    thumbNail ? 
                    (<img src={thumbNail.imageUrl} alt={thumbNail.altText} />) : 
                    (<img src={noImageSrc} alt={"imageAlt"} />)
                }
            </StyledImgContainer>
            <StyledProductInfoContainer>
                {data?.name && <span>{cutText(data.name, 20)}</span>}
                <span>{formatPrice(data?.price, data?.currency)}</span>
            </StyledProductInfoContainer>
            {data?.shortDescription && 
                (<StyledDescriptionContainer>
                    {parse(data.shortDescription)}
                </StyledDescriptionContainer>)
            }
            <StyledBtn 
                onClick={onAddButtonClick.bind(null, data)}>
                    Add to Cart <div className='icon'></div>
            </StyledBtn>
        </StyledContainer>
    );
}