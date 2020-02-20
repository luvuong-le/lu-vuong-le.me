import React, { useEffect } from "react"

import Layout from "@components/layout/layout"
import Container from "@components/layout/container"
import SEO from "@components/seo/seo"

import LandingImage from "@assets/images/undraw-coding.svg"
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
                            <h1 className="margin-t-sm">I'm Lu-Vuong</h1>
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
                                        Resume
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
        </Layout>
    )
}

export default IndexPage
