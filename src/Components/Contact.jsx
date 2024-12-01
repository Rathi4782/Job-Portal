// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact For Any Query</h2>
      <div className="contact-info">
        <div className="info-box">
        <i className='bx bxs-map' style={{ color: "#00b074" }}></i>
          <p>123 Street, New York, USA</p>
        </div>
        <div className="info-box">
        <i className='bx bxl-gmail' style={{ color: "#00b074" }}></i>
          <p>info@example.com</p>
        </div>
        <div className="info-box">
        <i className='bx bxs-phone' style={{ color: "#00b074" }}></i>
          <p>+012 345 6789</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.27339423659!2d-74.01355850524118!3d40.71450583759345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250bd7a4e9d33%3A0xbb59c1043cb9ea84!2sNew%20York!5e0!3m2!1sen!2sus!4v1698771682358!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
