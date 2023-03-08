import React from "react"
import { CatalogItem } from "./CatalogItem"
import { Product } from "@pearson-ell/commerce-sdk"
import styled from "styled-components"

const StyledCatalog = styled.div`
    padding: 24px;
    font-family: "OpenSans", sans-serif;
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    table {
        border-collapse: collapse;
        margin-right: 120px;
        tr.odd {
            background-color: #f6f6f6;
        }
        tr.selected {
            font-weight: 400;
            background-color: rgb(222, 230, 238);
            border: 2px solid #bcd1f1;
        }
        th {
            font-weight: bold;
            border-bottom: 2px solid #666;
        }

        td,
        th {
            padding: 16px;
            vertical-align: top;
        }
    }
`

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
