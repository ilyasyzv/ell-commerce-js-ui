import React from "react"
import { StyledMessage } from "./Message.parts"

export type MessageProps = {
    id: string
    text: string
    type: string
    className?: string
}

export const Message: React.FC<MessageProps> = ({
    id,
    text,
    type,
    className,
}) => {
    return (
        <StyledMessage id={id} className={className}>
            <p
                className="messageText"
                style={
                    type === "Error"
                        ? { color: "#D30018" }
                        : { color: "#008638" }
                }
            >
                {text}
            </p>
        </StyledMessage>
    )
}
