import React from "react";
import logo from "../../assets/logo.png";

function Logo({ height = 53, width = 83 }) {
  return <img src={logo} alt="Eventin logo" height={height} width={width} />;
}

export default Logo;
