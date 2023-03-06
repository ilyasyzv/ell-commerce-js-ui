import React from "react"
import { useRef } from "react"
import styled from "styled-components"
import { useBreakpoints } from "../../commons/hooks"

enum EnumStyledDivBreakPoints {
    small = 200,
    mdeium = 500,
    large = 700,
}

interface StyledDivProps {
    readonly breakpoint: EnumStyledDivBreakPoints | undefined
}

const StyledChildDiv = styled.div`
    width: 150px;
    height: 150px;
    background-color: sienna;
`

const StyledDiv = styled.div<StyledDivProps>`
    width: 100%;
    height: 200px;
    background-color: gold;

    ${(props) => {
        switch (props.breakpoint) {
            case EnumStyledDivBreakPoints.small: {
                return `background-color: green;`
            }
            case EnumStyledDivBreakPoints.mdeium: {
                return `background-color: red;`
            }
            case EnumStyledDivBreakPoints.large: {
                return `background-color: yellow;`
            }
        }
    }}

    .child-div {
        ${(props) => {
            switch (props.breakpoint) {
                case EnumStyledDivBreakPoints.small: {
                    return `background-color: black;`
                }
            }
        }}
    }
`

export const Container = () => {
    const ref = useRef(null)
    const breakpoint = useBreakpoints<EnumStyledDivBreakPoints>(ref, [
        EnumStyledDivBreakPoints.small,
        EnumStyledDivBreakPoints.mdeium,
        EnumStyledDivBreakPoints.large,
    ])
    console.log(breakpoint, "BreakPoint")
    return (
        <StyledDiv ref={ref} breakpoint={breakpoint}>
            <StyledChildDiv className={"child-div"}></StyledChildDiv>
        </StyledDiv>
    )
}
