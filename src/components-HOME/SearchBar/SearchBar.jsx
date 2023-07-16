/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { XnixLineSearch } from "../../icons-HOME/XnixLineSearch";
import "./style.css";

export const SearchBar = ({ icon = true }) => {
  return (
    <div className="search-bar">
      {icon && <XnixLineSearch className="xnix-line-search" />}

      <div className="search-all">Search all discussions</div>
    </div>
  );
};

SearchBar.propTypes = {
  icon: PropTypes.bool,
};
