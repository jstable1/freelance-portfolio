import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer id="contact-me" className="flex-row">
            <div className="contact-options section-body">
                <a href="https://github.com/jstable1" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/jessica-stabler-b6539012/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                <a href="https://twitter.com/jstabler" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
            </div>
        </footer>
    )
};

export default Footer;