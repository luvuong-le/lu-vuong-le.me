import React from "react"
import Container from "@components/layout/Container"

import Fade from "react-reveal/Fade"

export default function Contact() {
    return (
        <Fade>
            <section
                id="sectionContact"
                className="section contact"
                data-name="Contact"
            >
                <Container>
                    <div
                        className="contact"
                        style={{
                            width: "100%",
                            margin: "0 auto",
                            textAlign: "center",
                        }}
                    >
                        <div className="section__header--break">
                            <h1 className="section__header-text">
                                Send Me a Message!
                            </h1>
                        </div>
                        <div className="section section__content">
                            <p>Contact form coming soon</p>
                        </div>
                    </div>
                </Container>
            </section>
        </Fade>
    )
}
