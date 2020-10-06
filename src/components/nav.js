import React from "react";

import "./nav.scss";

const Navbar = ({ items, setOpen }) => {
  return (
    <div className="navbar">
      <span className="spanNav">Thrivetalk</span>

      <div className="navmenu">
        {items.map((item) => (
          <li key={item.to} className="navitem">
            <a href="/#" className="navLink">
              {item.name}
            </a>
          </li>
        ))}
      </div>

      <button className="btnSubscribe" onClick={setOpen}>a button</button>
    </div>
  );
};
export default Navbar;
