import React from "react";

import "./nav.scss";

const Navbar = ({ items, setOpen }) => {
  return (
    <header>
      <span className="spanNav">Thrivetalk</span>

      <div className="navmenu">
        {items.map((item) => (
          <li key={item.to} className="navitem">
            <a href={item.href} className="navLink">
              {item.name}
            </a>
          </li>
        ))}
      </div>
      
      <button className="btnSubscribe" onClick={setOpen}>CONTACT US</button>
    </header>
  );
};
export default Navbar;
