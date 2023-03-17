import styled from "styled-components"
import WithUiTag from "../../commons/components"

export const StyledMessage = WithUiTag("Message")(styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #151515;

    .messageText {
        margin: 0;
        padding: 5px 0;
    }
`)
