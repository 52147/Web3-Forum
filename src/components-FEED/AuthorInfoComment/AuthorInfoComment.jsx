/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../../icons-FEED/Avatar";
import "./style.css";

export const AuthorInfoComment = ({
  time = true,
  showAvatar = true,
  className,
  icon = <Avatar className="avatar-15" />,
}) => {
  return (
    <div className={`author-info-comment ${className}`}>
      {showAvatar && <>{icon}</>}

      <div className="frame-3">
        <div className="author">Author</div>
        <div className="element-hours-ago-2">｜5 hours ago</div>
      </div>
    </div>
  );
};

AuthorInfoComment.propTypes = {
  time: PropTypes.bool,
  showAvatar: PropTypes.bool,
};
