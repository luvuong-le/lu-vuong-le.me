import React from "react"
import Container from "@components/layout/Container"

import SEO from "@components/seo/Seo"

import Fade from "react-reveal/Fade"

export default function Landing({ typedEl }) {
    return (
        <section
            id="sectionLanding"
            className="section section__landing section--light"
            data-name="Landing"
        >
            <SEO title="Landing" />
            <Container>
                <div className="landing">
                    <div className="landing__body">
                        <div className="landing__content">
                            <Fade top cascade>
                                <h2 className="margin-b-sm anim--fadeInDown">
                                    {"<Hello World />"}
                                </h2>
                            </Fade>
                            <h1 className="margin-t-sm anim--fadeInDown">
                                <span className="anim--float-up fsize-l">
                                    I
                                </span>
                                <span className="anim--float-up fsize-l">
                                    '
                                </span>
                                <span className="anim--float-up fsize-l">
                                    m
                                </span>{" "}
                                <span className="anim--float-up fsize-l">
                                    L
                                </span>
                                <span className="anim--float-up fsize-l">
                                    u
                                </span>
                                <span className="anim--float-up fsize-l">
                                    -
                                </span>
                                <span className="anim--float-up fsize-l">
                                    V
                                </span>
                                <span className="anim--float-up fsize-l">
                                    u
                                </span>
                                <span className="anim--float-up fsize-l">
                                    o
                                </span>
                                <span className="anim--float-up fsize-l">
                                    n
                                </span>
                                <span className="anim--float-up fsize-l">
                                    g
                                </span>
                            </h1>
                            <div className="typed margin-t-sm anim--fadeInDown">
                                <span className="fsize-m fweight-b">
                                    {"> "}
                                </span>
                                <span className="fsize-l" ref={typedEl}></span>
                            </div>
                            <div className="flex landing__content-text">
                                <div className="flex flex-column">
                                    <p className="landing__text fweight-b anim--fadeInDown">
                                        Software Engineer with a sound
                                        understanding of the SDLC, skilled in
                                        designing and building stable web based
                                        technical solutions to solve business
                                        problems
                                    </p>
                                </div>
                                <div className="flex flex-column margin-l-md">
                                    <p className="landing__text fweight-b anim--fadeInDown">
                                        Passionate about creating software
                                        solutions in the modern web space and
                                        learning about new technologies
                                    </p>
                                </div>
                            </div>
                            <div className="landing__cta anim--fadeInDown">
                                <a
                                    href="#contact"
                                    className="btn btn--primary btn--block"
                                >
                                    <i className="fas fa-at"></i>
                                    <span className="margin-l-sm">Contact</span>
                                </a>
                                <a
                                    href={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/docs/Resume.pdf`}
                                    className="btn btn--primary btn--block margin-l-md"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                >
                                    <i className="fas fa-file"></i>
                                    <span className="margin-l-sm">Resume</span>
                                </a>
                            </div>
                        </div>
                        <div className="landing__img anim--fadeInRight">
                            <img
                                src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/images/undraw-coding.svg`}
                                alt="Undraw Coding"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
