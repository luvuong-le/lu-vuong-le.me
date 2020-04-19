import React from "react"

import Fade from "react-reveal/Fade"

export default function Navigation() {
    return (
        <nav className="nav anim--slideLeft">
            <Fade cascade>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="/" className="nav__link" data-tooltip="Home">
                            <i className="fas fa-angle-double-right"></i>
                            <span className="link-text nav__logo-text anim--fadeInRight">
                                Lu-Vuong Le
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="/#about"
                            className="nav__link"
                            data-tooltip="About"
                        >
                            <i className="fas fa-user"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                About
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="/blog"
                            className="nav__link"
                            data-tooltip="Blog"
                        >
                            <i className="fas fa-blog"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Blog
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="/#featured"
                            className="nav__link"
                            data-tooltip="Featured Projects"
                        >
                            <i className="fas fa-code-branch"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Featured Projects
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="/#projects"
                            className="nav__link"
                            data-tooltip="Other Projects"
                        >
                            <i className="fas fa-folder-open"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Other Projects
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="/#contact"
                            className="nav__link"
                            data-tooltip="Contact"
                        >
                            <i className="fas fa-phone"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Contact
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            className="nav__link"
                            href={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/docs/Resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-tooltip="Resume"
                            download
                        >
                            <i className="fas fa-file"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Resume
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="/archive"
                            className="nav__link"
                            data-tooltip="Dev Archive"
                        >
                            <i className="fas fa-archive"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Dev Archive
                            </span>
                        </a>
                    </li>
                </ul>
            </Fade>
        </nav>
    )
}
