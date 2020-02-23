import React from "react"

export default function MobileNavigation() {
    const sidebarNav = React.createRef();
    const navHamburger = React.createRef();

    const toggleSideNavbar = () => {
        if (sidebarNav.current.dataset.visibility === "hidden") {
            sidebarNav.current.style.width = "100%";
            sidebarNav.current.dataset.visibility = "visible";
            navHamburger.current.classList.add("nav__hamburger--close")
        } else {
            sidebarNav.current.style.width = "0";
            sidebarNav.current.dataset.visibility = "hidden";
            navHamburger.current.classList.remove("nav__hamburger--close")
        }
    };

    return (
        <nav className="nav nav--mobile">
            <div className="nav__logo">
                <span className="nav__logo-text">Lu-Vuong Le</span>
            </div>
            <div className="nav__hamburger" onClick={toggleSideNavbar} ref={navHamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nav__sidebar" data-visibility="hidden" ref={sidebarNav}>
                <ul className="nav__list nav__list--sidebar">
                    <li className="nav__item nav__item--sidebar">About</li>
                    <li className="nav__item nav__item--sidebar">Experience</li>
                    <li className="nav__item nav__item--sidebar">Work</li>
                    <li className="nav__item nav__item--sidebar">Contact</li>
                    <li className="nav__item nav__item--sidebar">Resume</li>
                </ul>
            </div>
        </nav>
    )
}
