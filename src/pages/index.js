import React, { useEffect } from "react"

import Layout from "@components/layout/Layout"
import SEO from "@components/seo/Seo"

// Sections
import Landing from "@components/sections/Landing"
import About from "@components/sections/About"
import Projects from "@components/sections/Projects"
import Contact from "@components/sections/Contact"

// Third Party
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
            <Projects />
            <Contact />
        </Layout>
    )
}

export default IndexPage
