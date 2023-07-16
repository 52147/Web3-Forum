import React from "react";
import { DiamondTofuLogo } from "../../components-USER/DiamondTofuLogo";
import { Header } from "../../components-USER/Header";
import { TofuSingle } from "../../components-USER/TofuSingle";
import { UserTabGroup } from "../../components-USER/UserTabGroup";
import { Avatar } from "../../icons-USER/Avatar";
import { XnixLineCall } from "../../icons-USER/XnixLineCall";
import { XnixLineMapMarker2 } from "../../icons-USER/XnixLineMapMarker2";
import "./style.css";

export const UserPageMain = () => {
  return (
    <div className="app-container">
      <div className="user-page-main">
        <div className="content-area">
          <div className="overlap-group">
            <img
              className="cover"
              alt="Cover"
              src="https://generation-sessions.s3.amazonaws.com/139904ab1a277e055fd92374fa28d752/img/cover.svg"
            />
            <Avatar className="avatar-instance" />
            <img
              className="settings"
              alt="Settings"
              src="https://generation-sessions.s3.amazonaws.com/139904ab1a277e055fd92374fa28d752/img/settings.svg"
            />
          </div>
          <div className="frame-4">
            <div className="frame-5">
              <h1 className="h-1">Author</h1>
              <div className="text-wrapper-8">Say something about yourself</div>
            </div>
            <div className="frame-6">
              <div className="frame-7">
                <img
                  className="img"
                  alt="Location on"
                  src="https://generation-sessions.s3.amazonaws.com/139904ab1a277e055fd92374fa28d752/img/location-on.svg"
                />
                <div className="text-wrapper-9">Boston, MA, USA</div>
              </div>
              <div className="frame-8">
                <img
                  className="img"
                  alt="Date range"
                  src="https://generation-sessions.s3.amazonaws.com/139904ab1a277e055fd92374fa28d752/img/date-range.svg"
                />
                <div className="text-wrapper-9">Joined in June, 2023</div>
              </div>
            </div>
            <div className="frame-9">
              <TofuSingle
                className="tofu-single-instance"
                property1="default"
                propertyDefault="https://generation-sessions.s3.amazonaws.com/139904ab1a277e055fd92374fa28d752/img/tofu-single.svg"
              />
              <p className="p">Level 1 - Extra Soft Tofu</p>
            </div>
          </div>
          <Header
            className="header-instance"
            diamondTofuLogoWrapperLogoLogo="https://generation-sessions.s3.amazonaws.com/139904ab1a277e055fd92374fa28d752/img/logo-2-6.svg"
            diamondTofuLogoWrapperLogoLogoClassName="design-component-instance-node"
          />
          <UserTabGroup className="user-tab-group-instance" />
        </div>
        <div className="footer-area">
          <footer className="footer">
            <DiamondTofuLogo
              className="diamond-tofu-logo-footer"
              logoLogo="https://generation-sessions.s3.amazonaws.com/139904ab1a277e055fd92374fa28d752/img/logo-2-5.svg"
              logoLogoClassName="diamond-tofu-logo-instance"
            />
            <div className="frame-2">
              <div className="frame-3">
                <XnixLineCall className="icon-instance-node" />
                <div className="text-wrapper-7">1-714-889-225</div>
              </div>
              <div className="frame-3">
                <div className="icon-instance-node">
                  <div className="vector" />
                </div>
                <div className="text-wrapper-7">diamondtofu@gmail.com</div>
              </div>
              <div className="frame-3">
                <XnixLineMapMarker2 className="icon-instance-node" />
                <p className="text-wrapper-7">1 Leighton St, Cambridge, MA</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
