/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { DiamondTofuLogo } from "../DiamondTofuLogo";
import "./style.css";

export const Header = ({
  className,
  diamondTofuLogoLogoLogo = "https://generation-sessions.s3.amazonaws.com/338b3609cd585762ca127a567391b809/img/logo-2-3.svg",
  to,
}) => {
  return (
    <div className={`header ${className}`}>
      <DiamondTofuLogo logoLogo={diamondTofuLogoLogoLogo} />
      <div className="nav-bar">
        <Link className="text-wrapper-2" to={to}>
          About Us
        </Link>
        <div className="text-wrapper-2">Our Team</div>
        <div className="text-wrapper-2">Career</div>
        <Button selected={false} text="Log in" type="default" />
        <Button selected={false} text="Sign up" type="CTA" />
      </div>
    </div>
  );
};

Header.propTypes = {
  diamondTofuLogoLogoLogo: PropTypes.string,
  to: PropTypes.string,
};
