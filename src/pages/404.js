import React from "react"
import LazyLoad from "react-lazyload"
import Fade from "react-reveal/Fade"
import styled from "@emotion/styled"

import Layout from "@components/layout/Layout"
import SEO from "@components/seo/Seo"

const Container = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3rem;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const ErrorHeading = styled.h1`
    background: #13315c;
    padding: 1rem;
    color: #ffffff;
    text-align: center;
    margin: 1rem 0;
    font-weight: bold;
`

const Img = styled.img`
    width: 100%;
`

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Container>
            <ErrorHeading>
                Oops! What you're looking for doesn't exist...
            </ErrorHeading>
            <LazyLoad>
                <Fade>
                    <Img
                        src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/images/undraw_hacker_mindset.svg`}
                        alt="Undraw 404"
                    />
                </Fade>
            </LazyLoad>
        </Container>
    </Layout>
)

export default NotFoundPage
