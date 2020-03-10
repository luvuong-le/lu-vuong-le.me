import React from "react"
import Container from "@components/layout/Container"

import Fade from "react-reveal/Fade"

export default function Contact() {
    return (
        <Fade>
            <section
                id="contact"
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
                                Get In Touch!
                            </h1>
                        </div>
                        <div className="section section__content margin-t-md">
                            <p>
                                Want to work together? Got a question or just
                                want to say hello?
                            </p>
                            <br />
                            <p>
                                Feel free to contact me. I will try my best to
                                answer all emails!
                            </p>
                            <a
                                href="mailto:lu-vuongle@outlook.com"
                                className="btn btn--primary btn--inline-block margin-t-md"
                            >
                                Send me an email!
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </Fade>
    )
}
