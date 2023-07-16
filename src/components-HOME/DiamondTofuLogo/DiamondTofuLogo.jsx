/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import "./style.css";

export const DiamondTofuLogo = ({
  className,
  logoLogo = "https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/logo-2-2.svg",
  logoLogoClassName,
}) => {
  return (
    <div className={`diamond-tofu-logo ${className}`}>
      <Logo className={logoLogoClassName} logo={logoLogo} />
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
