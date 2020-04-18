import React, { useEffect } from "react"

import Layout from "@components/layout/Layout"
import SEO from "@components/seo/Seo"

// Sections
import Landing from "@components/sections/Landing"
import About from "@components/sections/About"
import FeaturedProjects from "@components/sections/FeaturedProjects"
import OtherProjects from "@components/sections/OtherProjects"
import Contact from "@components/sections/Contact"

// Third Party
import Typed from "typed.js"

const IndexPage = () => {
    const typedEl = React.createRef()

    useEffect(() => {
        const typedJSOptions = {
            strings: ["SW Engineer.", "Mentor.", "Designer."],
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
            <SEO title="Home | Lu-Vuong Le" />
            <Landing typedEl={typedEl} />
            <About />
            <FeaturedProjects />
            <OtherProjects />
            <Contact />
        </Layout>
    )
}

export default IndexPage
