import PropTypes from "prop-types"
import React from "react"

import Navigation from '@components/layout/navigation';
import MobileNavigation from '@components/layout/mobileNavigation';

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
