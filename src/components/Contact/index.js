import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import axios from 'axios';

const API_PATH = 'http://localhost:3000/react-portfolio/api/contact/index.php';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
  e.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <section id="contact-me" class="contact">
        <h1>Contact Me</h1>
        <div className='contactContainers'>
          <div>
            <form action="#" className='contactForm'>
              <label>Name</label>
              <input type="text" id="name" name="name" placeholder="Your name.."
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
  
  
              <label>Email</label>
              <input type="email" id="email" name="email" placeholder="Your email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
  
  
              <label>Message</label>
              <textarea id="message" name="message" placeholder="Write something.."
                onChange={e => this.setState({ message: e.target.value })}
                value={this.state.message}
              ></textarea>
              <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
              
              <div>
                {this.state.mailSent &&
                  <div>Thank you for contacting me! I'll get back to you in 1-2 days.</div>
                }
              </div>
            </form >
          </div>
          <div class="contactOptions">
            <a href="mailto:jessica.stabler@gmail.com"><AiOutlineMail size={35}/><span>jessica.stabler@gmail.com</span></a>
            <p><MdOutlinePhoneIphone size={35}/><span>801-230-4660</span></p>
          </div>
        </div>
      </section>
    )
  }
};

export default Contact;