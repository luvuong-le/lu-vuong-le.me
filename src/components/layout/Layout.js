/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Navigation from "@components/layout/Navigation"
import Overlay from "@components/layout/Overlay"
import PageProgress from "@components/layout/PageProgress"
import SocialDrawer from "@components/social/SocialDrawer"
import ThemeProvider from "@components/theme/ThemeProvider"
import "@styles/main.scss"

const Layout = ({ children }) => {
    useEffect(() => {
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
            section.scrollIntoView({ behavior: "smooth" })
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
                            <PageProgress />
                            <Navigation />
                            <main id="main" className="main">
                                <Overlay name="overlay-main" />
                                {children}
                            </main>
                            <footer></footer>
                            <SocialDrawer />
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
