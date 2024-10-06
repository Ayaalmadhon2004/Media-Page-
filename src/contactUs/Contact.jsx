import React from 'react';
import './contact.css';
import contactImg from '../images/contact-dec.png';
import phone from '../images/phone-icon.png';
import location from '../images/location-icon.png';
import email from '../images/email-icon.png';

const Contact = () => {
  const Icons = [
    {
      img: phone,
      text: '010-020-0340',
    },
    {
      img: location,
      text: 'Gaza street',
    },
    {
      img: email,
      text: 'aya@gmail.com',
    },
  ];

  return (
    <div className="containerC container">
      <div className="topC">
        <h4>Contact Us</h4>
        <h1>
          Get In Touch With Us <span>Now</span>
        </h1>
      </div>
      <div className="bottomC">
        <div className="leftC">
          <img src={contactImg} alt="contact-img" />
        </div>
        <div className="rightC">
          <div className="icons">
            {Icons.map((item, index) => (
              <div className="icon" key={index}>
                <img src={item.img} alt={item.text} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="form">
            <div>
              <input type="text" placeholder="Write your name" />
              <input type="email" placeholder="Write your email" />
              <input type="text" placeholder="Write your subject" />
            </div>
            <div>
              <textarea placeholder="Write your message"></textarea>
            </div>
            <button className="submit-btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
