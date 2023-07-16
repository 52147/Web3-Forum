import React from "react";
import { Button } from "../../components-START/Button";
import { DiamondTofuLogoWrapper } from "../../components-START/DiamondTofuLogoWrapper";
import { Editors } from "../../components-START/Editors";
import { EditorsPrimaryFull } from "../../components-START/EditorsPrimaryFull";
import { Header } from "../../components-START/Header";
import { RoundButton } from "../../components-START/RoundButton";
import { Tags } from "../../components-START/Tags";
import { VerticalLine } from "../../icons-START/VerticalLine";
import { XnixLineCall } from "../../icons-START/XnixLineCall";
import { XnixLineMapMarker } from "../../icons-START/XnixLineMapMarker";
import "./style.css";

export const StartPost = () => {
  return (
    <div className="start-post">
      <div className="div-4">
        <Header
          className="header-instance"
          diamondTofuLogoLogoLogo="https://generation-sessions.s3.amazonaws.com/e1191b0ef874fc28675b0d89aede58fa/img/logo-2-6.svg"
          diamondTofuLogoLogoLogoClassName="design-component-instance-node"
          visible={false}
        />
        <div className="classic-editor">
          <EditorsPrimaryFull className="editors-primary-full-featured" mainClassName="editors-primary-full-instance" />
          <div className="overlap">
            <img
              className="divider"
              alt="Divider"
              src="https://generation-sessions.s3.amazonaws.com/e1191b0ef874fc28675b0d89aede58fa/img/divider-1.svg"
            />
            <div className="content">
              <div className="overlap-group">
                <div className="frame">
                  <div className="text-wrapper-5">Title</div>
                </div>
                <VerticalLine className="vertical-line" />
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-6">Text</div>
              </div>
              <Editors className="editors-instance" open={false} />
            </div>
          </div>
          <img
            className="img"
            alt="Divider"
            src="https://generation-sessions.s3.amazonaws.com/e1191b0ef874fc28675b0d89aede58fa/img/divider.svg"
          />
          <div className="frame-2">
            <Tags selected={false} showPlusSign={false} text="Lifestyle" />
            <Tags selected={false} showPlusSign={false} text="Clothing" />
            <Tags selected={false} showPlusSign={false} text="Fashion" />
            <Tags selected={false} text="Tag" />
          </div>
        </div>
        <div className="text-wrapper-7">Start your post in</div>
        <RoundButton className="round-button-instance" hasIcon={false} importance="primary" text="Post" />
        <RoundButton className="round-button-2" hasIcon={false} importance="secondary" text="Save draft" />
        <Button className="button-instance" selected={false} text="Choose a topic" type="drop-down" />
        <footer className="footer">
          <DiamondTofuLogoWrapper
            className="diamond-tofu-logo-footer"
            logoLogo="https://generation-sessions.s3.amazonaws.com/e1191b0ef874fc28675b0d89aede58fa/img/logo-2-5.svg"
            logoLogoClassName="diamond-tofu-logo-instance"
          />
          <div className="frame-3">
            <div className="frame-4">
              <XnixLineCall className="icon-instance-node-2" />
              <div className="text-wrapper-8">1-714-889-225</div>
            </div>
            <div className="frame-4">
              <div className="icon-instance-node-2">
                <div className="vector" />
              </div>
              <div className="text-wrapper-8">diamondtofu@gmail.com</div>
            </div>
            <div className="frame-4">
              <XnixLineMapMarker className="icon-instance-node-2" />
              <p className="text-wrapper-8">1 Leighton St, Cambridge, MA</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
