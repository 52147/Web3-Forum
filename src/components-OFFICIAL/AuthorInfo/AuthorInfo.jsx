/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../../icons-OFFICIAL/Avatar";
import { Avatar2 } from "../../icons-OFFICIAL/Avatar2";
import "./style.css";

export const AuthorInfo = ({
  time = true,
  showAvatar = true,
  type,
  text = "Emma｜Level 1 - Extra Soft Tofu",
  text1 = "5 hours ago",
}) => {
  return (
    <div className={`author-info ${type}`}>
      {type === "main" && (
        <div className="frame">
          {showAvatar && <Avatar className="avatar-instance" />}

          <div className="div">
            <p className="text-wrapper-2">{text}</p>
            {time && <div className="element-hours-ago">{text1}</div>}
          </div>
        </div>
      )}

      {["comment", "name-level"].includes(type) && (
        <>
          <Avatar2 className="avatar-2" />
          <div className="frame-2">
            <div className="text-wrapper-2">Author</div>
            <div className="element-hours-ago">
              {type === "comment" && <>｜5 hours ago</>}

              {type === "name-level" && <>｜Level 1</>}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

AuthorInfo.propTypes = {
  time: PropTypes.bool,
  showAvatar: PropTypes.bool,
  type: PropTypes.oneOf(["name-level", "main", "comment"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
