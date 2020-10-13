import React from "react";

import "./blog.scss";

const Blog = () => {
  return (
    <>
      <section className="mainContent5">
        <div className="img3" ></div> 
            {/* blog is up */}
        <div className="textContent5">
          <h4> YOU SHOULD ALSO KNOWN </h4>
          <p>
            MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in
            a given year. We at <span className="text-mark">ThriveTalk</span> can help you.
          </p>
          <button className="button-blog">GET HELP NOW</button>
        </div>
      </section>

      <section className="mainContent6">
        <div className="img4"></div>
        <div className="textContent6">
          <button className="btn-for-blog">CONTACT US</button>
    
            <h4>Ready. Set. Smile</h4>
            <p>Take the free online assessment to see if you are a candidate and get started on your journey.</p>
       

          <button className="second-button-blog">GET HELP NOW</button>
        </div>
      </section></>
      
    
  );
};
export default Blog;
