import React from 'react';


import '../services/services.scss'



const Services = ({items}) => {
    return (
        <section className="mainContent3">
                <div className="textContent3">
                WE CAN HELP YOU WITH
                </div>
                <div className="blocks">
                    {items.map((item) => (
                        <li key={item.bgcolor} className="blockitem" style={{backgroundColor: item.bgcolor}}>
                           
                        </li>
                    ))}
                </div>
        </section>
    )
   /* <div className="navmenu">
    {items.map((item) => (
      <li key={item.to} className="navitem">
        <a href={item.href} className="navLink">
          {item.name}
        </a>
      </li>
    ))}
  </div>  */
}
export default Services;