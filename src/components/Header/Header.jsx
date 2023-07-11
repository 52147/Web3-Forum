/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Button } from "../Button1";
import { DiamondTofuLogo } from "../DiamondTofuLogo";
import "./style.css";

export const Header = ({ className, diamondTofuLogoLogoLogo = "/img/logo-2-4.svg", to }) => {
  return (
    <div className={`header ${className}`}>
      <DiamondTofuLogo logoLogo={diamondTofuLogoLogoLogo} />
      <div className="nav-bar">
        <Link className="text-wrapper-2" to={to}>
          About Us
        </Link>
        <div className="text-wrapper-2">Our Team</div>
        <div className="text-wrapper-2">Career</div>
=======
import { Button } from "../Button";
import { DiamondTofuLogoWrapper } from "../DiamondTofuLogoWrapper";
import "./style.css";

export const Header = ({
  className,
  diamondTofuLogoWrapperLogoLogoClassName,
  diamondTofuLogoWrapperLogoLogo = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/logo-2-6.svg",
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
>>>>>>> dev
        <Button selected={false} text="Log in" type="default" />
        <Button selected={false} text="Sign up" type="CTA" />
      </div>
    </div>
  );
};

Header.propTypes = {
<<<<<<< HEAD
  diamondTofuLogoLogoLogo: PropTypes.string,
  to: PropTypes.string,
=======
  diamondTofuLogoWrapperLogoLogo: PropTypes.string,
>>>>>>> dev
};
