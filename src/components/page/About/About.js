import React from "react";

import "../About/about.scss";

const About = () => {
  return (
    <div>
      <section className="mainContent2">
        <div className="textContent2">
          <h2 className="text-main" id="about"> Why Thrive?</h2>
          <p className="textUnderMain2">
           <b> Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right
            therapist?</b> Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office
            from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk. Start
            therapy now with a licensed therapist!
          </p>
        </div>
        <div className="img2"> </div>
      </section>

      <section className="second-main-content-2">
          <button className="btn-about-us">ABOUT US</button>
        <p className="text-main-2">
          We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a
          mental wellness issue we’re here to help. Our highly talented therapists can help you with a range of issues
          including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.
        </p>
      </section>
      
    </div>
  );
};
export default About;
