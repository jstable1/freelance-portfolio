import React from "react";
import Projects from "../Projects";
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';

const Portfolio = () => {
    return (
        <section id="work" className="portfolio">
            <h1>Portfolio</h1>
            <div className="flex-row">
                <div className="work-boxes section-body">
                    {
                        Projects.map(function(project){
                            return (
                                <div className="portfolioBoxes">
                                    <h2>{project.name}</h2>
                                    <div className="portfolioImg" style={{
                                    backgroundImage: `url(${project.img})`}}></div>
                                    <div className="portfolioIcons">
                                        <p>
                                            <span className="hovertext" data-hover={project.information}>
                                                <HiInformationCircle size={42} />
                                            </span>
                                        </p>
                                        <a href={project.appLink} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size={35}/></a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"><BsGithub size={35}/></a>
                                    </div>
                                    <h3>Technologies: {project.tech}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};

export default Portfolio;