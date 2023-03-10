import React, { useState } from "react"
import parse from "html-react-parser"
import { Product } from "@pearson-ell/commerce-sdk"
import { StyledCatalogItem } from "./CatalogItem.parts"

export interface ICatalogItemProps {
    product: Product
    index: number
    onSelect: (p: Product, s: boolean) => void
}

export const CatalogItem: React.FunctionComponent<ICatalogItemProps> = (
    props: ICatalogItemProps
) => {
    const [select, setSelect] = useState<boolean>(() => false)

    function onCheckChange(e: React.ChangeEvent<HTMLInputElement>, p: Product) {
        setSelect(e.target.checked)
        props.onSelect(p, e.target.checked)
    }
    return (
        <StyledCatalogItem
            className={`${props.index % 2 === 0 ? "odd" : ""} ${
                select ? "selected" : ""
            }`}
        >
            <td className="product-description">
                <div>
                    <span className="product-name"> {props.product.name}</span>
                    <span>{parse(props.product.description)}</span>
                </div>
                {props.product.images && props.product.images.length > 0 && (
                    <img src={props.product.images[0].imageUrl} alt="" />
                )}
            </td>
            <td>{props.product.type}</td>
            <td className="product-price">{`${props.product.currency.currencyCode} ${props.product.price}`}</td>
            <td>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        onCheckChange(e, props.product)
                    }}
                ></input>
            </td>
        </StyledCatalogItem>
    )
}
