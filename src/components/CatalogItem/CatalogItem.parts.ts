import styled from "styled-components"

export const StyledCatalogItem = styled.tr`
    box-sizing: border-box;

    .product-price {
        white-space: nowrap;
        text-align: right;
    }

    .product-description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 600px;
        padding-right: 24px;

        div {
            display: flex;
            flex-flow: column;

            .product-name {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
`
