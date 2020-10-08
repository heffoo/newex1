import React, { useState } from "react";
import NAV_ITEMS from "./consts";
import Navbar from "./components/nav";
import About from "./components/page/About/About";
import SomeForm from "./components/someForm/someForm";
import Home from "./components/Home";

import "./components/content.scss";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <Navbar items={NAV_ITEMS} setOpen={setOpen} />
      <main>
        <div className="firstMain">
          {isOpen && <SomeForm isOpen={isOpen} setOpen={setOpen} />}
          <Home />
        </div>
        <div className="secondMain">
          <About />
        </div>
      </main>

      {/* <figure className="rect"></figure> */}
    </div>
  );
};

export default App;
