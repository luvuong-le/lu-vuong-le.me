import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

export default function Navigation() {
    const navigateTo = e => {
        if (window.location.pathname === "/") {
            e.preventDefault()

            const scrollToElement = document.getElementById(
                e.currentTarget.dataset.smoothScroll
            )

            scrollToElement.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav className="nav anim--slideLeft">
            <Fade cascade>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link
                            to="/"
                            className="nav__link"
                            data-tooltip="Home"
                            data-smooth-scroll="landing"
                            onClick={navigateTo}
                        >
                            <i className="fas fa-angle-double-right"></i>
                            <span className="link-text nav__logo-text anim--fadeInRight">
                                Lu-Vuong Le
                            </span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/#about"
                            className="nav__link"
                            data-tooltip="About"
                            data-smooth-scroll="about"
                            onClick={navigateTo}
                        >
                            <i className="fas fa-user"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                About
                            </span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/blog"
                            className="nav__link"
                            data-tooltip="Blog"
                        >
                            <i className="fas fa-blog"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Blog
                            </span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/#featured"
                            className="nav__link"
                            data-tooltip="Featured"
                            data-smooth-scroll="featured"
                            onClick={navigateTo}
                        >
                            <i className="fas fa-code-branch"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Featured Projects
                            </span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/#projects"
                            className="nav__link"
                            data-tooltip="Other"
                            data-smooth-scroll="projects"
                            onClick={navigateTo}
                        >
                            <i className="fas fa-folder-open"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Other Projects
                            </span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/#contact"
                            className="nav__link"
                            data-tooltip="Contact"
                            data-smooth-scroll="contact"
                            onClick={navigateTo}
                        >
                            <i className="fas fa-phone"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Contact
                            </span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <a
                            href={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/docs/Resume.pdf`}
                            className="nav__link"
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
                        <Link
                            to="/archive"
                            className="nav__link"
                            data-tooltip="Archive"
                        >
                            <i className="fas fa-archive"></i>
                            <span className="nav__link-text anim--fadeInRight">
                                Dev Archive
                            </span>
                        </Link>
                    </li>
                </ul>
            </Fade>
        </nav>
    )
}
