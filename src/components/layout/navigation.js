import React from "react"

export default function Navigation() {
    return (
        <nav className="nav">
            <div className="nav__logo anim--fadeInRight">
                <a href="#sectionLanding">
                    <span className="nav__logo-text">Lu-Vuong Le</span>
                </a>
            </div>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#sectionAbout">About</a>
                </li>
                <li className="nav__item">
                    <a href="#sectionProjects">Work</a>
                </li>
                <li className="nav__item">
                    <a href="#sectionContact">Contact</a>
                </li>
                <li className="nav__item btn btn--primary">
                    <a className="color--white" href={""} download>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}
