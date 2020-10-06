import React, {useRef, useEffect} from "react";

import "../components/content.scss";

const SomeForm = ({ setOpen, isOpen}) => {
  const ssform = useRef(null);
  useEffect(() => {

    const onClickOutsideHandler = (e) => {
      isOpen && !ssform.current.contains(e.target) && setOpen(false);
    };

    window.addEventListener("click", onClickOutsideHandler);
    return () => window.removeEventListener("click", onClickOutsideHandler);
  }, [setOpen, isOpen, ssform])

  return <div ref = {ssform} className="someForm"></div>;
};

export default SomeForm;
