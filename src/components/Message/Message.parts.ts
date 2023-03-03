import styled from 'styled-components';
import {WithUiTag} from "../../commons/components";

export const StyledMessage = WithUiTag("Message")(styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #151515;
    position: absolute;
    bottom: 0;
    left: 0;

    .messageText {
        margin: 0;
    }
`)