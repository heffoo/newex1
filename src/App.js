import React, { useState } from "react";
import NAV_ITEMS from "./consts";
import Navbar from "./components/nav";

import "./components/content.scss";
import SomeForm from "./components/someForm/someForm";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <Navbar items={NAV_ITEMS} setOpen={setOpen} />
      {isOpen && <SomeForm isOpen={isOpen} setOpen={setOpen} />}
      <div className="mainContent">
        <div className="textContent">
          <span className="spanNav">Thrivetalk</span>
          <h2 className="mainText">HELPING YOU THRIVE IN ALL AREAS OF LIFE</h2>
          <p className="textUnderMain">
            Our highly talented therapists can help you with a range of issues including relationships, PTSD,
            depression, social anxiety, or even just caring for yourself more.
          </p>
        </div>

        <div className="rightContent">
          <img className="img" alt="img" src="http://placekitten.com/420/620"></img>
        <figure className="rect"></figure>
        </div>
      </div>  
      
    </div>
  );
};

export default App;
