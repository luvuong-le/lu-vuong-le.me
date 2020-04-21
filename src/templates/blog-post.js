import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "@components/layout/Layout"

import Fade from "react-reveal/Fade"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                description
                tags
                thumbnail
            }
            fields {
                readingTime {
                    text
                }
            }
        }
    }
`

const Section = styled.section`
    background: #f9fafb;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 5rem;
`

const PostContainer = styled.div`
    width: 80%;
    padding: 3rem 10rem;
    background: #fff;
    box-shadow: 3px 3px 30px rgba(31, 36, 48, 0.08);
    margin: 0 auto;
    font-size: 1.6rem;
`

const PostTitle = styled.span`
    display: block;
    font-size: 3.5rem;
    font-weight: bold;
    color: #000;
    margin-top: 4rem;
    margin-bottom: 2rem;
`

const PostDate = styled.span`
    display: block;
    margin: 0 0 4rem 0;
    color: #bbb;
`

export default ({ data }) => {
    const post = data.markdownRemark
    console.log(post)
    return (
        <Layout>
            <Fade>
                <Section>
                    <PostContainer className="post post__container">
                        <PostTitle>{post.frontmatter.title}</PostTitle>
                        <PostDate>
                            {post.frontmatter.date} -{" "}
                            {post.fields.readingTime.text}
                        </PostDate>
                        {/* TODO: Add User Details - Name - Socials */}
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </PostContainer>
                </Section>
            </Fade>
        </Layout>
    )
}
