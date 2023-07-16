/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import "./style.css";

export const DiamondTofuLogoWrapper = ({
  logoLogo = "https://generation-sessions.s3.amazonaws.com/139904ab1a277e055fd92374fa28d752/img/logo-2-1.svg",
  logoLogoClassName,
}) => {
  return (
    <div className="diamond-tofu-logo-wrapper">
      <Logo className={logoLogoClassName} logo={logoLogo} />
      <div className="div">
        <span className="text-wrapper-2">DIAMOND</span>
        <span className="text-wrapper-3"> Tofu</span>
      </div>
    </div>
  );
};

DiamondTofuLogoWrapper.propTypes = {
  logoLogo: PropTypes.string,
};
