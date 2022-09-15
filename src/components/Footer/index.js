import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

function Footer() {
    return (
        <footer id="contact-me" class="flex-row">
            <div class="contact-options section-body">
                <a href="https://github.com/jstable1" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/jessica-stabler-b6539012/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                <a href="https://twitter.com/jstabler" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
            </div>
        </footer>
    )
};

export default Footer;