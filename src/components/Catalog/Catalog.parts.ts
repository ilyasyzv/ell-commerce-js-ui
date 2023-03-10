import styled from "styled-components"

export const StyledCatalog = styled.div`
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
