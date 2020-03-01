import React from "react"
import Container from "@components/layout/Container"

import LandingImage from "@assets/images/undraw-coding.svg"

export default function Landing({ typedEl }) {
    return (
        <section
            id="sectionLanding"
            className="section section__landing section--light"
        >
            <Container>
                <div className="landing">
                    <div className="landing__body">
                        <div className="landing__content">
                            <h2 className="margin-b-sm anim--fadeInDown">
                                Welcome!{" "}
                                <span
                                    className="anim anim--wave margin-l-sm"
                                    role="img"
                                    aria-label="jsx-a11y/accessible-emoji"
                                >
                                    👋
                                </span>
                            </h2>
                            <h1 className="margin-t-sm anim--fadeInDown">
                                <span className="anim--hover-rotate fsize-l">
                                    I
                                </span>
                                <span className="anim--hover-rotate fsize-l">
                                    '
                                </span>
                                <span className="anim--hover-rotate fsize-l">
                                    m
                                </span>{" "}
                                <span className="anim--hover-rotate fsize-l">
                                    L
                                </span>
                                <span className="anim--hover-rotate fsize-l">
                                    u
                                </span>
                                <span className="anim--hover-rotate fsize-l">
                                    -
                                </span>
                                <span className="anim--hover-rotate fsize-l">
                                    V
                                </span>
                                <span className="anim--hover-rotate fsize-l">
                                    u
                                </span>
                                <span className="anim--hover-rotate fsize-l">
                                    o
                                </span>
                                <span className="anim--hover-rotate fsize-l">
                                    n
                                </span>
                                <span className="anim--hover-rotate fsize-l">
                                    g
                                </span>
                            </h1>
                            <div className="typed margin-t-sm anim--fadeInDown">
                                <span className="fsize-m fweight-b">
                                    {"> "}
                                </span>
                                <span className="fsize-l" ref={typedEl}></span>
                            </div>
                            <div className="flex margin-t-md">
                                <div className="flex flex-column">
                                    <p className="landing__text fweight-b">
                                        Software Engineer with a sound
                                        understanding of the SDLC, skilled in
                                        designing and building stable web based
                                        technical solutions to solve business
                                        problems
                                    </p>
                                </div>
                                <div className="flex flex-column margin-l-md">
                                    <p className="landing__text fweight-b">
                                        Passionate about creating software
                                        solutions in the modern web space and
                                        learning about new technologies
                                    </p>
                                </div>
                            </div>
                            <div className="landing__cta">
                                <a
                                    href="#sectionContact"
                                    className="btn btn--primary btn--block"
                                >
                                    Get In Touch!
                                </a>
                                <a
                                    href="#sectionContact"
                                    className="btn btn--primary btn--block margin-l-md"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                        <div className="landing__img">
                            <img src={LandingImage} alt="Undraw Coding" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
