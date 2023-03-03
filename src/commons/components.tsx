import React, {Component, ComponentType} from "react";
export const WithUiTag = (tag: string) => (Component:ComponentType) =>
    React.forwardRef((props: any, ref)=>
        <Component ref={ref} {...props} data-ui={tag}></Component>)