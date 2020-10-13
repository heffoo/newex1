import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <section className="mainContent7">
        <div className="img5"></div>
        <div className="for-content">
          <div className="textContent7">
            <div className="column" >
              <h5>SOME INFO</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, provident?</p>
            </div>
            <div className="column">
              <h5>ENFOLD HEALTH</h5>
              <p>Main Street 1, Olcott Buffalo, United States +555 283 784 333 office@enfold-health.com</p>
            </div>
            <div className="column">
              <h5>OFFICE HOURS</h5>
              <p>
                Mo-Fr: 8:00-19:00 <br /> Sa: 8:00-14:00 <br />
                Su: closed
              </p>
            </div>
          </div>
        </div></section>
        <div className="copyright"> © Copyright - My React Landing!!1 2017</div>
      
    </footer>
  );
};
export default Footer;
