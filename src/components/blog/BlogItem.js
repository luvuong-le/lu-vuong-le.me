import React from "react"
import { Link } from "gatsby"
import LazyLoad from "react-lazyload"
import styled from "@emotion/styled"
import Tag from "@components/tags/Tag"

const PostItemContainer = styled.div`
    background: white;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0 30px 90px rgba(31, 36, 48, 0.08);
        transform: translateY(-5px);
    }
`

const PostItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    font-size: 1.6rem;
    background: #fff;
    cursor: pointer;
`

const PostTitle = styled.span`
    display: block;
    font-size: 2.4rem;
    font-weight: bold;
    color: #000;
    margin: 1rem 0;
`

const PostDate = styled.span`
    display: block;
    margin: 0 0 1rem 0;
    color: #bbb;
`

const PostContent = styled.p`
    margin: 2rem 0;
    color: grey;
`

const PostTags = styled.div`
    display: flex;
    flex-flow: row wrap;

    @media only screen and (max-width: 768px) {
        font-size: 1.3rem;
    }
`

const PostImage = styled.img`
    padding: 0;
    margin: 0;
    width: 100%;
`;

function BlogItem({ post }) {
    return (
        <PostItemContainer>
            <Link to={post.fields.slug}>
                <LazyLoad>
                    <PostImage src={post.frontmatter.thumbnail} />
                </LazyLoad>
                <PostItem key={post.id}>
                    <PostDate>
                        {post.frontmatter.date} · {post.fields.readingTime.text}
                    </PostDate>
                    <PostTitle>{post.frontmatter.title} </PostTitle>
                    <PostContent>{post.excerpt}</PostContent>
                    <PostTags>
                        {post.frontmatter.tags &&
                            post.frontmatter.tags.map((tagName, index) => (
                                <Tag
                                    key={index}
                                    name={tagName}
                                    style={{
                                        background: "#1335CC",
                                        color: "#ffffff",
                                    }}
                                />
                            ))}
                    </PostTags>
                </PostItem>
            </Link>
        </PostItemContainer>
    )
}

export default BlogItem
