/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { DiamondTofuLogo } from "../DiamondTofuLogo";
import "./style.css";

export const Header = ({
  className,
  diamondTofuLogoLogoLogo = "https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/logo-2-3.svg",
}) => {
  return (
    <div className={`header ${className}`}>
      <DiamondTofuLogo logoLogo={diamondTofuLogoLogoLogo} />
      <div className="nav-bar">
        <div className="text-wrapper-5">About Us</div>
        <div className="text-wrapper-5">Our Team</div>
        <div className="text-wrapper-5">Career</div>
        <Button selected={false} text="Log in" type="default" />
        <Button selected={false} text="Sign up" type="CTA" />
      </div>
    </div>
  );
};

Header.propTypes = {
  diamondTofuLogoLogoLogo: PropTypes.string,
};
