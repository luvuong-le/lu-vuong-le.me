import React from "react"
import Container from "@components/layout/container"

import ProfileImage from "@assets/images/profile.jpg"
import MentorSVG from "@assets/images/undraw_professor_8lrt.svg"
import DesignerSVG from "@assets/images/undraw_trendy_interface_lg8x.svg"

export default function About() {
    return (
        <section
            id="sectionAbout"
            className="section section--primary-blue section__about"
        >
            <Container>
                <div className="about">
                    <div className="about section__header">
                        <h1>About Me</h1>
                    </div>
                    <div className="section section__content">
                        <div className="about__block">
                            <div className="about__block--profile">
                                <img src={ProfileImage} alt="Profile" />
                            </div>
                            <h2 className="margin-t-md">{"</Me>"}</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ipsam non adipisci odio
                                ducimus consequuntur eligendi doloremque ut
                                numquam quia vitae. Velit non dicta magni est,
                                nemo dolore adipisci cupiditate nobis?
                            </p>
                        </div>
                        <div className="about__block">
                            <img src={DesignerSVG} alt="Designer" />
                            <h2>Designer</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ipsam non adipisci odio
                                ducimus consequuntur eligendi doloremque ut
                                numquam quia vitae. Velit non dicta magni est,
                                nemo dolore adipisci cupiditate nobis?
                            </p>
                        </div>
                        <div className="about__block">
                            <img src={MentorSVG} alt="Mentor / Professor" />
                            <h2>Mentor</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ipsam non adipisci odio
                                ducimus consequuntur eligendi doloremque ut
                                numquam quia vitae. Velit non dicta magni est,
                                nemo dolore adipisci cupiditate nobis?
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
