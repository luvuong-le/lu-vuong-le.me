/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Navigation from "@components/layout/Navigation"
import PageProgress from "@components/layout/PageProgress"
import WebsiteStatus from "@components/layout/WebsiteStatus"
import SocialDrawer from "@components/social/SocialDrawer"
import ThemeSelector from "@components/theme/ThemeSelector"
import ThemeProvider from "@components/theme/ThemeProvider"
import "@styles/main.scss"

const Layout = ({ children }) => {
    useEffect(() => {
        /** Bring in Smooth Scroll Library */
        if (typeof window !== "undefined") {
            // eslint-disable-next-line global-require
            require("smooth-scroll")('a[href*="#"]', {
                offset: function(anchor, toggle) {
                    return 0
                },
                updateURL: true,
                emitEvents: true,
            })
        }

        /** Set Scroll Event Listener */
        document.addEventListener("scrollStart", e => {
            document.title = e.detail
                ? `${e.detail.anchor.dataset.name} | Lu-Vuong Le`
                : null
        })

        /** Scroll to Anchor Section if any */
        const hash = window.location.hash

        if (hash) {
            const section = document.getElementById(hash.replace("#", ""))
            section.scrollIntoView()
        }

        return () => {}
    }, [])

    return (
        <>
            <ThemeProvider>
                {({ theme }) => {
                    const currentTheme = `theme--${theme}`

                    return (
                        <div className={`theme ${currentTheme}`}>
                            {/* <WebsiteStatus status="Important Notice: ✨ Website Build in Progress! ✨" /> */}
                            <PageProgress />
                            <Navigation />
                            <main id="main" className="main">
                                {children}
                            </main>
                            <footer></footer>
                            <SocialDrawer />
                            {/* <ThemeSelector /> */}
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
