import React from "react"
import { css } from "@emotion/core"

import IconSocialShare from "@assets/icons/iconmonstr-share-4.svg"
import LinkedInIcon from "@assets/icons/iconmonstr-linkedin-1.svg"
import TwitterIcon from "@assets/icons/iconmonstr-twitter-1.svg"
import GithubIcon from "@assets/icons/iconmonstr-github-1.svg"

export default function FooterNavDrawer() {
    const toggleBtn = React.createRef()
    const drawerParent = React.createRef()
    const drawerEl = React.createRef()

    const footerDrawerStyles = css`
        position: fixed;
        bottom: 2rem;
        right: 2rem;
    `

    const toggleDrawer = function() {
        if (drawerEl.current.style.maxHeight) {
            drawerEl.current.style.maxHeight = null
            drawerEl.current.dataset.toggle = "hidden"
        } else {
            drawerEl.current.style.maxHeight =
                drawerEl.current.scrollHeight + "px"
            drawerEl.current.dataset.toggle = "visible"
        }
    }

    return (
        <div css={footerDrawerStyles} className="drawer" ref={drawerParent}>
            <ul
                className="drawer__content"
                data-toggle="visible"
                ref={drawerEl}
            >
                <li>
                    <img src={LinkedInIcon} alt="Social" />
                </li>
                <li>
                    <img src={TwitterIcon} alt="Social" />
                </li>
                <li>
                    <img src={GithubIcon} alt="Social" />
                </li>
            </ul>
            <div
                className="drawer__toggle"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
                role="button"
                tabIndex="0"
            >
                <img src={IconSocialShare} ref={toggleBtn} alt="Social" />
            </div>
        </div>
    )
}
