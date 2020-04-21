import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
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
`

const Container = styled.div`
    padding: 3rem 10rem;
`

const BlogItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 4rem 0 0 0;
    grid-gap: 0.5rem;
`

const BlogPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home | Lu-Vuong Le" />
            <Fade>
                <Section id="sectionBlog" className="section section__blog">
                    <Container>
                        <div className="full-width">
                            <div className="section__header--break">
                                <div>
                                    <h1 className="section__header-text">
                                        Blog
                                    </h1>
                                </div>
                            </div>
                            <h4 className="fsize-sm">
                                {data.allMarkdownRemark.totalCount} Posts
                            </h4>
                            <BlogItemContainer>
                                {data.allMarkdownRemark.edges.map(
                                    ({ node }) => (
                                        <BlogItem key={node.id} post={node} />
                                    )
                                )}
                            </BlogItemContainer>
                        </div>
                    </Container>
                </Section>
            </Fade>
        </Layout>
    )
}

export default BlogPage
