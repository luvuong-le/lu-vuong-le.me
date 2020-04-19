import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "@components/layout/Layout"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
            }
        }
    }
`

const Section = styled.section`
    background: #f9fafb;
    width: 100%;
    height: 100vh;
    position: relative;
`

const PostContainer = styled.div`
    width: 80%;
    padding: 3rem 10rem;
    background: #fff;
    margin: 0 auto;
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.6rem;
`

const PostTitle = styled.span`
    display: block;
    font-size: 2.4rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 2rem;
`

const PostDate = styled.span`
    display: block;
    margin: 0 0 1rem 0;
    color: #bbb;
`

export default ({ data }) => {
    const post = data.markdownRemark
    console.log(post)
    return (
        <Layout>
            <Section className="section section__singlepost">
                <PostContainer>
                    <PostTitle>{post.frontmatter.title}</PostTitle>
                    <PostDate>{post.frontmatter.date}</PostDate>
                    {/* TODO: Add User Details - Name - Socials */}
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </PostContainer>
            </Section>
        </Layout>
    )
}
