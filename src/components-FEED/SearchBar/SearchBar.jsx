/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { XnixLineSearch2 } from "../../icons-FEED/XnixLineSearch2";
import "./style.css";

export const SearchBar = ({ className }) => {
  return (
    <div className={`search-bar ${className}`}>
      <XnixLineSearch2 className="xnix-line-search" />
      <div className="search-all">Search all discussions</div>
    </div>
  );
};
