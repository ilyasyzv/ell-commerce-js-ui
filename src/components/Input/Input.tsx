import React, {
    useEffect,
    ChangeEventHandler,
    FocusEventHandler,
    KeyboardEventHandler,
    RefObject,
} from "react"
import {
    StyledHelpMessage,
    StyledLabel,
    StyledInput,
    StyledInputWrapper,
} from "./Input.parts"
import { HelpIcon } from "../../commons/svgs"
import { Message } from "../Message"
import type { MessageProps } from "../Message"
import { setAriaInvalidAttributes } from "../../commons/utils"

type Props = {
    type: "text" | "email" | "number"
    id?: string
    name: string
    min?: string
    max?: string
    label?: string
    maxLength?: number
    placeHolder?: string
    defaultValue?: string
    onFocus?: FocusEventHandler<HTMLInputElement>
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>
    onChange?: ChangeEventHandler<HTMLInputElement>
    onBlur?: ChangeEventHandler<HTMLInputElement>
    className?: string
    disabled?: boolean
    helpMessage?: string
    hasHelpIcon?: boolean
    value?: string
    isInvalid?: boolean
    isRequired?: boolean
    inputRef?: RefObject<HTMLInputElement>
    errorMessage?: MessageProps | null
    pattern?: string
}

export const Input: React.FC<Props> = ({
    type,
    id,
    name,
    min,
    max,
    label,
    maxLength,
    placeHolder,
    disabled,
    className,
    helpMessage,
    hasHelpIcon,
    isRequired,
    defaultValue,
    value,
    isInvalid,
    inputRef,
    errorMessage,
    onFocus = () => {},
    onChange = () => {},
    onKeyDown = () => {},
    onBlur = () => {},
    pattern,
}) => {
    const baseProps = {
        type,
        id,
        name,
        min,
        max,
        maxLength,
        required: !!isRequired,
        "aria-required": isRequired,
        placeholder: placeHolder,
        disabled,
        ref: inputRef,
        defaultValue,
        value,
        onFocus,
        onKeyDown,
        onChange,
        onBlur,
        invalid: !!isInvalid,
        pattern,
    }
    const { ref } = baseProps
    const fieldProps = label ? baseProps : { ...baseProps, "aria-label": name }

    useEffect(() => {
        if (ref && isInvalid) {
            setAriaInvalidAttributes(ref, isInvalid, "errorMessage")
        }
    }, [isInvalid])

    return (
        <StyledInputWrapper className={className}>
            {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
            <StyledInput {...fieldProps} />
            {helpMessage && (
                <StyledHelpMessage>
                    {helpMessage} {hasHelpIcon ? <HelpIcon /> : ""}
                </StyledHelpMessage>
            )}
            {isInvalid && errorMessage && (
                <Message
                    id="errorMessage"
                    text={errorMessage.text}
                    type={errorMessage.type}
                />
            )}
        </StyledInputWrapper>
    )
}
