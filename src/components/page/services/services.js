import React from "react";

import "../services/services.scss";

const Services = ({ items, downitems, transitems }) => {
  return (
    <>
      <section className="mainContent3">
        <div className="textContent3" id="services">WE CAN HELP YOU WITH</div>
        <div className="blocks">
          {items.map((item) => (
            <li key={item.bgcolor} className="blockitem" style={{ backgroundColor: item.bgcolor }}>
              <hr className="hr" />
              <p style={{ color: "orange" }}>• </p> {item.li}
            </li>
          ))}
        </div>
      </section>

      <section className="mainContent4">
        <div>
          <div className="blocks1">
            {downitems.map((item) => (
              <li key={item.bgcolor} className="blockitem1" style={{ backgroundColor: item.bgcolor }}>
                <hr className="hr" /> <p style={{ color: "orange" }}>•</p> {item.li}
              </li>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="blocks2">
          {transitems.map((item) => (
            <li key={item.li} className="blockitem2">
         <div className="blockContent">     <h4 className="headerText"> {item.li}</h4> <p>{item.text}</p></div>
            </li>
          ))}
        </div>
      </section>
    </>
  );
  /* <div className="navmenu">
    {items.map((item) => (
      <li key={item.to} className="navitem">
        <a href={item.href} className="navLink">
          {item.name}
        </a>
      </li>
    ))}
  </div>  */
};
export default Services;
