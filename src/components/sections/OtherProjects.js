import React from "react"
import Container from "@components/layout/Container"
import { Link } from "gatsby"

import Tag from "@components/tags/Tag.js"
import TagIcon from "@components/tags/TagIcon.js"

import Fade from "react-reveal/Fade"

export default function OtherProjects() {
    return (
        <Fade>
            <section
                id="projects"
                className="section section--grey"
                data-name="Other Projects"
            >
                <Container>
                    <div className="full-width">
                        <div className="section__header--break margin-t-md">
                            <h1 className="section__header-text">
                                Other Notable Projects
                            </h1>
                        </div>
                        <div className="section__content">
                            <div className="section__other-projects">
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
                                            Toy Robot Simulator Coding
                                            Challenge. Simulation of a toy robot
                                            moving on a square tabletop, of
                                            dimensions 5 units x 5 units
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
                                            Web based creation of the popular
                                            game Hangman. Rules are same as
                                            usual. You also have the ability to
                                            play alone or with another friend!
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
                                            Implementation of a Singly Linked
                                            List and a Doubly Linked List
                                            created in JavaScript using
                                            TypeScript.
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
                                            Implementation of a Singly Linked
                                            List and a Doubly Linked List
                                            created in JavaScript using
                                            TypeScript.
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
                                            Pure JavaScript implementation of a
                                            Todo List. Allows for CRUD
                                            operations
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
                                            Web based memory card game. Try and
                                            see if you can memorise all the card
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
                                <Link
                                    to="/archive"
                                    className="btn btn--primary"
                                >
                                    View More In Archive
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </Fade>
    )
}
