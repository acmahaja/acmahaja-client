import React, { useEffect, useState } from "react";

import "../css/socialLinks.css";

const SocialIcon = ({ value, Icon, hoverBackgroundColor, hoverColor }) => {
  const [hover, setHover] = useState("start");
  function MouseOver() {
    setHover("hover");
  }
  function MouseOut() {
    setHover("hoverExit");
  }

  return (
    <div
      className={`SocialIcon ${hover}`}
      style={{
        background: hover !== "start" ? hoverBackgroundColor : "none",
        color: hover !== "start" ? hoverColor : "none"
      }}
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
    >
      {Icon}
      <p
        style={{ color: hover !== "start" ? hoverColor : "none" }}
        className="useBorderBox"
      >
        {value}
      </p>
    </div>
  );
};

export default SocialIcon;
