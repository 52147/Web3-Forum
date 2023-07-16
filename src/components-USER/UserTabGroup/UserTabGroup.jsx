/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const UserTabGroup = ({ className }) => {
  return (
    <div className={`user-tab-group ${className}`}>
      <div className="frame">
        <div className="posts">Posts</div>
        <div className="element">10</div>
      </div>
      <div className="frame">
        <div className="text-wrapper-6">Comments</div>
        <div className="element">24</div>
      </div>
      <div className="frame">
        <div className="text-wrapper-6">Likes</div>
        <div className="element">500</div>
      </div>
      <div className="frame">
        <div className="text-wrapper-6">Collects</div>
        <div className="element">52</div>
      </div>
      <div className="frame">
        <div className="text-wrapper-6">Following</div>
        <div className="element">35</div>
      </div>
      <div className="frame">
        <div className="text-wrapper-6">Followers</div>
        <div className="element">5</div>
      </div>
    </div>
  );
};
