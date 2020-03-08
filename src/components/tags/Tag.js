import React from "react"
import { css } from "@emotion/core"

export default function Tag({ name, style }) {
    const tagCSS = css`
        background: ${style.background};
        color: ${style.color};
        padding: 0.7rem;
        border-radius: 5px;
        font-family: "SF UI Display Heavy", sans-serif;
        margin: 0.5rem;
    `

    return <div css={tagCSS}>{name}</div>
}
