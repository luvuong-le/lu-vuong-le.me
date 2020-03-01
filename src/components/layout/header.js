import PropTypes from "prop-types"
import React from "react"

import Navigation from "@components/layout/Navigation"
import MobileNavigation from "@components/layout/MobileNavigation"

const Header = ({ siteTitle }) => (
    <header>
        <Navigation />
        <MobileNavigation />
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
