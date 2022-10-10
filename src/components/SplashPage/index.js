import React, { Component } from 'react';
import MyResume from '../../assets/resume.pdf';
import { GiBee } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { FaFileDownload } from 'react-icons/fa';
import { MdOutlinePhoneIphone } from 'react-icons/md';

const helloArray = ['Hello', 'Bonjour', 'Hola', 'Guten Tag', 'Salve', 'Konnichiwa'];

class SplashPage extends Component {

    constructor() {
        super();
        this.state = { arrayIndex: 0 };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentId = this.state.arrayIndex;
            this.setState({ arrayIndex: currentId + 1 });
        }, 10000);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let changingText = helloArray[this.state.arrayIndex % helloArray.length];

        return (
            <section className="splashPage">
                <div className="beeContainer">
                    <GiBee size={56}/>
                </div>
                <div className="splashText">
                    <h1>{changingText}!</h1> 
                    <h1>I'm Jessica, a Full Stack Web Developer based in Herriman, UT.</h1>
                    <h2>Creative. Detail-Oriented. Organized. Hard-working.</h2>
                    <h3>Technical Skills: HTML/HTML5, CSS, JavaScript, JQuery, Node.js, Express.js, SQL, MongoDB/Mongoose, React, GraphQL, and Python</h3>
                    <h4>
                        <MdEmail/> <a href="mailto:jessica.stabler@gmail.com">jessica.stabler@gmail.com</a>
                    </h4>
                    <h4>
                        <span><FaFileDownload/> <a href={MyResume}>resume</a></span>
                    </h4>
                    <h4>
                        <p><MdOutlinePhoneIphone/><span>801-230-4660</span></p>
                    </h4>
                </div>
                <div className="splashImg">insert avatar here</div>
            </section>
        );
    }

}

export default SplashPage;