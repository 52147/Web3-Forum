/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsArrowsRedo2 } from "../../icons-START/IconsArrowsRedo2";
import { IconsArrowsUndo2 } from "../../icons-START/IconsArrowsUndo2";
import { IconsContentInsertimage1 } from "../../icons-START/IconsContentInsertimage1";
import { IconsContentInsertlink1 } from "../../icons-START/IconsContentInsertlink1";
import { IconsContentInsertmore1 } from "../../icons-START/IconsContentInsertmore1";
import { IconsContentSmile1 } from "../../icons-START/IconsContentSmile1";
import { IconsFormattingBold } from "../../icons-START/IconsFormattingBold";
import { IconsFormattingItalic } from "../../icons-START/IconsFormattingItalic";
import { IconsFormattingTextmore1 } from "../../icons-START/IconsFormattingTextmore1";
import { IconsFormattingUnderline1 } from "../../icons-START/IconsFormattingUnderline1";
import { IconsParagraphAligncenter1 } from "../../icons-START/IconsParagraphAligncenter1";
import { IconsParagraphAlignleft1 } from "../../icons-START/IconsParagraphAlignleft1";
import { IconsParagraphOrderedlist1 } from "../../icons-START/IconsParagraphOrderedlist1";
import { IconsParagraphParagraphmore1 } from "../../icons-START/IconsParagraphParagraphmore1";
import { IconsStandardMore1 } from "../../icons-START/IconsStandardMore1";
import "./style.css";

export const EditorsPrimaryFull = ({ className, mainClassName }) => {
  return (
    <div className={`editors-primary-full ${className}`}>
      <div className={`main ${mainClassName}`}>
        <div className="standard">
          <div className="div-2">
            <IconsFormattingBold className="icon-instance-node" />
            <IconsFormattingItalic className="icon-instance-node" />
            <IconsFormattingUnderline1 className="icon-instance-node" />
            <IconsFormattingTextmore1 className="icon-instance-node" />
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
            <IconsContentSmile1 className="icon-instance-node" />
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
