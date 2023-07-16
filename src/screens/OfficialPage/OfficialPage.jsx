import React from "react";
import { AuthorInfo } from "../../components-OFFICIAL/AuthorInfo";
import { Footer } from "../../components-OFFICIAL/Footer";
import { Header } from "../../components-OFFICIAL/Header";
import { IconButton } from "../../components-OFFICIAL/IconButton";
import { Language1 } from "../../icons-OFFICIAL/Language1";
import "./style.css";

export const OfficialPage = () => {
  return (
    <div className="official-page">
      <div className="div-2">
        <div className="frame-5">
          <div className="frame-6">
            <div className="frame-7">
              <h1 className="h-1">Communication Without Barrier</h1>
              <IconButton
                iconLocation="right"
                learningClassName="icon-button-instance"
                override={<Language1 className="language" />}
                size="large"
                text="Translate"
              />
            </div>
            <div className="lorem-ipsum-dolor-wrapper">
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa faucibus convallis
                ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget porttitor arcu, quis
                hendrerit felis. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa faucibus convallis
                ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget porttitor arcu, quis
                hendrerit felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa
                faucibus convallis ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget
                porttitor arcu, quis hendrerit felis. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa faucibus convallis
                ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget porttitor arcu, quis
                hendrerit felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa
                faucibus convallis ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget
                porttitor arcu, quis hendrerit felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                nec leo at massa faucibus convallis ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia.
                Nulla eget porttitor arcu, quis hendrerit felis. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur nec leo at massa faucibus convallis ultrices in enim. Aliquam porttitor sollicitudin
                arcu vitae lacinia. Nulla eget porttitor arcu, quis hendrerit felis.
              </p>
            </div>
            <img
              className="rectangle-2"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/rectangle-10.svg"
            />
            <div className="lorem-ipsum-dolor-wrapper">
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa faucibus convallis
                ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget porttitor arcu, quis
                hendrerit felis. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa faucibus convallis
                ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget porttitor arcu, quis
                hendrerit felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa
                faucibus convallis ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget
                porttitor arcu, quis hendrerit felis. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa faucibus convallis
                ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget porttitor arcu, quis
                hendrerit felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo at massa
                faucibus convallis ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia. Nulla eget
                porttitor arcu, quis hendrerit felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                nec leo at massa faucibus convallis ultrices in enim. Aliquam porttitor sollicitudin arcu vitae lacinia.
                Nulla eget porttitor arcu, quis hendrerit felis. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur nec leo at massa faucibus convallis ultrices in enim. Aliquam porttitor sollicitudin
                arcu vitae lacinia. Nulla eget porttitor arcu, quis hendrerit felis.
              </p>
            </div>
          </div>
          <AuthorInfo showAvatar={false} text="Diamond Tofu Team" text1="Updated on 06.13.2023" type="main" />
        </div>
        <Header
          className="header-instance"
          diamondTofuLogoLogoLogo="https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/logo-2-5.svg"
        />
        <Footer
          className="footer-instance"
          diamondTofuLogoWrapperLogoLogo="https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/logo-2-6.svg"
          xnixLineEnvelopeRectangleClassName="design-component-instance-node"
        />
      </div>
    </div>
  );
};
