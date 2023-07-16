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
  diamondTofuLogoLogoLogoClassName,
  diamondTofuLogoLogoLogo = "https://generation-sessions.s3.amazonaws.com/e1191b0ef874fc28675b0d89aede58fa/img/logo-2-3.svg",
  visible = true,
}) => {
  return (
    <div className={`header ${className}`}>
      <DiamondTofuLogo logoLogo={diamondTofuLogoLogoLogo} logoLogoClassName={diamondTofuLogoLogoLogoClassName} />
      <div className="nav-bar">
        <div className="text-wrapper-2">About Us</div>
        <div className="text-wrapper-2">Our Team</div>
        <div className="text-wrapper-2">Career</div>
        <Button selected={false} text="Log in" type="default" />
        {visible && <Button selected={false} text="Sign up" type="CTA" />}
      </div>
    </div>
  );
};

Header.propTypes = {
  diamondTofuLogoLogoLogo: PropTypes.string,
  visible: PropTypes.bool,
};
