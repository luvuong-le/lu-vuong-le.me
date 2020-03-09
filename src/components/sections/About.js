import React from "react"
import Container from "@components/layout/Container"

import Tag from "@components/tags/Tag.js"
import Fade from "react-reveal/Fade"

export default function About() {
    return (
        <Fade>
            <section
                id="sectionAbout"
                className="section section--grey margin-t-lg section__about"
                data-name="About"
            >
                <Container>
                    <div className="about">
                        <div className="section__content">
                            <div className="about__block">
                                <img
                                    src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/images/undraw_trendy_interface_lg8x.svg`}
                                    alt="Designer"
                                />
                                <div className="about__block-content">
                                    <div className="section__header--break">
                                        <h1 className="section__header-text anim--fadeInDown">
                                            Designer
                                        </h1>
                                    </div>
                                    <p className="margin-t-lg anim--fadeInDown">
                                        Skilled at design systems, UI design and
                                        designing interfaces between different
                                        components. Although not many developers
                                        are geared towards design, I personally
                                        love to design my projects with tools
                                        like Figma, Adobe XD and code up a
                                        beautiful design with CSS. I am
                                        committed into creating usable but also
                                        creative UI designs.
                                    </p>
                                    <div className="tag__container tag__container--right">
                                        <Tag
                                            name="Figma"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Abode XD"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Draw IO"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Photoshop"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="about__block">
                                <div className="about__block-content">
                                    <div className="section__header--break">
                                        <h1 className="section__header-text">
                                            Mentor
                                        </h1>
                                    </div>
                                    <p className="margin-t-lg anim--fadeInDown">
                                        I believe teaching is one of the best
                                        ways to share knowledge and solidify
                                        your own knowledge at the same time. As
                                        a volunteer at CoderDojo, I enjoy
                                        teaching others knowledge that I already
                                        have. It is always a pleasure for me as
                                        sometimes I learn things I didn't know
                                        either.
                                    </p>
                                    <div className="tag__container tag__container--left">
                                        <Tag
                                            name="CoderDojo"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Blogging"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Teaching Team Members"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                </div>
                                <img
                                    src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/images/undraw_professor_8lrt.svg`}
                                    alt="Mentor / Professor"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </Fade>
    )
}
