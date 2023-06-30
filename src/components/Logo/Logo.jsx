/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({
  className,
  logo = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/logo-2-4.svg",
}) => {
  return <img className={`logo ${className}`} alt="Logo" src={logo} />;
};

Logo.propTypes = {
  logo: PropTypes.string,
};
