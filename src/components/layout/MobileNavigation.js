import React from "react"

export default function MobileNavigation() {
    const sidebarNav = React.createRef()
    const navHamburger = React.createRef()

    const toggleSideNavbar = () => {
        if (sidebarNav.current.dataset.visibility === "hidden") {
            sidebarNav.current.style.width = "100%"
            sidebarNav.current.dataset.visibility = "visible"
            document.body.style.overflow = "hidden"
            navHamburger.current.classList.add("nav__hamburger--close")
        } else {
            sidebarNav.current.style.width = "0"
            sidebarNav.current.dataset.visibility = "hidden"
            document.body.style.overflow = "visible"
            navHamburger.current.classList.remove("nav__hamburger--close")
        }
    }

    return (
        <nav className="nav nav--mobile">
            <div className="nav__logo anim--fadeInRight">
                <a href="#sectionLanding">
                    <span className="nav__logo-text">Lu-Vuong Le</span>
                </a>
            </div>
            <div
                className="nav__hamburger"
                onClick={toggleSideNavbar}
                onKeyDown={toggleSideNavbar}
                role="button"
                tabIndex="0"
                ref={navHamburger}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div
                className="nav__sidebar"
                data-visibility="hidden"
                ref={sidebarNav}
            >
                <ul className="nav__list nav__list--sidebar">
                    <li className="nav__item nav__item--sidebar">
                        <a href="#sectionAbout">About</a>
                    </li>
                    <li className="nav__item nav__item--sidebar">
                        <a href="#sectionProjects">Work</a>
                    </li>
                    <li className="nav__item nav__item--sidebar">
                        <a href="#sectionContact">Get In Touch</a>
                    </li>
                    <li className="nav__item nav__item--sidebar">
                        <a href={"#"} download>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
