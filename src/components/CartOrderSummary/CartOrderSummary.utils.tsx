import React from "react"
import { Link } from "../Link"
import type { PolicieLink } from "./index"
import { useTranslation } from "react-i18next"

const getPolicieLink = (
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

export const getFormattedPoliciesString = (
    links: PolicieLink[],
    callback: (
        e:
            | React.MouseEvent<HTMLLinkElement>
            | React.KeyboardEvent<HTMLLinkElement>,
        linkName: string
    ) => void
) => {
    const { t } = useTranslation()
    const len = links.length

    return (
        <>
            {links.slice(0, len - 1).map((link, index) => {
                return (
                    <span key={link.name}>
                        {getPolicieLink(link, callback)}
                        {index === len - 2 ? "" : ", "}
                    </span>
                )
            })}
            {len > 1 && t("and")}
            {
                <span key={links[len - 1].name}>
                    {getPolicieLink(links[len - 1], callback)}
                </span>
            }
            {"."}
        </>
    )
}
