import React from "react"
import { Link } from "gatsby"

import Layout from "@components/layout/layout"
import Image from "@components/image/image"
import SEO from "@components/seo/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <section
            id="sectionLanding"
            className="section section__landing"
        ></section>
    </Layout>
)

export default IndexPage
