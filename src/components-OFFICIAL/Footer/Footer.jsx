/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { XnixLineCall } from "../../icons-OFFICIAL/XnixLineCall";
import { XnixLineMapMarker } from "../../icons-OFFICIAL/XnixLineMapMarker";
import { DiamondTofuLogoWrapper } from "../DiamondTofuLogoWrapper";
import { XnixLineEnvelope } from "../XnixLineEnvelope";
import "./style.css";

export const Footer = ({
  className,
  diamondTofuLogoWrapperLogoLogo = "https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/logo-2.svg",
  xnixLineEnvelopeRectangleClassName,
}) => {
  return (
    <div className={`footer ${className}`}>
      <DiamondTofuLogoWrapper className="diamond-tofu-logo-footer" logoLogo={diamondTofuLogoWrapperLogoLogo} />
      <div className="frame-3">
        <div className="frame-4">
          <XnixLineCall className="icon-instance-node" />
          <div className="text-wrapper-8">1-714-889-225</div>
        </div>
        <div className="frame-4">
          <XnixLineEnvelope
            className="xnix-line-envelope-instance"
            rectangle="https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/rectangle-1557-2.svg"
            rectangleClassName={xnixLineEnvelopeRectangleClassName}
          />
          <div className="text-wrapper-8">diamondtofu@gmail.com</div>
        </div>
        <div className="frame-4">
          <XnixLineMapMarker className="icon-instance-node" />
          <p className="text-wrapper-8">1 Leighton St, Cambridge, MA</p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  diamondTofuLogoWrapperLogoLogo: PropTypes.string,
};
