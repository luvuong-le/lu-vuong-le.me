import React from "react"
import { css } from "@emotion/core"

export default function Container({ style, children }) {
    const containerStyles = css`
        padding: ${style ? style.padding : "1rem 4rem"};
        margin-top: 4rem;
        display: flex;
        align-items: center;

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
