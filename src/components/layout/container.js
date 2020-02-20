import React from "react"
import { css } from "@emotion/core"

export default function Container({ styles, children }) {
    const containerStyles = css`
        padding: 0 4rem;
        margin: 4rem 0;
    `

    return <div css={containerStyles}>{children}</div>
}
