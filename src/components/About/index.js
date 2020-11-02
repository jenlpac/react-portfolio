import React from 'react';
import profilePic from "../../assets/profile/profilepic.jpg";

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={profilePic} className="img" style={{ width: "20%" }} alt="portrait" />
            <p>Full-stack web developer with accounting background. Conquering web development one squashed bug at a time!</p>
        </section>
    );
}

export default About;