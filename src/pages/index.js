import React, { useEffect } from "react"

import Layout from "@components/layout/layout"
import Container from "@components/layout/container"
import SEO from "@components/seo/seo"

import LandingImage from "@assets/images/undraw-coding.svg"
import MentorSVG from "@assets/images/undraw_professor_8lrt.svg"
import DesignerSVG from "@assets/images/undraw_trendy_interface_lg8x.svg"

import Typed from "typed.js"

const IndexPage = () => {
    const typedEl = React.createRef()

    useEffect(() => {
        const typedJSOptions = {
            strings: ["Software Engineer.", "Mentor.", "Designer."],
            typeSpeed: 100,
            loop: true,
        }

        let typed = new Typed(typedEl.current, typedJSOptions)

        return () => {
            typed.destroy()
        }
    }, [typedEl])

    return (
        <Layout>
            <SEO title="Home" />
            <section
                id="sectionLanding"
                className="section section--primary-blue section__landing"
            >
                <Container>
                    <div className="landing">
                        <div className="landing__header">
                            <h2>
                                Welcome!{" "}
                                <span
                                    className="anim anim--wave margin-l-sm"
                                    role="img"
                                    aria-label="jsx-a11y/accessible-emoji"
                                >
                                    👋
                                </span>
                            </h2>
                            <h1 className="margin-t-sm">
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
                            <div className="typed margin-t-sm">
                                <span className="fsize-m fweight-b color--white">
                                    {"> "}
                                </span>
                                <span
                                    className="color--tertiary fsize-m"
                                    ref={typedEl}
                                ></span>
                            </div>
                        </div>
                        <div className="landing__body">
                            <div className="flex">
                                <div className="flex flex-column">
                                    <p>
                                        Software Engineer with a sound
                                        understanding of the SDLC, skilled in
                                        designing and building stable web based
                                        technical solutions to solve business
                                        problems
                                    </p>
                                    <button className="btn btn--primary btn--block margin-t-md">
                                        Get In Touch!
                                    </button>
                                </div>
                                <div className="flex flex-column margin-l-md">
                                    <p>
                                        Passionate about creating software
                                        solutions in the modern web space and
                                        learning about new technologies
                                    </p>
                                    <button className="btn btn--primary btn--block margin-t-md">
                                        View My Resume
                                    </button>
                                </div>
                            </div>
                            <div className="landing__img">
                                <img src={LandingImage} alt="Undraw Coding" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* About Section */}
            <section
                id="sectionAbout"
                className="section section--primary-blue section__about"
            >
                <Container>
                    <div className="about">
                        <div className="about section__header">
                            <h1>About Me</h1>
                        </div>
                        <div className="section section__content">
                            <div className="about__block">
                                <h2>{"</Me>"}</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Ipsam non adipisci odio
                                    ducimus consequuntur eligendi doloremque ut
                                    numquam quia vitae. Velit non dicta magni
                                    est, nemo dolore adipisci cupiditate nobis?
                                </p>
                            </div>
                            <div className="about__block">
                                <img src={DesignerSVG} alt="Designer" />
                                <h2>Designer</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Ipsam non adipisci odio
                                    ducimus consequuntur eligendi doloremque ut
                                    numquam quia vitae. Velit non dicta magni
                                    est, nemo dolore adipisci cupiditate nobis?
                                </p>
                            </div>
                            <div className="about__block">
                                <img src={MentorSVG} alt="Mentor / Professor" />
                                <h2>Mentor</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Ipsam non adipisci odio
                                    ducimus consequuntur eligendi doloremque ut
                                    numquam quia vitae. Velit non dicta magni
                                    est, nemo dolore adipisci cupiditate nobis?
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default IndexPage
