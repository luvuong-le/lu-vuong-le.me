import React from "react"
import { graphql } from "gatsby"
import LazyLoad from "react-lazyload"
import styled from "@emotion/styled"
import Layout from "@components/layout/Layout"
import Tag from "@components/tags/Tag"
import { CategoryColorMapping } from "@components/blog/BlogCategoryMapping"

import Fade from "react-reveal/Fade"

export const query = graphql`
    query($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
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
    padding-bottom: 5rem;

    @media only screen and (max-width: 768px) {
        padding-bottom: 10rem;
    }
`

const PostContainer = styled.div`
    width: 80%;
    padding: 3rem 10rem;
    background: #fff;
    box-shadow: 3px 3px 30px rgba(31, 36, 48, 0.08);
    margin: 0 auto;
    font-size: 1.6rem;

    @media only screen and (max-width: 768px) {
        width: 90%;
        padding: 3rem;
    }
`

const PostTitle = styled.span`
    display: block;
    font-size: 3.5rem;
    font-weight: bold;
    color: #000;
    margin-top: 4rem;
    margin-bottom: 2rem;

    @media only screen and (max-width: 768px) {
        margin-top: 2rem;
        font-size: 2.5rem;
    }
`

const PostDate = styled.span`
    display: block;
    margin: 0 0 1rem 0;
    color: #bbb;
`

const PostTags = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 1rem;

    @media only screen and (max-width: 768px) {
        font-size: 1.3rem;
    }
`

const PostImage = styled.img`
    padding: 0;
    margin: 0;
    width: 100%;
`

const PostAuthor = styled.div`
    display: flex;
    margin: 4rem 0;
`

const PostAuthorDetails = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const PostProfilePic = styled.img`
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
`

const PostSocialLinkWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    align-content: flex-end;
    margin: 5px 0;
`

const PostSocialLink = styled.span`
    margin-right: 10px;
    margin-top: 5px;
    color: #aaa;
`

const PostSocialProfile = styled.div`
    display: flex;
    align-content: center;
`

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Fade>
                <Section>
                    <PostContainer className="post post__container">
                        <PostTitle>{post.frontmatter.title}</PostTitle>
                        <PostDate>
                            {post.frontmatter.date} ·{" "}
                            {post.fields.readingTime.text}
                        </PostDate>
                        <PostTags>
                            {post.frontmatter.tags &&
                                post.frontmatter.tags.map((tagName, index) => (
                                    <Tag
                                        key={index}
                                        name={tagName}
                                        style={{
                                            background: `${CategoryColorMapping[tagName]}`,
                                            color: "#2479EC",
                                            borderRadius: "0",
                                            fontWeight: "normal",
                                        }}
                                    />
                                ))}
                        </PostTags>
                        <PostAuthor>
                            <PostSocialProfile>
                                <PostProfilePic
                                    src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/images/profile.jpg`}
                                />
                            </PostSocialProfile>
                            <PostAuthorDetails>
                                <span>{data.site.siteMetadata.title}</span>
                                <PostSocialLinkWrapper>
                                    <a
                                        href="https://www.linkedin.com/in/lu-vuongle/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <PostSocialLink>
                                            LinkedIn
                                        </PostSocialLink>
                                    </a>
                                    <a
                                        href="https://twitter.com/luvuongle"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <PostSocialLink>Twitter</PostSocialLink>
                                    </a>
                                    <a
                                        href="https://github.com/luvuong-le"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <PostSocialLink>Github</PostSocialLink>
                                    </a>
                                </PostSocialLinkWrapper>
                            </PostAuthorDetails>
                        </PostAuthor>
                        <LazyLoad>
                            <PostImage src={post.frontmatter.thumbnail} />
                        </LazyLoad>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </PostContainer>
                </Section>
            </Fade>
        </Layout>
    )
}
