import React, { useState, useRef, useEffect } from "react";
import Arrow from "../../Assets/arrow.png";

function Collapse(props) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    // Met à jour la hauteur du contenu lorsqu'il est ouvert
    if (toggle) {
      setHeightEl(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeightEl("0px"); // Cache le contenu lorsqu'il est fermé
    }
  }, [toggle]);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`collapse ${props.aproposStyle}`}>
      <div onClick={toggleState} className="collapse__visible">
        <h2>{props.aproposTitle}</h2>
        <img
          className={toggle ? "arrow rotated" : "arrow"}
          src={Arrow}
          alt="arrow"
        />
      </div>
      <div
        ref={contentRef}
        className={`collapse__toggle ${toggle ? "animated" : ""}`}
        style={{ height: heightEl }} >
        <p className="collapse__text" aria-hidden={toggle ? "true" : "false"}>{props.aproposText}</p>
      </div>
    </div>
  );
}

export default Collapse;

