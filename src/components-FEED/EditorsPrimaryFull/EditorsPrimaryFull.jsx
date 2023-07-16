/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsArrowsRedo } from "../../icons-FEED/IconsArrowsRedo";
import { IconsArrowsUndo } from "../../icons-FEED/IconsArrowsUndo";
import { IconsContentInsertimage1 } from "../../icons-FEED/IconsContentInsertimage1";
import { IconsContentInsertlink1 } from "../../icons-FEED/IconsContentInsertlink1";
import { IconsContentInsertmore1 } from "../../icons-FEED/IconsContentInsertmore1";
import { IconsContentSmile1 } from "../../icons-FEED/IconsContentSmile1";
import { IconsFormattingBold2 } from "../../icons-FEED/IconsFormattingBold2";
import { IconsFormattingItalic2 } from "../../icons-FEED/IconsFormattingItalic2";
import { IconsFormattingTextmore1 } from "../../icons-FEED/IconsFormattingTextmore1";
import { IconsFormattingUnderline1 } from "../../icons-FEED/IconsFormattingUnderline1";
import { IconsParagraphAligncenter1 } from "../../icons-FEED/IconsParagraphAligncenter1";
import { IconsParagraphAlignleft1 } from "../../icons-FEED/IconsParagraphAlignleft1";
import { IconsParagraphOrderedlist1 } from "../../icons-FEED/IconsParagraphOrderedlist1";
import { IconsParagraphParagraphmore1 } from "../../icons-FEED/IconsParagraphParagraphmore1";
import { IconsStandardMore1 } from "../../icons-FEED/IconsStandardMore1";
import "./style.css";

export const EditorsPrimaryFull = ({ className, mainClassName }) => {
  return (
    <div className={`editors-primary-full ${className}`}>
      <div className={`main-2 ${mainClassName}`}>
        <div className="standard">
          <div className="div-2">
            <IconsFormattingBold2 className="icon-instance-node" />
            <IconsFormattingItalic2 className="icon-instance-node" />
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
          <IconsArrowsUndo className="icon-instance-node" />
          <IconsArrowsRedo className="icon-instance-node" />
          <IconsStandardMore1 className="icon-instance-node" />
        </div>
      </div>
    </div>
  );
};
