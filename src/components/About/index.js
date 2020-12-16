import React from 'react';
import profilePic from "../../assets/profile/profilepic.jpg";

function About() {
    return (
        <section className={'section.container'}>
            <h1 id="about">About Me</h1>
            <img src={profilePic} className="me" style={{ width: "20%" }} alt="portrait" />
            <p>Hi! I'm Jenniffer Paczkowski, a full-stack web developer with an accounting background. I have an expertise in relational databases and a keen attention to detail. My analytical thinking and problem-solving skills help to bring the functionality of web applications through to fruition.</p>
        </section>
    );
}

export default About;