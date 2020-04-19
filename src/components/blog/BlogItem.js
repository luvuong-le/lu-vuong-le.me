import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const PostItemContainer = styled.div``

const PostItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    font-size: 1.6rem;
    background: #fff;
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0 30px 90px rgba(31, 36, 48, 0.08);
        transform: translateY(-5px);
    }
`

const PostTitle = styled.span`
    display: block;
    font-size: 2.4rem;
    font-weight: bold;
    color: #000;
`

const PostDate = styled.span`
    display: block;
    margin: 0 0 1rem 0;
    color: #bbb;
`

const PostContent = styled.p`
    margin: 1rem 0;
    color: grey;
`

function BlogItem({ post }) {
    return (
        <PostItemContainer>
            <Link to={post.fields.slug}>
                <PostItem key={post.id}>
                    <PostDate>{post.frontmatter.date}</PostDate>
                    <PostTitle>{post.frontmatter.title} </PostTitle>
                    <PostContent>{post.excerpt}</PostContent>
                </PostItem>
            </Link>
        </PostItemContainer>
    )
}

export default BlogItem
