/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DownArrow } from "../../icons-HOME/DownArrow";
import "./style.css";

export const Button = ({ hasIcon = true, text = "Button", selected, type }) => {
  const [state, dispatch] = useReducer(reducer, {
    selected: selected,

    type: type || "default",
  });

  return (
    <div
      className={`button ${state.type} selected-${state.selected}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="text-wrapper-4">{text}</div>
      {state.type === "drop-down" && (
        <>
          <>{hasIcon && <DownArrow className="down-arrow" />}</>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.selected === false && state.type === "default") {
    switch (action) {
      case "click":
        return {
          selected: true,
          type: "default",
        };
    }
  }

  if (state.selected === true && state.type === "default") {
    switch (action) {
      case "click":
        return {
          selected: false,
          type: "default",
        };
    }
  }

  return state;
}

Button.propTypes = {
  hasIcon: PropTypes.bool,
  text: PropTypes.string,
  selected: PropTypes.bool,
  type: PropTypes.oneOf(["drop-down", "CTA", "default"]),
};
