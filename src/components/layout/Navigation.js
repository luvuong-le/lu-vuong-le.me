import React from "react"

import Fade from "react-reveal/Fade"

export default function Navigation() {
    return (
        <nav className="nav anim--slideLeft">
            <Fade cascade>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#sectionLanding" className="nav__link">
                            <i className="fas fa-angle-double-right"></i>
                            <span className="link-text nav__logo-text anim--fadeInRight">
                                Lu-Vuong Le
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#sectionAbout" className="nav__link">
                            <i className="fas fa-user"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                About
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#sectionProjects" className="nav__link">
                            <i className="fas fa-code-branch"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Projects
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#sectionContact" className="nav__link">
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
                            download
                        >
                            <i className="fas fa-file"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Resume
                            </span>
                        </a>
                    </li>
                </ul>
            </Fade>
        </nav>
    )
}
