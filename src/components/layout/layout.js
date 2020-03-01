/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "@components/layout/Header"
import SocialDrawer from "@components/social/SocialDrawer"
import ThemeSelector from "@components/theme/ThemeSelector"
import "@styles/main.scss"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    /** Bring in Smooth Scroll Library */
    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]', {
            offset: function(anchor, toggle) {
                return 85
            },
        })
    }

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main id="main">{children}</main>
                <footer></footer>
                <SocialDrawer />
                <ThemeSelector />
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
