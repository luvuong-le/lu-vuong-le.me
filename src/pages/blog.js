import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "@components/layout/Layout"
import SEO from "@components/seo/Seo"
import BlogItem from "@components/blog/BlogItem"
import Fade from "react-reveal/Fade"

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        description
                        tags
                        thumbnail
                    }
                    fields {
                        slug
                        readingTime {
                            text
                        }
                    }
                    excerpt
                }
            }
        }
    }
`

const Section = styled.section`
    background: #f9fafb;
    width: 100%;
    height: 100vh;
    position: relative;
    padding-top: 5rem;

    @media only screen and (max-width: 768px) {
        height: 100%;
    }
`

const Container = styled.div`
    padding: 3rem 10rem;

    @media only screen and (max-width: 768px) {
        padding: 0 3rem;
    }
`

const BlogHeading = styled.h1`
    @media only screen and (max-width: 768px) {
        text-align: center;
        font-size: 3rem;
    }
`

const BlogHeadingBreak = styled.div`
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const BlogItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 4rem 0 0 0;
    grid-gap: 0.5rem;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-content: center;
        padding-bottom: 8rem;
    }
`

const BlogPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home | Lu-Vuong Le" />
            <Fade>
                <Section>
                    <Container>
                        <BlogHeadingBreak className="section__header--break">
                            <BlogHeading className="section__header-text">
                                Blog
                            </BlogHeading>
                        </BlogHeadingBreak>
                        <BlogItemContainer>
                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                <BlogItem key={node.id} post={node} />
                            ))}
                        </BlogItemContainer>
                    </Container>
                </Section>
            </Fade>
        </Layout>
    )
}

export default BlogPage
