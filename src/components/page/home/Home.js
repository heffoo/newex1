import React from "react";

import "../home/home.scss";

       
const Home = () => {
  return (
<section className="mainContent">
<section className="textContent">
  <span className="spanNav" >Thrivetalk</span>
  <h2 className="mainText">HELPING YOU THRIVE IN ALL AREAS OF LIFE</h2>
  <p className="textUnderMain">
    Our highly talented therapists can help you with a range of issues including relationships, PTSD,
    depression, social anxiety, or even just caring for yourself more.
  </p>
  <button className="buttonUnderText1 ">WHO AM I</button>
  <button className="buttonUnderText2">WHO DO I DO </button>
</section>

<div className="rightContent">
  <img className="img" alt="img" src="http://placekitten.com/420/620"></img>
  

</div>  
</section>

)}

export default Home