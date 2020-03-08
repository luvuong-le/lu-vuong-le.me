/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "@components/layout/Navigation"
import PageProgress from "@components/layout/PageProgress"
import SocialDrawer from "@components/social/SocialDrawer"
import ThemeSelector from "@components/theme/ThemeSelector"
import ThemeProvider from "@components/theme/ThemeProvider"
import "@styles/main.scss"

const Layout = ({ children }) => {
    console.log(process.env.CLOUDFRONT_CDN_URL)

    useEffect(() => {
        /** Bring in Smooth Scroll Library */
        if (typeof window !== "undefined") {
            // eslint-disable-next-line global-require
            require("smooth-scroll")('a[href*="#"]', {
                offset: function(anchor, toggle) {
                    return 0
                },
                updateURL: false,
                emitEvents: true,
            })
        }

        /** Set Scroll Event Listener */
        document.addEventListener("scrollStart", e => {
            document.title =
                e.detail && data
                    ? `${e.detail.anchor.dataset.name} | ${data.site.siteMetadata.title}`
                    : null
        })

        return () => {}
    }, [])

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <ThemeProvider>
                {({ theme }) => {
                    const currentTheme = `theme--${theme}`

                    return (
                        <div className={`theme ${currentTheme}`}>
                            <PageProgress />
                            <Navigation />
                            <main id="main" className="main">
                                {children}
                            </main>
                            <footer></footer>
                            <SocialDrawer />
                            <ThemeSelector />
                        </div>
                    )
                }}
            </ThemeProvider>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
