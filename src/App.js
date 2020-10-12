import React, { useState } from "react";
import NAV_ITEMS from "./consts";
import Navbar from "./components/nav";
import About from "./components/page/About/About";
import SomeForm from "./components/someForm/someForm";
import Home from "./components/page/home/Home";
import Services from './components/page/services/services'
import UP_BLOCKS from './components/page/services/blocks'
import DOWN_BLOCKS from './components/page/services/moreblocks'
import TRANS_BLOCKS from './components/page/services/transblocks'
import Blog from './components/page/Blog/blog' 

import "../src/components/page/home/home.scss";
import "../src/main.scss"

const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App" id="toppage">
    
      <Navbar items={NAV_ITEMS} setOpen={setOpen} />
      <main>
        <div className="firstMain">
          {isOpen && <SomeForm isOpen={isOpen} setOpen={setOpen} />}
          <Home /><a className="arrow" href="#toppage">Up</a>
        </div>
        <div className="secondMain">
          <About /> 
        </div>
        <div className="thirdMain">
          <Services items={UP_BLOCKS} downitems={DOWN_BLOCKS} transitems={TRANS_BLOCKS}/>
        </div>
<hr></hr>
        <div className="fourthMain">
          <Blog />
        </div>
        
       
      </main>

      {/* <figure className="rect"></figure> */}
    </div>
  );
};

export default App;
