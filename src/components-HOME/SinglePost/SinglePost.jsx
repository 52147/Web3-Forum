/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DownArrow } from "../../icons-HOME/DownArrow";
import { RightArrow } from "../../icons-HOME/RightArrow";
import { XnixLineMessage210 } from "../../icons-HOME/XnixLineMessage210";
import { PostInfo } from "../PostInfo";
import { Tags } from "../Tags";
import { UpDownButton } from "../UpDownButton";
import { XnixLineBook } from "../XnixLineBook";
import { XnixLineUser } from "../XnixLineUser";
import "./style.css";

export const SinglePost = ({
  showTagGroup = true,
  showPostPreview = true,
  hasImage = true,
  showImage,
  type,
  className,
  text = "Lorem ipsum dfsoj sdfi",
  text1 = "Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj",
  override = <XnixLineMessage210 className="xnix-line-message-2-10" />,
  postInfoIconButtonXnixLineBookVectorClassName,
  override1 = (
    <XnixLineUser
      className="xnix-line-user-instance"
      img="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-12-13.svg"
      vector="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-11-12.svg"
    />
  ),
  postInfoIconButtonXnixLineBookVector,
  postInfoIconButtonXnixLineBookOverlapGroupClassName,
  postInfoIconButtonXnixLineBookImg,
  postInfoIconButtonXnixLineBookVectorClassNameOverride,
  postInfoIconButtonXnixLineBookImgClassName,
  postInfoIconButtonXnixLineBookVector1,
  override2 = <DownArrow className="xnix-line-message-2-10" />,
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
  override3 = (
    <XnixLineBook
      className="xnix-line-user-instance"
      img="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-17-12.svg"
      vector="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-16-12.svg"
      vector1="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-18-12.svg"
    />
  ),
}) => {
  const [state, dispatch] = useReducer(reducer, {
    showImage: showImage || true,
    type: type || "default",
  });

  return (
    <div className={`single-post show-image-${state.showImage} ${className}`}>
      <div className="frame">
        <div className="frame-2">
          <div className="lorem-ipsum-dfsoj">{text}</div>
          {!state.showImage && <p className="post-preview-nemo">{text1}</p>}

          {state.showImage && (
            <>
              <>{showPostPreview && <p className="post-preview-nemo">{text1}</p>}</>
            </>
          )}
        </div>
        <PostInfo
          className={`${!state.showImage && "class"}`}
          iconButton={
            !state.showImage ? (
              <XnixLineUser
                className="xnix-line-user-instance"
                img="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-12-12.svg"
                vector="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-11-11.svg"
              />
            ) : undefined
          }
          iconButton1={
            !state.showImage ? (
              <XnixLineBook
                className="xnix-line-user-instance"
                img="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-17-11.svg"
                vector="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-16-11.svg"
                vector1="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-18-11.svg"
              />
            ) : undefined
          }
          iconButtonXnixLineBookImg={state.showImage ? postInfoIconButtonXnixLineBookVector1 : undefined}
          iconButtonXnixLineBookImgClassName={state.showImage ? postInfoIconButtonXnixLineBookImgClassName : undefined}
          iconButtonXnixLineBookOverlapGroupClassName={
            state.showImage ? postInfoIconButtonXnixLineBookOverlapGroupClassName : undefined
          }
          iconButtonXnixLineBookVector={state.showImage ? postInfoIconButtonXnixLineBookVector : undefined}
          iconButtonXnixLineBookVector1={state.showImage ? postInfoIconButtonXnixLineBookImg : undefined}
          iconButtonXnixLineBookVectorClassName={
            state.showImage ? postInfoIconButtonXnixLineBookVectorClassNameOverride : undefined
          }
          iconButtonXnixLineBookVectorClassNameOverride={
            state.showImage ? postInfoIconButtonXnixLineBookVectorClassName : undefined
          }
          override={!state.showImage ? <XnixLineMessage210 className="xnix-line-message-2-10" /> : undefined}
        />
      </div>
      {state.showImage && (
        <>
          <>
            {showTagGroup && (
              <div className="tag-group">
                <Tags selected text="Travel Wedding" />
                <Tags selected text="Lifestyle" />
                <Tags selected text="Clothes" />
              </div>
            )}
          </>
        </>
      )}

      {!state.showImage && (
        <div className="tag-group">
          <Tags selected text="Travel Wedding" />
          <Tags selected text="Lifestyle" />
          <Tags selected text="Clothes" />
        </div>
      )}

      {hasImage && (
        <UpDownButton
          icon={!state.showImage ? <RightArrow className="xnix-line-message-2-10" /> : undefined}
          moreTopicsClassName="up-down-button-instance"
          onClick={() => {
            dispatch("click_613");
          }}
          text={!state.showImage ? "Show images" : "Hide images"}
        />
      )}

      {state.showImage && (
        <>
          <>
            {hasImage && (
              <div className="frame-3">
                <div className={`rectangle ${rectangleClassName}`} />
                {hasImage && <div className={`rectangle ${rectangleClassNameOverride}`} />}

                {hasImage && <div className={`rectangle-2 ${divClassName}`} />}
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        showImage: false,
      };

    case "click_613":
      return {
        ...state,
        showImage: true,
      };
  }

  return state;
}

SinglePost.propTypes = {
  showTagGroup: PropTypes.bool,
  showPostPreview: PropTypes.bool,
  hasImage: PropTypes.bool,
  showImage: PropTypes.bool,
  type: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  postInfoIconButtonXnixLineBookVector: PropTypes.string,
  postInfoIconButtonXnixLineBookImg: PropTypes.string,
  postInfoIconButtonXnixLineBookVector1: PropTypes.string,
};
