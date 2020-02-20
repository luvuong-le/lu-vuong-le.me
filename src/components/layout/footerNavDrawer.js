import React from "react"
import { css } from "@emotion/core"

import IconSocialShare from "@assets/icons/iconmonstr-share-4.svg"

export default function FooterNavDrawer() {
    const footerDrawerStyles = css`
        position: fixed;
        bottom: 2rem;
        right: 2rem;
    `

    return (
        <div css={footerDrawerStyles} className="drawer">
            <div className="drawer__toggle">
                <img src={IconSocialShare} alt="Social" />
            </div>
            <div className="drawer__content"></div>
        </div>
    )
}
