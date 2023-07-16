/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PlusSign2 } from "../../icons-HOME/PlusSign2";
import "./style.css";

export const Tags = ({ showPlusSign = true, text = "Ai", selected }) => {
  return (
    <div className={`tags selected-0-${selected}`}>
      {!selected && (
        <>
          <>{showPlusSign && <PlusSign2 className="plus-sign" color="black" />}</>
        </>
      )}

      <div className="ai">{text}</div>
    </div>
  );
};

Tags.propTypes = {
  showPlusSign: PropTypes.bool,
  text: PropTypes.string,
  selected: PropTypes.bool,
};
