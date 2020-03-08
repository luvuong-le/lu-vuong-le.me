import React from "react"
import Container from "@components/layout/Container"

import Tag from "@components/tags/Tag.js"
import TagIcon from "@components/tags/TagIcon.js"

import Fade from "react-reveal/Fade"

export default function Projects() {
    return (
        <Fade>
            <section
                id="sectionProjects"
                className="section projects"
                data-name="Projects"
            >
                <Container>
                    <div>
                        <div className="section__header--break">
                            <div>
                                <h1 className="section__header-text">
                                    Projects I've Built
                                </h1>
                            </div>
                        </div>
                        <div className="section__content margin-t-md">
                            <div className="featured featured__project">
                                <img
                                    src={`${process.env.CLOUDFRONT_CDN_URL}/assets/images/undraw_trendy_interface_lg8x.svg`}
                                    alt="Designer"
                                />
                                <div className="featured__content">
                                    <div className="tag__container">
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "none",
                                                color: "black",
                                            }}
                                        />
                                    </div>
                                    <div className="section__header">
                                        <h1 className="section__header-text">
                                            Astro Chat
                                        </h1>
                                    </div>
                                    <div className="featured__desc">
                                        <p>
                                            Realtime chat application created
                                            using Vue JS, Socket IO and Node JS.
                                            Create A Room, Join a Room, Chat
                                            with people from all over!
                                        </p>
                                    </div>
                                    <div className="tag__container">
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div>Links here</div>
                                </div>
                            </div>
                            <div className="featured featured__project">
                                <div className="featured__content">
                                    <div className="tag__container">
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "none",
                                                color: "black",
                                            }}
                                        />
                                    </div>
                                    <div className="section__header">
                                        <h1 className="section__header-text">
                                            Snake Game
                                        </h1>
                                    </div>
                                    <div className="featured__desc">
                                        <p>
                                            Realtime chat application created
                                            using Vue JS, Socket IO and Node JS.
                                            Create A Room, Join a Room, Chat
                                            with people from all over!
                                        </p>
                                    </div>
                                    <div className="tag__container">
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                </div>
                                <img
                                    src={`${process.env.CLOUDFRONT_CDN_URL}/assets/images/undraw_trendy_interface_lg8x.svg`}
                                    alt="Designer"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section
                id="sectionProjects"
                className="section section--grey projects"
            >
                <Container>
                    <div>
                        <div className="section__header--break">
                            <h1 className="section__header-text">
                                Other Notable Projects
                            </h1>
                        </div>
                        <div className="section__content projects">
                            <div className="project">
                                <div className="project__header">
                                    <i className="fas fa-terminal"></i>
                                    <div
                                        style={{
                                            textAlign: "right",
                                        }}
                                    >
                                        <i className="fab fa-github"></i>
                                        <i className="fas fa-external-link-alt"></i>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <h1>Astro Chat</h1>
                                    <p>
                                        Realtime chat application created using
                                        Vue JS, Socket IO and Node JS. Create A
                                        Room, Join a Room, Chat with people from
                                        all over!
                                    </p>
                                </div>
                                <div className="project__footer">
                                    <div className="tag__container">
                                        <Tag
                                            name="HTML"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="CSS"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="JavaScript"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <TagIcon
                                            icon="fab fa-vuejs"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <Tag
                                            name="Socket IO"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </Fade>
    )
}
