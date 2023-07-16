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
  diamondTofuLogoWrapperLogoLogo = "https://generation-sessions.s3.amazonaws.com/8302eaad4b5ef80aafcda7a27455f034/img/logo-2.svg",
  diamondTofuLogoWrapperLogoLogoClassName,
}) => {
  return (
    <div className={`header ${className}`}>
      <DiamondTofuLogoWrapper
        logoLogo={diamondTofuLogoWrapperLogoLogo}
        logoLogoClassName={diamondTofuLogoWrapperLogoLogoClassName}
      />
      <div className="nav-bar">
        <div className="text-wrapper-6">About Us</div>
        <div className="text-wrapper-6">Our Team</div>
        <div className="text-wrapper-6">Career</div>
        <Button selected={false} text="Log in" type="default" />
        <Button selected={false} text="Sign up" type="CTA" />
      </div>
    </div>
  );
};

Header.propTypes = {
  diamondTofuLogoWrapperLogoLogo: PropTypes.string,
};
