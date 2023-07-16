/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import "./style.css";

export const DiamondTofuLogo = ({
  logoLogo = "https://generation-sessions.s3.amazonaws.com/338b3609cd585762ca127a567391b809/img/logo-2-4.svg",
}) => {
  return (
    <div className="diamond-tofu-logo">
      <Logo className="logo-2" logo={logoLogo} />
      <div className="DIAMOND-tofu">
        <span className="text-wrapper">DIAMOND</span>
        <span className="span"> Tofu</span>
      </div>
    </div>
  );
};

DiamondTofuLogo.propTypes = {
  logoLogo: PropTypes.string,
};
