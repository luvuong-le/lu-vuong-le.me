import React from "react"
import { css } from "@emotion/core"

export default function Container({ styles, children }) {
    const containerStyles = css`
        padding: 0 4rem;
        margin: 4rem 0;

        @media only screen and (min-width: 64em) {
            padding: 3rem 10rem;
        }
    `

    return (
        <div className="container" css={containerStyles}>
            {children}
        </div>
    )
}
