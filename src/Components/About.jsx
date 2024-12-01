// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/about.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-images">
          <img src="https://plus.unsplash.com/premium_photo-1661310027237-8f4ed9ebc6ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZSUyMG1lZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="Team" className="about-img" />
          <img src="https://plus.unsplash.com/premium_photo-1661440352320-c7ddd4b52185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Discussion" className="about-img" />
          <img src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Meeting" className="about-img" />
          <img src="https://plus.unsplash.com/premium_photo-1661389625547-e4977d5727a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Meeting" className="about-img" />
        </div>
        <div className="about-content">
          <h2>We Help To Get The Best Job And Find A Talent</h2>
          <p>
            Tempor erat elit rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <ul>
            <li>✔ Tempor erat elit rebum at clita</li>
            <li>✔ Aliqu diam amet diam et eos</li>
            <li>✔ Clita duo justo magna dolore erat amet</li>
          </ul>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
