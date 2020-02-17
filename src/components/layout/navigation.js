import React from "react"

export default function Navigation() {
    return (
        <nav className="nav">
            <div className="nav__logo">
                <span className="nav__logo-text">Lu-Vuong Le</span>
            </div>
            <ul className="nav__list">
                <li className="nav__item">About</li>
                <li className="nav__item">Experience</li>
                <li className="nav__item">Work</li>
                <li className="nav__item">Contact</li>
                <li className="nav__item">Resume</li>
            </ul>
        </nav>
    )
}
