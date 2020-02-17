import React from 'react'

export default function MobileNavigation() {
    return (
        <nav className="nav nav--mobile">
            <div className="nav__logo">
                <span className="nav__logo-text">Lu-Vuong Le</span>
            </div>
            <div className="nav__hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nav__sidebar">
                {/* TODO: Need A Close Button Here */}
                <ul className="nav__list nav__list--sidebar">
                    <li className="nav__item">About</li>
                    <li className="nav__item">Experience</li>
                    <li className="nav__item">Work</li>
                    <li className="nav__item">Contact</li>
                    <li className="nav__item">Resume</li>
                </ul>
            </div>
        </nav>
    )
}