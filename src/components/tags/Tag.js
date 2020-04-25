import React from "react"
import { css } from "@emotion/core"

export default function Tag({ name, style }) {
    const tagCSS = css`
        background: ${style.background};
        color: ${style.color};
        padding: 0.7rem;
        border-radius: ${style.borderRadius ? style.borderRadius : "5px"};
        font-family: "SF UI Display Heavy", sans-serif;
        margin: 0.5rem 0.5rem 0.5rem 0;
        border: ${style.border};
        font-weight: ${style.fontWeight};
    `

    return <div css={tagCSS}>{name}</div>
}
