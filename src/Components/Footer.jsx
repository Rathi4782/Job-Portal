// eslint-disable-next-line no-unused-vars
import React from 'react'
// import {Link} from 'react-router-dom'
import "../Styles/footer.css"

// import React from "react";
import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li key="about"><Link to="/">About Us</Link></li>
              <li key="contact"><Link to="/">Contact Us</Link></li>
              <li key="services"><Link to="/">Our Services</Link></li>
              <li key="privacy"><Link to="/">Privacy Policy</Link></li>
              <li key="terms"><Link to="/">Terms & Condition</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li key="about-2"><Link to="/">About Us</Link></li>
              <li key="contact-2"><Link to="/">Contact Us</Link></li>
              <li key="services-2"><Link to="/">Our Services</Link></li>
              <li key="privacy-2"><Link to="/">Privacy Policy</Link></li>
              <li key="terms-2"><Link to="/">Terms & Condition</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><i className="bx bxs-map" style={{ color: "#00b074" }}></i> 123 Street, New York, USA</li>
              <li><i className="bx bxs-phone" style={{ color: "#00b074" }}></i> +012 345 67890</li>
              <li><i className="bx bxs-envelope" style={{ color: "#00b074" }}></i> info@example.com</li>
            </ul>
            <div className="social-icons">
              <Link to="/"><i className="bx bxl-twitter"></i></Link>
              <Link to="/"><i className="bx bxl-meta"></i></Link>
              <Link to="/"><i className="bx bxl-youtube"></i></Link>
              <Link to="/"><i className="bx bxl-linkedin"></i></Link>
            </div>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <form>
              <input type="email" placeholder="Your email" required />
              <button type="submit" className="signup-btn" aria-label="Sign up for the newsletter">SignUp</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Your Site Name, All Right Reserved. Designed By <Link to="/">HTML Codex</Link></p>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Cookies</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">FAQs</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

