import React from "react"
import Container from "@components/layout/Container"

import LandingImage from "@assets/images/undraw-coding.svg"
import ResumePDF from "@assets/docs/Resume.pdf"

export default function Landing({ typedEl }) {
    return (
        <section
            id="sectionLanding"
            className="section section--primary-blue section__landing"
        >
            <Container>
                <div className="landing">
                    <div className="landing__header">
                        <h2 className="anim--fadeInDown">
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
                            <span className="fsize-m fweight-b color--white">
                                {"> "}
                            </span>
                            <span className=" fsize-m" ref={typedEl}></span>
                        </div>
                    </div>
                    <div className="landing__body">
                        <div className="flex">
                            <div className="flex flex-column">
                                <p>
                                    Software Engineer with a sound understanding
                                    of the SDLC, skilled in designing and
                                    building stable web based technical
                                    solutions to solve business problems
                                </p>
                                <a
                                    href="#sectionContact"
                                    className="btn btn--primary btn--block margin-t-md"
                                >
                                    Get In Touch!
                                </a>
                            </div>
                            <div className="flex flex-column margin-l-md">
                                <p>
                                    Passionate about creating software solutions
                                    in the modern web space and learning about
                                    new technologies
                                </p>
                                <a
                                    href={ResumePDF}
                                    className="btn btn--primary btn--block margin-t-md"
                                    download
                                >
                                    View My Resume
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
