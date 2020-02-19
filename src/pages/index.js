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
            strings: [
                "<i>> Software Engineer</i>",
                "<i>> Mentor</i>",
                "<i>> Designer</i>",
            ],
            typeSpeed: 40,
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
                                    class="anim anim--wave margin-l-sm"
                                    role="img"
                                    aria-label="jsx-a11y/accessible-emoji"
                                >
                                    👋
                                </span>
                            </h2>
                            <h1>I'm Lu-Vuong Le</h1>
                            <span class="typed fsize-l" ref={typedEl}></span>
                        </div>
                        <div className="landing__body">
                            <div className="flex">
                                <p>I build web apps</p>
                                <p>
                                    I create efficient solutions for companies
                                </p>
                            </div>
                            <div className="landing__cta margin-t-md">
                                <button className="btn btn--primary">
                                    Get In Touch
                                </button>
                                <button className="btn btn--primary">
                                    Resume
                                </button>
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
