import React from "react"
import Container from "@components/layout/Container"
import LazyLoad from "react-lazyload";

import Tag from "@components/tags/Tag.js"

import Fade from "react-reveal/Fade"

export default function FeaturedProjects() {
    return (
        <section
            id="featured"
            className="section section__featured"
            data-name="Featured Projects"
        >
            <Container>
                <Fade>
                    <div>
                        <div className="section__header--break">
                            <h1 className="section__header-text">
                                Projects I've Built
                            </h1>
                        </div>
                        <div className="section__content margin-t-md">
                            <div className="featured featured__project">
                                <LazyLoad>
                                    <Fade>
                                        <img
                                            loading="lazy"
                                            src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/astro-chat.gif`}
                                            alt="Astro Chat Project"
                                            />
                                    </Fade>
                                </LazyLoad>
                                <div className="featured__content">
                                    <div className="tag__container">
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="featured__header">
                                        <h1 className="section__header-text">
                                            Astro Chat
                                        </h1>
                                        <div className="featured__header-icons">
                                            <a
                                                href="https://github.com/luvuong-le/node-vue-chat"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a
                                                href="https://astro-chat-io.herokuapp.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-external-link-alt"></i>
                                            </a>
                                        </div>
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
                                            name="HTML5"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="CSS3"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="JavaScript"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="SocketIO"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="MongoDB"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="NodeJS"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="featured featured__project">
                                <div className="featured__content">
                                    <div className="tag__container">
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="featured__header">
                                        <h1 className="section__header-text">
                                            Snake Game
                                        </h1>
                                        <div className="featured__header-icons">
                                            <a
                                                href="https://github.com/luvuong-le/snake-game"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a
                                                href="https://luvuong-le-snake-game.netlify.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-external-link-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="featured__desc">
                                        <p>
                                            Recreation of the classic and
                                            beloved Snake Game created with
                                            TypeScript. Enjoy the thrill of the
                                            old times, a fun and nostalgic game
                                            to play if you feel bored.
                                        </p>
                                        <br />
                                        <p>What's your highscore? </p>
                                    </div>
                                    <div className="tag__container">
                                        <Tag
                                            name="HTML5"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="CSS3"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="JavaScript"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="TypeScript"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                </div>
                                <LazyLoad>
                                    <Fade>
                                        <img
                                            loading="lazy"
                                            src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/snake-game.gif`}
                                            alt="Snake Game Project"
                                        />
                                    </Fade>
                                </LazyLoad>
                            </div>
                            <div className="featured featured__project">
                                <LazyLoad>
                                    <Fade>
                                        <img
                                            loading="lazy"
                                            src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/mplayer-demo.gif`}
                                            alt="Mplayer Project"
                                            />
                                    </Fade>
                                </LazyLoad>
                                <div className="featured__content">
                                    <div className="tag__container">
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="featured__header">
                                        <h1 className="section__header-text">
                                            MPlayer
                                        </h1>
                                        <div className="featured__header-icons">
                                            <a
                                                href="https://github.com/luvuong-le/mplayer"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="featured__desc">
                                        <p>
                                            Music Player created with HTML5,
                                            CSS3, JS. Created as a means of
                                            having access to music for a last
                                            resort.
                                        </p>
                                        <br />
                                        <p>
                                            Able to be used as a module, music
                                            uploadability
                                        </p>
                                    </div>
                                    <div className="tag__container">
                                        <Tag
                                            name="HTML5"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="CSS3"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="JavaScript"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="featured featured__project">
                                <div className="featured__content">
                                    <div className="tag__container">
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="featured__header">
                                        <h1 className="section__header-text">
                                            Conway's Game Of Life
                                        </h1>
                                        <div className="featured__header-icons">
                                            <a
                                                href="https://github.com/luvuong-le/conways-game-of-life"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a
                                                href="https://luvuong-le-game-of-life.netlify.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-external-link-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="featured__desc">
                                        <p>
                                            Recreation of the classic and
                                            beloved Snake Game created with
                                            TypeScript. Enjoy the thrill of the
                                            old times, a fun and nostalgic game
                                            to play if you feel bored.
                                        </p>
                                        <br />
                                        <p>What's your highscore? </p>
                                    </div>
                                    <div className="tag__container">
                                        <Tag
                                            name="HTML5"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="CSS3"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="JavaScript"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="TypeScript"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                </div>
                                <LazyLoad>
                                    <Fade>
                                        <img
                                            loading="lazy"
                                            src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/game-of-life-ts.gif`}
                                            alt="Game Of Life Project"
                                            />
                                    </Fade>
                                </LazyLoad>
                            </div>
                            <div className="featured featured__project">
                                <LazyLoad>
                                    <Fade>
                                        <img
                                            loading="lazy"
                                            src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/node-project-generator.gif`}
                                            alt="Node Project Generator"
                                            />
                                    </Fade>
                                </LazyLoad>
                                <div className="featured__content">
                                    <div className="tag__container">
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="featured__header">
                                        <h1 className="section__header-text">
                                            Code Generator (CLI)
                                        </h1>
                                        <div className="featured__header-icons">
                                            <a
                                                href="https://github.com/luvuong-le/node-project-generator"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="featured__desc">
                                        <p>
                                            Music Player created with HTML5,
                                            CSS3, JS. Created as a means of
                                            having access to music for a last
                                            resort.
                                        </p>
                                        <br />
                                        <p>
                                            Able to be used as a module, music
                                            uploadability
                                        </p>
                                    </div>
                                    <div className="tag__container">
                                        <Tag
                                            name="HTML5"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="CSS3"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="JavaScript"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="featured featured__project">
                                <div className="featured__content">
                                    <div className="tag__container">
                                        <Tag
                                            name="Featured Project"
                                            style={{
                                                background: "blue",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="featured__header">
                                        <h1 className="section__header-text">
                                            Webcomponents
                                        </h1>
                                        <div className="featured__header-icons">
                                            <a
                                                href="https://github.com/luvuong-le/conways-game-of-life"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a
                                                href="https://luvuong-le-webcomponents.netlify.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-external-link-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="featured__desc">
                                        <p>
                                            Utilising native webcomponents to
                                            build an example site
                                        </p>
                                    </div>
                                    <div className="tag__container">
                                        <Tag
                                            name="HTML5"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="CSS3"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="JavaScript"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                        <Tag
                                            name="Webcomponents"
                                            style={{
                                                background: "#13315C",
                                                color: "#ffffff",
                                            }}
                                        />
                                    </div>
                                </div>
                                <LazyLoad>
                                    <Fade>
                                        <img
                                            loading="lazy"
                                            src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/webcomponents.gif`}
                                            alt="Web Components Project"
                                        />
                                    </Fade>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Container>
        </section>
    )
}
