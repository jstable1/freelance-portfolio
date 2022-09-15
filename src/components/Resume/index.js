import React from "react";
import MyResume from "../../assets/resume.pdf";

function Resume() {

    return (
        <section class="resume">
            <div>
                <h1>Resume</h1>
                <h3>Download my <a href={MyResume}>resume</a></h3>
            </div>
            <div>
                <h2>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div>
                <h2>Back-end Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;