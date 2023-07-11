/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { XnixLineCall2 } from "../../icons/XnixLineCall2";
import { XnixLineMapMarker2 } from "../../icons/XnixLineMapMarker2";
import { DiamondTofuLogoWrapper } from "../DiamondTofuLogoWrapper";
import { XnixLineEnvelope } from "../XnixLineEnvelope";
import "./style.css";

export const Footer = ({
  className,
  diamondTofuLogoWrapperLogoLogo = "/img/logo-2.svg",
  xnixLineEnvelopeRectangleClassName,
}) => {
  return (
    <div className={`footer ${className}`}>
      <DiamondTofuLogoWrapper className="diamond-tofu-logo-footer" logoLogo={diamondTofuLogoWrapperLogoLogo} />
      <div className="frame">
        <div className="frame-2">
          <XnixLineCall2 className="icon-instance-node" />
          <div className="text-wrapper-5">1-714-889-225</div>
        </div>
        <div className="frame-2">
          <XnixLineEnvelope
            className="xnix-line-envelope-instance"
            rectangle="/img/rectangle-1557-2.svg"
            rectangleClassName={xnixLineEnvelopeRectangleClassName}
          />
          <div className="text-wrapper-5">diamondtofu@gmail.com</div>
        </div>
        <div className="frame-2">
          <XnixLineMapMarker2 className="icon-instance-node" />
          <p className="text-wrapper-5">1 Leighton St, Cambridge, MA</p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  diamondTofuLogoWrapperLogoLogo: PropTypes.string,
};