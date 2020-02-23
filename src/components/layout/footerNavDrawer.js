import React from "react"
import { css } from "@emotion/core"

import IconSocialShare from "@assets/icons/iconmonstr-share-4.svg"

export default function FooterNavDrawer() {
    const toggleBtn = React.createRef();
    const drawerParent  = React.createRef();
    const drawerEl = React.createRef();

    const footerDrawerStyles = css`
        position: fixed;
        bottom: 2rem;
        right: 2rem;
    `;

    const toggleDrawer = function () {
        if (drawerEl.current.style.maxHeight) {
            drawerEl.current.style.maxHeight = null;
            drawerEl.current.dataset.toggle = 'hidden';
        } else {
            drawerEl.current.style.maxHeight = drawerEl.current.scrollHeight + "px";
            drawerEl.current.dataset.toggle = 'visible';
        }
    };

    return (
        <div css={footerDrawerStyles} className="drawer" ref={drawerParent}>
            <ul className="drawer__content" data-toggle='visible' ref={drawerEl}>
                <li><img src={IconSocialShare} alt="Social" /></li>
                <li><img src={IconSocialShare} alt="Social" /></li>
                <li><img src={IconSocialShare} alt="Social" /></li>
            </ul>
            <div className="drawer__toggle" onClick={toggleDrawer}>
                <img src={IconSocialShare} ref={toggleBtn} alt="Social" />
            </div>
        </div>
    )
}
