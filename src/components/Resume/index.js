import React from "react";
import MyResume from "../../assets/resume.pdf";

const Resume = () => {

    return (
        <section id="resume" className="resume">
            <h1>Download my <a href={MyResume}>resume</a></h1>
            <div className="resumeProficiencies">
                <div>
                    <h2>Front-end Proficiencies</h2>
                    <ul>
                        <li>HTML/HTML5</li>
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
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>SQL: MySQL/Sequelize</li>
                        <li>MongoDB/Mongoose</li>
                        <li>GraphQL</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resume;