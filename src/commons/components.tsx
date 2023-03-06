import React, { ComponentType } from "react"
const WithUiTag = (tag: string) => {
    const func = (Component: ComponentType) =>
        React.forwardRef((props: any, ref) => (
            <Component ref={ref} {...props} data-ui={tag}></Component>
        ))
    func.displayName = "WithUiTag"
    return func
}
export default WithUiTag
