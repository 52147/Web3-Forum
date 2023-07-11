import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TofuSingle } from "../../components/TofuSingle";
import { DownArrow1 } from "../../icons/DownArrow1";
import "./style.css";

export const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="div-2">
        <div className="overlap-group">
          <img className="line" alt="Line" src="/img/line-17.svg" />
          <img className="img" alt="Line" src="/img/line-17.svg" />
          <img className="line-2" alt="Line" src="/img/line-17.svg" />
          <img className="line-3" alt="Line" src="/img/line-17.svg" />
          <DownArrow1 className="down-arrow-1" />
          <DownArrow1 className="down-arrow-3" />
          <div className="frame-3">
            <div className="introduction">
              <div className="frame-4">
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="frame-5">
                      <h1 className="text-wrapper-6">Introducing Web3 Forum</h1>
                      <p className="text-wrapper-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa faucibus
                        convallis ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget
                        porttitor arcu, quis hendrerit felis. <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa faucibus
                        convallis ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget
                        porttitor arcu, quis hendrerit felis.
                      </p>
                    </div>
                  </div>
                </div>
                <TofuSingle
                  className="tofu-single-instance"
                  property1="default"
                  propertyDefault="/img/tofu-single-2.svg"
                />
                <div className="rectangle-2" />
              </div>
            </div>
            <div className="our-vision">
              <div className="frame-4">
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="frame-5">
                      <div className="text-wrapper-6">Our Vision + Mission</div>
                      <div className="text-wrapper-7">
                        Equality
                        <br />
                        Communication without boundary
                      </div>
                    </div>
                  </div>
                </div>
                <TofuSingle
                  className="tofu-single-instance"
                  property1="default"
                  propertyDefault="/img/tofu-single.svg"
                />
                <div className="rectangle-2" />
              </div>
            </div>
            <div className="our-team">
              <div className="frame-4">
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="frame-5">
                      <div className="text-wrapper-6">Our Team</div>
                      <p className="text-wrapper-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa faucibus
                        convallis ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget
                        porttitor arcu, quis hendrerit felis. <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa faucibus
                        convallis ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget
                        porttitor arcu, quis hendrerit felis.
                      </p>
                    </div>
                  </div>
                </div>
                <TofuSingle
                  className="tofu-single-instance"
                  property1="default"
                  propertyDefault="/img/tofu-single.svg"
                />
                <div className="rectangle-2" />
              </div>
            </div>
          </div>
        </div>
        <Header className="header-instance" diamondTofuLogoLogoLogo="/img/logo-2-2.svg" to="/about-us-page" />
        <Footer
          className="footer-instance"
          diamondTofuLogoWrapperLogoLogo="/img/logo-2-1.svg"
          xnixLineEnvelopeRectangleClassName="design-component-instance-node"
        />
      </div>
    </div>
  );
};
