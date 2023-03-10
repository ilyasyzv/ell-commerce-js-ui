import React from "react"
import { CatalogItem } from "../CatalogItem/CatalogItem"
import { Product } from "@pearson-ell/commerce-sdk"
import { StyledCatalog } from "./Catalog.parts"

export interface ICatalogProps {
    products: Product[]
    selectItem: (p: Product, selected: boolean) => void
}

export const Catalog: React.FunctionComponent<ICatalogProps> = (
    props: ICatalogProps
) => {
    return (
        <StyledCatalog>
            <table>
                <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>&nbsp;</th>
                    </tr>
                    {props.products.map((product: Product, idx: number) => {
                        return (
                            <CatalogItem
                                product={product}
                                key={idx}
                                index={idx}
                                onSelect={props.selectItem}
                            ></CatalogItem>
                        )
                    })}
                </tbody>
            </table>
        </StyledCatalog>
    )
}
