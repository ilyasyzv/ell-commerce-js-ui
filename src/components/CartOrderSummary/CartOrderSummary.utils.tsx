import React from "react"
import { Link } from "../Link"
import type { PolicieLink } from "./index"

export const getPolicieLink = (
    link: PolicieLink,
    callback?: (
        e:
            | React.MouseEvent<HTMLLinkElement>
            | React.KeyboardEvent<HTMLLinkElement>,
        linkName: string
    ) => void
) => {
    const { name, url } = link

    return callback ? (
        <Link href={"#"} onClick={(e) => callback(e, name)}>
            {name}
        </Link>
    ) : (
        <Link href={url} target="_blank" rel="noopener noreferrer">
            {name}
        </Link>
    )
}
