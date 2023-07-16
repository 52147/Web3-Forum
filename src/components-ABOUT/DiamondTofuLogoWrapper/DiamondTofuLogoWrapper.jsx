/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import "./style.css";

export const DiamondTofuLogoWrapper = ({
  className,
  logoLogo = "https://generation-sessions.s3.amazonaws.com/338b3609cd585762ca127a567391b809/img/logo-2-1.svg",
}) => {
  return (
    <div className={`diamond-tofu-logo-wrapper ${className}`}>
      <Logo className="logo-instance" logo={logoLogo} />
      <div className="DIAMOND-tofu-2">
        <span className="text-wrapper-3">DIAMOND</span>
        <span className="text-wrapper-4"> Tofu</span>
      </div>
    </div>
  );
};

DiamondTofuLogoWrapper.propTypes = {
  logoLogo: PropTypes.string,
};
