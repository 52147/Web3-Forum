/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import "./style.css";

export const DiamondTofuLogoWrapper = ({
  logoLogo = "https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/logo-2-5.svg",
  logoLogoClassName,
  to,
}) => {
  return (
    <Link className="diamond-tofu-logo-wrapper" to={to}>
      <Logo className={logoLogoClassName} logo={logoLogo} />
      <div className="div">
        <span className="text-wrapper-2">DIAMOND</span>
        <span className="text-wrapper-3"> Tofu</span>
      </div>
    </Link>
  );
};

DiamondTofuLogoWrapper.propTypes = {
  logoLogo: PropTypes.string,
  to: PropTypes.string,
};
