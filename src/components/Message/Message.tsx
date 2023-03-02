import React from "react";
import {StyledMessage} from "./Message.parts"

export type MessageProps = {
	text: string;
	type: string;
}

export const Message: React.FC<MessageProps> = ({
	text,
	type
}) => {
	return (
		<StyledMessage>
			<p className="messageText" style={type === "Error" ? {color: "#D30018"} : {color: "#008638"}}>{text}</p>
		</StyledMessage>
	)
}