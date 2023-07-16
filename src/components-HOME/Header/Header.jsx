/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { DiamondTofuLogoWrapper } from "../DiamondTofuLogoWrapper";
import "./style.css";

export const Header = ({
  className,
  diamondTofuLogoWrapperLogoLogoClassName,
  diamondTofuLogoWrapperLogoLogo = "https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/logo-2-6.svg",
}) => {
  return (
    <div className={`header ${className}`}>
      <DiamondTofuLogoWrapper
        logoLogo={diamondTofuLogoWrapperLogoLogo}
        logoLogoClassName={diamondTofuLogoWrapperLogoLogoClassName}
        to="/home-page"
      />
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
  diamondTofuLogoWrapperLogoLogo: PropTypes.string,
};
