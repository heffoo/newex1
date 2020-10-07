import React, { useRef, useEffect } from "react";

import "../someForm/someForm.scss";

const SomeForm = ({ setOpen, isOpen }) => {
  const ssform = useRef(null);
  useEffect(() => {
    const onClickOutsideHandler = (e) => {
      isOpen && !ssform.current.contains(e.target) && setOpen(false);
    };

    window.addEventListener("click", onClickOutsideHandler);
    return () => window.removeEventListener("click", onClickOutsideHandler);
  }, [setOpen, isOpen, ssform]);

  return (
    <div ref={ssform} className="someForm">
        <p className="formText"> Заполните форму обратной связи и мы вам перезвоним! (наверное) </p>
        <button className='btnclose' onClick={() => setOpen(false)} >✕</button>
      <form className="formContent">
        <input type="text"  placeholder='Ваше имя' className="formReg"></input>
        <input type="email" placeholder='почта' className="formReg"></input>
        <input type="text" placeholder='тема' className="formReg"></input>
        <input type="text" size='44' placeholder='ваше сообщение' className="formReg"  />
    <input type="submit" className="btnReg" value='submit' onClick={() => setOpen(false)}></input>   </form>
     
    </div>
  );
};

export default SomeForm;
