import React, { useEffect } from "react"

import Layout from "@components/layout/layout"
import SEO from "@components/seo/seo"

// Sections
import Landing from "@sections/landing"
import About from "@sections/about"

import Typed from "typed.js"

const IndexPage = () => {
    const typedEl = React.createRef()

    useEffect(() => {
        const typedJSOptions = {
            strings: ["Software Engineer.", "Mentor.", "Designer."],
            typeSpeed: 100,
            loop: true,
        }

        let typed = new Typed(typedEl.current, typedJSOptions)

        return () => {
            typed.destroy()
        }
    }, [typedEl])

    return (
        <Layout>
            <SEO title="Home" />

            {/* Sections */}
            <Landing typedEl={typedEl} />
            <About />
        </Layout>
    )
}

export default IndexPage
