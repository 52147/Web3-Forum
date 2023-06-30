import React from "react";
import { Button } from "../../components/Button";
import { DiamondTofuLogo } from "../../components/DiamondTofuLogo";
import { Header } from "../../components/Header";
import { IconButton } from "../../components/IconButton";
import { RoundButton } from "../../components/RoundButton";
import { SearchBar } from "../../components/SearchBar";
import { SinglePost } from "../../components/SinglePost";
import { UpDownButton } from "../../components/UpDownButton";
import { XnixLineBitcoin } from "../../components/XnixLineBitcoin";
import { XnixLineBook } from "../../components/XnixLineBook";
import { XnixLineGlasses } from "../../components/XnixLineGlasses";
import { XnixLineSuitcase } from "../../components/XnixLineSuitcase";
import { XnixLineUser } from "../../components/XnixLineUser";
import { DownArrow } from "../../icons/DownArrow";
import { UpArrow1 } from "../../icons/UpArrow1";
import { XnixLineCall2 } from "../../icons/XnixLineCall2";
import { XnixLineEmojiSmile } from "../../icons/XnixLineEmojiSmile";
import { XnixLineHeadphone } from "../../icons/XnixLineHeadphone";
import { XnixLineMapMarker } from "../../icons/XnixLineMapMarker";
import { XnixLineMessage210 } from "../../icons/XnixLineMessage210";
import { XnixLinePizzaSlice } from "../../icons/XnixLinePizzaSlice";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div-2">
        <footer className="footer">
          <DiamondTofuLogo
            className="diamond-tofu-logo-footer"
            logoLogo="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/logo-2-1.svg"
            logoLogoClassName="diamond-tofu-logo-instance"
          />
          <div className="frame-4">
            <div className="frame-5">
              <XnixLineCall2 className="icon-instance-node" />
              <div className="text-wrapper-6">1-714-889-225</div>
            </div>
            <div className="frame-5">
              <div className="icon-instance-node">
                <div className="vector-15" />
              </div>
              <div className="text-wrapper-6">diamondtofu@gmail.com</div>
            </div>
            <div className="frame-5">
              <XnixLineMapMarker className="icon-instance-node" />
              <p className="text-wrapper-6">1 Leighton St, Cambridge, MA</p>
            </div>
          </div>
        </footer>
        <div className="frame-6">
          <div className="h-1-wrapper">
            <h1 className="h-1">Most popular posts and authors in June</h1>
          </div>
          <div className="frame-7">
            <div className="text-wrapper-7">Communication without barrier</div>
          </div>
          <div className="p-wrapper">
            <p className="p">5 ways of earning NFT</p>
          </div>
          <div className="frame-8">
            <div className="overlap-group-5">
              <p className="text-wrapper-8">More things that you don’t know...</p>
            </div>
          </div>
        </div>
        <Header
          className="header-instance"
          diamondTofuLogoWrapperLogoLogo="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/logo-2.svg"
          diamondTofuLogoWrapperLogoLogoClassName="header-2"
        />
        <UpDownButton
          className="up-arrow-wrapper"
          icon={<UpArrow1 className="icon-instance-node" />}
          text="Back to top"
        />
        <div className="discussion">
          <div className="text-wrapper-9">Discussions</div>
          <div className="frame-9">
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/line-12.svg"
            />
            <SinglePost
              className="single-post-instance"
              divClassName="single-post-2"
              override={<XnixLineMessage210 className="icon-instance-node" />}
              override1={
                <XnixLineUser
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12-13.svg"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-11-12.svg"
                  vectorClassName="xnix-line-user-2"
                  vectorClassNameOverride="xnix-line-user-3"
                />
              }
              override2={<DownArrow className="icon-instance-node" />}
              postInfoIconButtonXnixLineBookImg="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-12.svg"
              postInfoIconButtonXnixLineBookImgClassName="design-component-instance-node-2"
              postInfoIconButtonXnixLineBookOverlapGroupClassName="design-component-instance-node-4"
              postInfoIconButtonXnixLineBookVector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-12.svg"
              postInfoIconButtonXnixLineBookVector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-12.svg"
              postInfoIconButtonXnixLineBookVectorClassName="design-component-instance-node-2"
              postInfoIconButtonXnixLineBookVectorClassNameOverride="design-component-instance-node-5"
              rectangleClassName="single-post-2"
              rectangleClassNameOverride="single-post-2"
              showImage
              text="What’s your experience of wedding planning post-covid?"
              text1="Hey yall, I’m getting married this July. Any suggestions on hotel choosing, wedding..."
              type="default"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/line-2.svg"
            />
            <SinglePost
              className="single-post-instance"
              hasImage={false}
              override={<XnixLineMessage210 className="icon-instance-node" />}
              override1={
                <XnixLineUser
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12-12.svg"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-11-11.svg"
                  vectorClassName="xnix-line-user-2"
                  vectorClassNameOverride="xnix-line-user-3"
                />
              }
              override3={
                <XnixLineBook
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-11.svg"
                  imgClassName="design-component-instance-node-5"
                  overlapGroupClassName="design-component-instance-node-4"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-11.svg"
                  vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-11.svg"
                  vectorClassName="design-component-instance-node-2"
                  vectorClassNameOverride="design-component-instance-node-2"
                />
              }
              showImage
              text="Lorem ipsum dfsoj sdfi"
              text1="Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj"
              type="default"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/line-2.svg"
            />
            <SinglePost
              className="single-post-instance"
              hasImage={false}
              override={<XnixLineMessage210 className="icon-instance-node" />}
              override1={
                <XnixLineUser
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12-12.svg"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-11-11.svg"
                  vectorClassName="xnix-line-user-2"
                  vectorClassNameOverride="xnix-line-user-3"
                />
              }
              override3={
                <XnixLineBook
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-11.svg"
                  imgClassName="design-component-instance-node-5"
                  overlapGroupClassName="design-component-instance-node-4"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-11.svg"
                  vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-11.svg"
                  vectorClassName="design-component-instance-node-2"
                  vectorClassNameOverride="design-component-instance-node-2"
                />
              }
              showImage
              text="Lorem ipsum dfsoj sdfi"
              text1="Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj"
              type="default"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/line-2.svg"
            />
            <SinglePost
              className="single-post-instance"
              hasImage={false}
              override={<XnixLineMessage210 className="icon-instance-node" />}
              override1={
                <XnixLineUser
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12-12.svg"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-11-11.svg"
                  vectorClassName="xnix-line-user-2"
                  vectorClassNameOverride="xnix-line-user-3"
                />
              }
              override3={
                <XnixLineBook
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-11.svg"
                  imgClassName="design-component-instance-node-5"
                  overlapGroupClassName="design-component-instance-node-4"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-11.svg"
                  vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-11.svg"
                  vectorClassName="design-component-instance-node-2"
                  vectorClassNameOverride="design-component-instance-node-2"
                />
              }
              showImage
              text="Lorem ipsum dfsoj sdfi"
              text1="Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj"
              type="default"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/line-2.svg"
            />
            <SinglePost
              className="single-post-instance"
              override={<XnixLineMessage210 className="icon-instance-node" />}
              override1={
                <XnixLineUser
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12-12.svg"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-11-11.svg"
                  vectorClassName="xnix-line-user-2"
                  vectorClassNameOverride="xnix-line-user-3"
                />
              }
              override2={<DownArrow className="icon-instance-node" />}
              override3={
                <XnixLineBook
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-11.svg"
                  imgClassName="design-component-instance-node-5"
                  overlapGroupClassName="design-component-instance-node-4"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-11.svg"
                  vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-11.svg"
                  vectorClassName="design-component-instance-node-2"
                  vectorClassNameOverride="design-component-instance-node-2"
                />
              }
              rectangleClassName="single-post-2"
              rectangleClassNameOverride="single-post-2"
              showImage
              text="Check out my newest tech gears folks!!"
              text1="Macbook magic mouse + Marshall retro speaker"
              type="default"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/line-6.svg"
            />
            <SinglePost
              className="single-post-instance"
              hasImage={false}
              override={<XnixLineMessage210 className="icon-instance-node" />}
              override1={
                <XnixLineUser
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12-4.svg"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-11-3.svg"
                  vectorClassName="xnix-line-user-2"
                  vectorClassNameOverride="xnix-line-user-3"
                />
              }
              override3={
                <XnixLineBook
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-4.svg"
                  imgClassName="design-component-instance-node-5"
                  overlapGroupClassName="design-component-instance-node-4"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-4.svg"
                  vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-4.svg"
                  vectorClassName="design-component-instance-node-2"
                  vectorClassNameOverride="design-component-instance-node-2"
                />
              }
              showImage
              text="Lorem ipsum dfsoj sdfi"
              text1="Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj"
              type="default"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/line-6.svg"
            />
            <SinglePost
              className="single-post-instance"
              hasImage={false}
              override={<XnixLineMessage210 className="icon-instance-node" />}
              override1={
                <XnixLineUser
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12-3.svg"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-11-3.svg"
                  vectorClassName="xnix-line-user-2"
                  vectorClassNameOverride="xnix-line-user-3"
                />
              }
              override3={
                <XnixLineBook
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-4.svg"
                  imgClassName="design-component-instance-node-5"
                  overlapGroupClassName="design-component-instance-node-4"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-4.svg"
                  vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-4.svg"
                  vectorClassName="design-component-instance-node-2"
                  vectorClassNameOverride="design-component-instance-node-2"
                />
              }
              showImage
              text="Lorem ipsum dfsoj sdfi"
              text1="Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj"
              type="default"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/line-6.svg"
            />
            <SinglePost
              className="single-post-instance"
              hasImage={false}
              override={<XnixLineMessage210 className="icon-instance-node" />}
              override1={
                <XnixLineUser
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12-3.svg"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-11-3.svg"
                  vectorClassName="xnix-line-user-2"
                  vectorClassNameOverride="xnix-line-user-3"
                />
              }
              override3={
                <XnixLineBook
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-4.svg"
                  imgClassName="design-component-instance-node-5"
                  overlapGroupClassName="design-component-instance-node-4"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-4.svg"
                  vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-4.svg"
                  vectorClassName="design-component-instance-node-2"
                  vectorClassNameOverride="design-component-instance-node-2"
                />
              }
              showImage
              text="Lorem ipsum dfsoj sdfi"
              text1="Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj"
              type="default"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/line-6.svg"
            />
            <SinglePost
              className="single-post-instance"
              hasImage={false}
              override={<XnixLineMessage210 className="icon-instance-node" />}
              override1={
                <XnixLineUser
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12-3.svg"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-11-3.svg"
                  vectorClassName="xnix-line-user-2"
                  vectorClassNameOverride="xnix-line-user-3"
                />
              }
              override3={
                <XnixLineBook
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-4.svg"
                  imgClassName="design-component-instance-node-5"
                  overlapGroupClassName="design-component-instance-node-4"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-4.svg"
                  vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-4.svg"
                  vectorClassName="design-component-instance-node-2"
                  vectorClassNameOverride="design-component-instance-node-2"
                />
              }
              showImage
              text="Lorem ipsum dfsoj sdfi"
              text1="Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj"
              type="default"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/line-6.svg"
            />
            <UpDownButton icon={<DownArrow className="icon-instance-node" />} text="More posts" />
          </div>
          <div className="frame-10">
            <Button selected={false} text="Newest" type="default" />
            <Button selected={false} text="Trending" type="default" />
            <Button selected={false} text="Most liked" type="default" />
            <Button selected={false} text="Location" type="drop-down" />
            <Button selected={false} text="More" type="drop-down" />
            <SearchBar />
          </div>
          <RoundButton className="round-button-instance" importance="primary" text="Start your post" />
        </div>
        <div className="topic">
          <div className="text-wrapper-10">Topics</div>
          <div className="topic-side-bar">
            <IconButton
              iconLocation="left"
              override={
                <XnixLineBook
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17.svg"
                  imgClassName="design-component-instance-node-5"
                  overlapGroupClassName="design-component-instance-node-4"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16.svg"
                  vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18.svg"
                  vectorClassName="design-component-instance-node-2"
                  vectorClassNameOverride="design-component-instance-node-2"
                />
              }
              size="large"
              text="Book"
            />
            <div className="icon-button-2">
              <div className="icon-instance-node">
                <div className="vector-16" />
              </div>
              <div className="learning-3">Tech</div>
            </div>
            <IconButton
              iconLocation="left"
              override={<XnixLineEmojiSmile className="icon-instance-node" />}
              size="large"
              text="Anime"
            />
            <IconButton
              iconLocation="left"
              override={<XnixLineHeadphone className="icon-instance-node" />}
              size="large"
              text="Gaming"
            />
            <IconButton
              iconLocation="left"
              override={
                <XnixLineBitcoin
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-6.svg"
                  overlapGroupClassName="xnix-line-bitcoin-instance"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-5.svg"
                  vectorClassName="xnix-line-bitcoin-2"
                  vectorClassNameOverride="xnix-line-bitcoin-3"
                />
              }
              size="large"
              text="NFT"
            />
            <div className="icon-button-2">
              <div className="icon-instance-node">
                <div className="vector-17" />
              </div>
              <div className="learning-3">Fashion</div>
            </div>
            <IconButton
              iconLocation="left"
              override={
                <XnixLineSuitcase
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-3.svg"
                  overlapGroupClassName="xnix-line-suitcase-instance"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-2.svg"
                  vectorClassName="xnix-line-suitcase-2"
                  vectorClassNameOverride="xnix-line-suitcase-3"
                />
              }
              size="large"
              text="Travel"
            />
            <IconButton
              iconLocation="left"
              override={
                <XnixLineGlasses
                  className="design-component-instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-13.svg"
                  imgClassName="xnix-line-glasses-3"
                  overlapGroupClassName="xnix-line-glasses-instance"
                  vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12.svg"
                  vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-14.svg"
                  vectorClassName="xnix-line-glasses-2"
                  vectorClassNameOverride="xnix-line-glasses-2"
                />
              }
              size="large"
              text="Beauty"
            />
            <IconButton
              iconLocation="left"
              override={<XnixLinePizzaSlice className="icon-instance-node" />}
              size="large"
              text="Food"
            />
            <UpDownButton icon={<DownArrow className="icon-instance-node" />} text="More topics" />
          </div>
        </div>
      </div>
    </div>
  );
};
