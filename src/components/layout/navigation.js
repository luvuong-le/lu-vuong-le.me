import React from "react"
import ResumePDF from "@assets/docs/Resume.pdf"

export default function Navigation() {
    return (
        <nav className="nav">
            <div className="nav__logo anim--fadeInRight">
                <span className="nav__logo-text">Lu-Vuong Le</span>
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
                    <a href={ResumePDF} download>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}
