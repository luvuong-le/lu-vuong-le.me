import React from "react"
import Container from "@components/layout/Container"

export default function Projects() {
    return (
        <>
            <section
                id="sectionProjects"
                className="section section--primary-blue projects"
            >
                <Container>
                    <div className="projects">
                        <div className="section__header--break">
                            <h1>Featured Projects</h1>
                        </div>
                        <div className="section section__content">
                            <p>List projects coming up soon</p>
                        </div>
                    </div>
                </Container>
            </section>

            <section
                id="sectionProjects"
                className="section section--primary-blue projects"
            >
                <Container>
                    <div className="projects">
                        <div className="section__header--break">
                            <h1>Other Notable Projects</h1>
                        </div>
                        <div className="section section__content">
                            <p>List projects coming up soon</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
