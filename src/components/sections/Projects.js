import React from "react"
import Container from "@components/layout/Container"

import Tag from "@components/tags/Tag.js"
import TagIcon from "@components/tags/TagIcon.js"

import Fade from "react-reveal/Fade"

export default function Projects() {
    return (
        <Fade>
            <section
                id="featured"
                className="section projects"
                data-name="Featured Projects"
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
                                    src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/astro-chat.gif`}
                                    alt="Designer"
                                />
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
                                <img
                                    src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/snake-game.gif`}
                                    alt="Designer"
                                />
                            </div>
                            <div className="featured featured__project">
                                <img
                                    src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/mplayer-demo.gif`}
                                    alt="Designer"
                                />
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
                                            <a
                                                href="#"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-external-link-alt"></i>
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
                                <img
                                    src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/game-of-life-ts.gif`}
                                    alt="Designer"
                                />
                            </div>
                            <div className="featured featured__project">
                                <img
                                    src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/node-project-generator.gif`}
                                    alt="Designer"
                                />
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
                                <img
                                    src={`${process.env.GATSBY_CLOUDFRONT_CDN_URL}/assets/projects/webcomponents.gif`}
                                    alt="Designer"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section
                id="projects"
                className="section section--grey projects"
                data-name="Other Projects"
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
                                        <a
                                            href="https://github.com/luvuong-le/toy-robot-simulator"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <h1>Toy Robot Simulator</h1>
                                    <p>
                                        Toy Robot Simulator Coding Challenge.
                                        Simulation of a toy robot moving on a
                                        square tabletop, of dimensions 5 units x
                                        5 units
                                    </p>
                                </div>
                                <div className="project__footer">
                                    <div className="tag__container">
                                        <TagIcon
                                            icon="fab fa-js"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <TagIcon
                                            icon="fab fa-node"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="project__header">
                                    <i className="fas fa-terminal"></i>
                                    <div
                                        style={{
                                            textAlign: "right",
                                        }}
                                    >
                                        <a
                                            href="https://github.com/luvuong-le/Hangman"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a
                                            href="https://luvuong-le-hangman.netlify.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <h1>Hangman</h1>
                                    <p>
                                        Web based creation of the popular game
                                        Hangman. Rules are same as usual. You
                                        also have the ability to play alone or
                                        with another friend!
                                    </p>
                                </div>
                                <div className="project__footer">
                                    <div className="tag__container">
                                        <TagIcon
                                            icon="fab fa-html5"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <TagIcon
                                            icon="fab fa-css3-alt"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <TagIcon
                                            icon="fab fa-js"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="project__header">
                                    <i className="fas fa-terminal"></i>
                                    <div
                                        style={{
                                            textAlign: "right",
                                        }}
                                    >
                                        <a
                                            href="https://github.com/luvuong-le/data-structure-linked-list"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <h1>Linked List (CLI)</h1>
                                    <p>
                                        Implementation of a Singly Linked List
                                        and a Doubly Linked List created in
                                        JavaScript using TypeScript.
                                    </p>
                                </div>
                                <div className="project__footer">
                                    <div className="tag__container">
                                        <TagIcon
                                            icon="fab fa-js"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <Tag
                                            name="TypeScript"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <TagIcon
                                            icon="fab fa-node"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="project__header">
                                    <i className="fas fa-terminal"></i>
                                    <div
                                        style={{
                                            textAlign: "right",
                                        }}
                                    >
                                        <a
                                            href="https://github.com/luvuong-le/Tic-Tac-Toe"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a
                                            href="https://luvuong-le-tictactoe.netlify.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <h1>Tic Tac Toe</h1>
                                    <p>
                                        Implementation of a Singly Linked List
                                        and a Doubly Linked List created in
                                        JavaScript using TypeScript.
                                    </p>
                                </div>
                                <div className="project__footer">
                                    <div className="tag__container">
                                        <TagIcon
                                            icon="fab fa-js"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <Tag
                                            name="TypeScript"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <TagIcon
                                            icon="fab fa-node"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="project__header">
                                    <i className="fas fa-terminal"></i>
                                    <div
                                        style={{
                                            textAlign: "right",
                                        }}
                                    >
                                        <a
                                            href="https://github.com/luvuong-le/To-Do-List"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a
                                            href="https://luvuong-le-todolist.netlify.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <h1>To Do List</h1>
                                    <p>
                                        Pure JavaScript implementation of a Todo
                                        List. Allows for CRUD operations
                                    </p>
                                </div>
                                <div className="project__footer">
                                    <div className="tag__container">
                                        <TagIcon
                                            icon="fab fa-js"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <Tag
                                            name="TypeScript"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <TagIcon
                                            icon="fab fa-node"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="project__header">
                                    <i className="fas fa-terminal"></i>
                                    <div
                                        style={{
                                            textAlign: "right",
                                        }}
                                    >
                                        <a
                                            href="https://github.com/luvuong-le/Memory-Game"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a
                                            href="https://luvuong-le-memory-game.netlify.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <h1>Memory Game</h1>
                                    <p>
                                        Web based memory card game. Try and see
                                        if you can memorise all the card
                                        locations!
                                    </p>
                                </div>
                                <div className="project__footer">
                                    <div className="tag__container">
                                        <TagIcon
                                            icon="fab fa-html5"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <TagIcon
                                            icon="fab fa-css3"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                        <TagIcon
                                            icon="fab fa-js"
                                            style={{
                                                background: "none",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="projects__cta margin-t-lg">
                                <a
                                    href="https://github.com/luvuong-le"
                                    className="btn btn--primary margin-r-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View My Github
                                </a>
                                <a href="/archive" className="btn btn--primary">
                                    View More In Archive
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </Fade>
    )
}
