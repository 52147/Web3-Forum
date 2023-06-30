/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsArrowsRedo2 } from "../../icons/IconsArrowsRedo2";
import { IconsArrowsUndo2 } from "../../icons/IconsArrowsUndo2";
import { IconsContentInsertimage1 } from "../../icons/IconsContentInsertimage1";
import { IconsContentInsertlink1 } from "../../icons/IconsContentInsertlink1";
import { IconsContentInsertmore1 } from "../../icons/IconsContentInsertmore1";
import { IconsContentSmile } from "../../icons/IconsContentSmile";
import { IconsFormattingBold1 } from "../../icons/IconsFormattingBold1";
import { IconsFormattingItalic } from "../../icons/IconsFormattingItalic";
import { IconsFormattingTextmore2 } from "../../icons/IconsFormattingTextmore2";
import { IconsFormattingUnderline1 } from "../../icons/IconsFormattingUnderline1";
import { IconsParagraphAligncenter1 } from "../../icons/IconsParagraphAligncenter1";
import { IconsParagraphAlignleft1 } from "../../icons/IconsParagraphAlignleft1";
import { IconsParagraphOrderedlist1 } from "../../icons/IconsParagraphOrderedlist1";
import { IconsParagraphParagraphmore1 } from "../../icons/IconsParagraphParagraphmore1";
import { IconsStandardMore1 } from "../../icons/IconsStandardMore1";
import "./style.css";

export const EditorsPrimaryFull = ({ className, mainClassName }) => {
  return (
    <div className={`editors-primary-full ${className}`}>
      <div className={`main-2 ${mainClassName}`}>
        <div className="standard">
          <div className="div-2">
            <IconsFormattingBold1 className="icon-instance-node" />
            <IconsFormattingItalic className="icon-instance-node" />
            <IconsFormattingUnderline1 className="icon-instance-node" />
            <IconsFormattingTextmore2 className="icon-instance-node" />
          </div>
          <div className="div-2">
            <IconsParagraphAlignleft1 className="icon-instance-node" />
            <IconsParagraphAligncenter1 className="icon-instance-node" />
            <IconsParagraphOrderedlist1 className="icon-instance-node" />
            <IconsParagraphParagraphmore1 className="icon-instance-node" />
          </div>
          <div className="div-2">
            <IconsContentInsertlink1 className="icon-instance-node" />
            <IconsContentInsertimage1 className="icon-instance-node" />
            <IconsContentSmile className="icon-instance-node" />
            <IconsContentInsertmore1 className="icon-instance-node" />
          </div>
        </div>
        <div className="div-2">
          <IconsArrowsUndo2 className="icon-instance-node" />
          <IconsArrowsRedo2 className="icon-instance-node" />
          <IconsStandardMore1 className="icon-instance-node" />
        </div>
      </div>
    </div>
  );
};
