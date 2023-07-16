/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconsContentHorizontalline } from "../../icons-START/IconsContentHorizontalline";
import { IconsContentInsertimage1 } from "../../icons-START/IconsContentInsertimage1";
import { IconsContentInsertvideo } from "../../icons-START/IconsContentInsertvideo";
import { IconsParagraphOrderedlist1 } from "../../icons-START/IconsParagraphOrderedlist1";
import { IconsParagraphUnorderedlist } from "../../icons-START/IconsParagraphUnorderedlist";
import { IconsStandardAdd1 } from "../../icons-START/IconsStandardAdd1";
import { IconsStandardCancel } from "../../icons-START/IconsStandardCancel";
import { IconsStandardInsertembed } from "../../icons-START/IconsStandardInsertembed";
import { IconsTablesCellsInserttable } from "../../icons-START/IconsTablesCellsInserttable";
import "./style.css";

export const Editors = ({ open, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    open: open,
  });

  return (
    <div
      className={`editors open-${state.open} ${className}`}
      onClick={() => {
        dispatch("click_162");
      }}
    >
      {state.open && (
        <>
          <div
            className="quick-insert"
            onClick={() => {
              dispatch("click");
            }}
          >
            <IconsStandardCancel className="instance-node" />
          </div>
          <div className="inserts">
            <div className="div-3">
              <IconsContentInsertimage1 className="instance-node" />
            </div>
            <div className="div-3">
              <IconsContentInsertvideo className="instance-node" />
            </div>
            <div className="div-3">
              <IconsStandardInsertembed className="instance-node" />
            </div>
            <div className="div-3">
              <IconsTablesCellsInserttable className="instance-node" />
            </div>
            <div className="div-3">
              <IconsParagraphUnorderedlist className="instance-node" />
            </div>
            <div className="div-3">
              <IconsParagraphOrderedlist1 className="instance-node" />
            </div>
            <div className="div-3">
              <IconsContentHorizontalline className="instance-node" />
            </div>
          </div>
        </>
      )}

      {!state.open && <IconsStandardAdd1 className="instance-node" />}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        open: false,
      };

    case "click_162":
      return {
        ...state,
        open: true,
      };
  }

  return state;
}

Editors.propTypes = {
  open: PropTypes.bool,
};
