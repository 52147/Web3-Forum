import React from "react";
import { AuthorInfo } from "../../components/AuthorInfo";
import { AuthorInfoComment } from "../../components/AuthorInfoComment";
import { DiamondTofuLogo } from "../../components/DiamondTofuLogo";
import { EditorsPrimaryFull } from "../../components/EditorsPrimaryFull";
import { Header } from "../../components/Header";
import { IconButton } from "../../components/IconButton";
import { Info } from "../../components/Info";
import { RoundButton } from "../../components/RoundButton";
import { SearchBar } from "../../components/SearchBar";
import { Tags } from "../../components/Tags";
import { UpDownButton } from "../../components/UpDownButton";
import { XnixLineDislike } from "../../components/XnixLineDislike";
import { XnixLineMessage } from "../../components/XnixLineMessage";
import { Avatar5 } from "../../icons/Avatar5";
import { DownArrow3 } from "../../icons/DownArrow3";
import { Language } from "../../icons/Language";
import { UpArrow } from "../../icons/UpArrow";
import { XnixLineBookmark10 } from "../../icons/XnixLineBookmark10";
import { XnixLineCall } from "../../icons/XnixLineCall";
import { XnixLineMapMarker } from "../../icons/XnixLineMapMarker";
import { XnixLineMessage213 } from "../../icons/XnixLineMessage213";
import "./style.css";

export const PostFeedPage = () => {
  return (
    <div className="post-feed-page">
      <div className="div-3">
        <footer className="footer">
          <DiamondTofuLogo
            className="diamond-tofu-logo-footer"
            logoLogo="https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/logo-2-6.svg"
            logoLogoClassName="diamond-tofu-logo-instance"
          />
          <div className="frame-4">
            <div className="frame-5">
              <XnixLineCall className="icon-instance-node-2" />
              <div className="text-wrapper-7">1-714-889-225</div>
            </div>
            <div className="frame-5">
              <div className="icon-instance-node-2">
                <div className="vector-8" />
              </div>
              <div className="text-wrapper-7">diamondtofu@gmail.com</div>
            </div>
            <div className="frame-5">
              <XnixLineMapMarker className="icon-instance-node-2" />
              <p className="text-wrapper-7">1 Leighton St, Cambridge, MA</p>
            </div>
          </div>
        </footer>
        <div className="frame-6">
          <div className="author-info-wrapper">
            <AuthorInfo type="main" />
          </div>
          <div className="frame-7">
            <div className="frame-8">
              <h1 className="h-1">Check my newest tech gears folks!!</h1>
              <IconButton
                iconLocation="right"
                learningClassName="icon-button-instance"
                override={<Language className="icon-instance-node-2" />}
                size="large"
                text="Translate"
              />
            </div>
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/rectangle-11.svg"
            />
            <div className="lorem-ipsum-dolor-wrapper">
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at posuere nisl. Sed diam enim,
                placerat at augue vitae, aliquam volutpat turpis. Vestibulum pharetra semper eros, ut faucibus sem
                euismod id. Nam vitae nisi placerat, pellentesque leo eget, egestas diam. Sed accumsan dui eget
                dignissim tincidunt. Nullam ut pharetra leo. Cras imperdiet mattis arcu, ac ullamcorper nibh dignissim
                nec. Nam viverra scelerisque ipsum, interdum pharetra nulla ultricies vitae. Etiam cursus consequat
                dapibus. Aliquam sed finibus massa. Sed libero velit, tempus et lectus sit amet, bibendum dapibus sem.
                <br />
                <br />
                Ut auctor urna diam, sed convallis nisi dictum ut. Donec in dictum felis. Aenean nisi eros, ornare nec
                porta vitae, eleifend sit amet ex. Morbi mattis erat ac cursus aliquet. Vestibulum sed augue vel erat
                pellentesque congue vitae lacinia neque. Pellentesque sed scelerisque tortor, in dignissim augue. Fusce
                neque mauris, ultrices nec orci et, dapibus facilisis quam. Vivamus nec nibh vitae augue volutpat
                malesuada.
                <br />
                Fusce ultrices et sem sit amet mollis. Aliquam gravida convallis ex, id placerat nisl sodales non. Nunc
                quam turpis, suscipit sit amet odio eget, tempor placerat lacus. Nunc efficitur purus sit amet dapibus
                vestibulum. Donec ut turpis sed lorem iaculis elementum et quis odio. Nunc pharetra varius fringilla.
                Vivamus iaculis ac nisl eu ullamcorper. Quisque sem augue, ornare at purus id, pulvinar scelerisque dui.
                In hac habitasse platea dictumst. Etiam feugiat felis magna, ac dictum lectus vulputate a.
              </p>
            </div>
          </div>
          <div className="frame-9">
            <Tags selected text="UX" />
            <Tags selected text="Layoffs" />
            <Tags selected text="ChatGPT" />
          </div>
          <div className="frame-10">
            <div className="frame-5">
              <div className="xnix-line-like">
                <div className="vector-9" />
              </div>
              <div className="text-wrapper-8">130</div>
            </div>
            <div className="frame-5">
              <XnixLineMessage
                className="xnix-line-message-2"
                xnixLineMessage="https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/xnix-line-message-2-11.svg"
              />
              <div className="text-wrapper-8">24</div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="comment-2">
            <AuthorInfoComment className="author-info-comment-instance" icon={<Avatar5 className="avatar-5" />} />
            <div className="frame-12">
              <div className="comments">
                <p className="p">
                  Ut auctor urna diam, sed convallis nisi dictum ut. Donec in dictum felis. Aenean nisi eros, ornare nec
                  porta vitae, eleifend sit amet ex. Morbi mattis erat ac cursus aliquet. Vestibulum sed augue vel erat
                  pellentesque congue vitae lacinia neque. Pellentesque sed scelerisque tortor, in dignissim augue.
                  Fusce neque mauris, ultrices nec orci et, dapibus facilisis quam. Vivamus nec nibh vitae augue
                  volutpat malesuada.
                </p>
              </div>
              <div className="actions">
                <Info override={<XnixLineMessage213 className="icon-instance-node-2" />} text="Comment" />
                <div className="frame-13">
                  <div className="icon-instance-node-2">
                    <div className="vector-10" />
                  </div>
                  <XnixLineDislike
                    className="xnix-line-dislike-instance"
                    vector="https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/vector-70-3.svg"
                    vectorClassName="design-component-instance-node"
                  />
                  <XnixLineBookmark10 className="icon-instance-node-2" />
                  <div className="icon-instance-node-2">
                    <div className="vector-11" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment-2">
            <AuthorInfoComment className="avatar-wrapper" icon={<Avatar5 className="avatar-5" />} />
            <div className="frame-14">
              <div className="ut-auctor-urna-diam-wrapper">
                <p className="ut-auctor-urna-diam">
                  Ut auctor urna diam, sed convallis nisi dictum ut. Donec in dictum felis. Aenean nisi eros, ornare nec
                  porta vitae, eleifend sit amet ex. Morbi mattis erat ac cursus aliquet. Vestibulum sed augue vel erat
                  pellentesque congue vitae lacinia neque. Pellentesque sed scelerisque tortor, in dignissim augue.
                </p>
              </div>
              <div className="actions">
                <Info override={<XnixLineMessage213 className="icon-instance-node-2" />} text="Comment" />
                <div className="frame-13">
                  <div className="icon-instance-node-2">
                    <div className="vector-10" />
                  </div>
                  <XnixLineDislike
                    className="xnix-line-dislike-instance"
                    vector="https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/vector-70-3.svg"
                    vectorClassName="design-component-instance-node"
                  />
                  <XnixLineBookmark10 className="icon-instance-node-2" />
                  <div className="icon-instance-node-2">
                    <div className="vector-11" />
                  </div>
                </div>
              </div>
            </div>
            <DownArrow3 className="down-arrow-2" />
          </div>
          <div className="comment-2">
            <AuthorInfoComment className="author-info-comment-instance" icon={<Avatar5 className="avatar-5" />} />
            <div className="frame-12">
              <div className="comments">
                <p className="p">
                  Ut auctor urna diam, sed convallis nisi dictum ut. Donec in dictum felis. Aenean nisi eros, ornare nec
                  porta vitae, eleifend sit amet ex. Morbi mattis erat ac cursus aliquet.....
                </p>
              </div>
              <div className="actions">
                <Info override={<XnixLineMessage213 className="icon-instance-node-2" />} text="Comment" />
                <div className="frame-13">
                  <div className="icon-instance-node-2">
                    <div className="vector-10" />
                  </div>
                  <XnixLineDislike
                    className="xnix-line-dislike-instance"
                    vector="https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/vector-70-3.svg"
                    vectorClassName="design-component-instance-node"
                  />
                  <XnixLineBookmark10 className="icon-instance-node-2" />
                  <div className="icon-instance-node-2">
                    <div className="vector-11" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment-2">
            <AuthorInfoComment className="author-info-comment-instance" icon={<Avatar5 className="avatar-5" />} />
            <div className="frame-12">
              <div className="comments">
                <p className="p">
                  Ut auctor urna diam, sed convallis nisi dictum ut. Donec in dictum felis. Aenean nisi eros, ornare nec
                  porta vitae, eleifend sit amet ex. Morbi mattis erat ac cursus aliquet.....
                </p>
              </div>
              <div className="actions">
                <Info override={<XnixLineMessage213 className="icon-instance-node-2" />} text="Comment" />
                <div className="frame-13">
                  <div className="icon-instance-node-2">
                    <div className="vector-10" />
                  </div>
                  <XnixLineDislike
                    className="xnix-line-dislike-instance"
                    vector="https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/vector-70-3.svg"
                    vectorClassName="design-component-instance-node"
                  />
                  <XnixLineBookmark10 className="icon-instance-node-2" />
                  <div className="icon-instance-node-2">
                    <div className="vector-11" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <UpDownButton text="More comments" />
        </div>
        <div className="frame-15">
          <div className="post-preview">
            <div className="frame-16">
              <div className="frame-17">
                <Avatar5 className="avatar-5" />
                <div className="frame-18">
                  <div className="text-wrapper-9">Author</div>
                  <div className="text-wrapper-9">｜1 yr. ago</div>
                </div>
              </div>
              <div className="p-wrapper">
                <p className="text-wrapper-10">
                  Lorem ipsum dolor sit amet, consectetur dsfd fdsfkj dsfd w4reij sdfa .......
                </p>
              </div>
              <div className="frame-19">
                <div className="icon-button-2">
                  <div className="icon-instance-node-2">
                    <div className="vector-10" />
                  </div>
                  <div className="text-wrapper-9">150</div>
                </div>
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineMessage213 className="icon-instance-node-2" />}
                  size="small"
                  text="25"
                />
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineBookmark10 className="icon-instance-node-2" />}
                  size="small"
                  text="134"
                />
              </div>
            </div>
          </div>
          <div className="post-preview">
            <div className="frame-16">
              <div className="frame-17">
                <Avatar5 className="avatar-5" />
                <div className="frame-18">
                  <div className="text-wrapper-9">Author</div>
                  <div className="text-wrapper-9">｜1 yr. ago</div>
                </div>
              </div>
              <div className="p-wrapper">
                <p className="text-wrapper-10">
                  Lorem ipsum dolor sit amet, consectetur dsfd fdsfkj dsfd w4reij sdfa .......
                </p>
              </div>
              <div className="frame-19">
                <div className="icon-button-2">
                  <div className="icon-instance-node-2">
                    <div className="vector-10" />
                  </div>
                  <div className="text-wrapper-9">150</div>
                </div>
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineMessage213 className="icon-instance-node-2" />}
                  size="small"
                  text="25"
                />
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineBookmark10 className="icon-instance-node-2" />}
                  size="small"
                  text="134"
                />
              </div>
            </div>
          </div>
          <div className="post-preview">
            <div className="frame-16">
              <div className="frame-17">
                <Avatar5 className="avatar-5" />
                <div className="frame-18">
                  <div className="text-wrapper-9">Author</div>
                  <div className="text-wrapper-9">｜1 yr. ago</div>
                </div>
              </div>
              <div className="p-wrapper">
                <p className="text-wrapper-10">
                  Lorem ipsum dolor sit amet, consectetur dsfd fdsfkj dsfd w4reij sdfa .......
                </p>
              </div>
              <div className="frame-19">
                <div className="icon-button-2">
                  <div className="icon-instance-node-2">
                    <div className="vector-10" />
                  </div>
                  <div className="text-wrapper-9">150</div>
                </div>
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineMessage213 className="icon-instance-node-2" />}
                  size="small"
                  text="25"
                />
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineBookmark10 className="icon-instance-node-2" />}
                  size="small"
                  text="134"
                />
              </div>
            </div>
          </div>
          <div className="post-preview">
            <div className="frame-16">
              <div className="frame-17">
                <Avatar5 className="avatar-5" />
                <div className="frame-18">
                  <div className="text-wrapper-9">Author</div>
                  <div className="text-wrapper-9">｜1 yr. ago</div>
                </div>
              </div>
              <div className="p-wrapper">
                <p className="text-wrapper-10">
                  Lorem ipsum dolor sit amet, consectetur dsfd fdsfkj dsfd w4reij sdfa .......
                </p>
              </div>
              <div className="frame-19">
                <div className="icon-button-2">
                  <div className="icon-instance-node-2">
                    <div className="vector-10" />
                  </div>
                  <div className="text-wrapper-9">150</div>
                </div>
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineMessage213 className="icon-instance-node-2" />}
                  size="small"
                  text="25"
                />
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineBookmark10 className="icon-instance-node-2" />}
                  size="small"
                  text="134"
                />
              </div>
            </div>
          </div>
          <div className="post-preview">
            <div className="frame-16">
              <div className="frame-17">
                <Avatar5 className="avatar-5" />
                <div className="frame-18">
                  <div className="text-wrapper-9">Author</div>
                  <div className="text-wrapper-9">｜1 yr. ago</div>
                </div>
              </div>
              <div className="p-wrapper">
                <p className="text-wrapper-10">
                  Lorem ipsum dolor sit amet, consectetur dsfd fdsfkj dsfd w4reij sdfa .......
                </p>
              </div>
              <div className="frame-19">
                <div className="icon-button-2">
                  <div className="icon-instance-node-2">
                    <div className="vector-10" />
                  </div>
                  <div className="text-wrapper-9">150</div>
                </div>
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineMessage213 className="icon-instance-node-2" />}
                  size="small"
                  text="25"
                />
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineBookmark10 className="icon-instance-node-2" />}
                  size="small"
                  text="134"
                />
              </div>
            </div>
          </div>
          <div className="post-preview">
            <div className="frame-16">
              <div className="frame-17">
                <Avatar5 className="avatar-5" />
                <div className="frame-18">
                  <div className="text-wrapper-9">Author</div>
                  <div className="text-wrapper-9">｜1 yr. ago</div>
                </div>
              </div>
              <div className="p-wrapper">
                <p className="text-wrapper-10">
                  Lorem ipsum dolor sit amet, consectetur dsfd fdsfkj dsfd w4reij sdfa .......
                </p>
              </div>
              <div className="frame-19">
                <div className="icon-button-2">
                  <div className="icon-instance-node-2">
                    <div className="vector-10" />
                  </div>
                  <div className="text-wrapper-9">150</div>
                </div>
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineMessage213 className="icon-instance-node-2" />}
                  size="small"
                  text="25"
                />
                <IconButton
                  className="icon-button-3"
                  iconLocation="left"
                  override1={<XnixLineBookmark10 className="icon-instance-node-2" />}
                  size="small"
                  text="134"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="more-in-tech">More in Tech &gt;&gt;</div>
        <SearchBar className="search-bar-instance" />
        <div className="navbar">
          <div className="text-wrapper-11">Topics</div>
          <div className="text-wrapper-12"> &gt;</div>
          <div className="text-wrapper-11">Tech</div>
          <div className="text-wrapper-12"> &gt;</div>
          <div className="text-wrapper-11">Post</div>
        </div>
        <Header
          className="header-instance"
          diamondTofuLogoWrapperLogoLogo="https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/logo-2-5.svg"
          diamondTofuLogoWrapperLogoLogoClassName="header-2"
        />
        <img
          className="line"
          alt="Line"
          src="https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/line-13.svg"
        />
        <UpDownButton
          className="up-down-button-instance"
          icon={<UpArrow className="icon-instance-node-2" />}
          text="Back to top"
        />
        <div className="classic-editor">
          <EditorsPrimaryFull className="editors-primary-full-featured" mainClassName="editors-primary-full-instance" />
          <div className="overlap-group-2">
            <img
              className="divider"
              alt="Divider"
              src="https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/divider.svg"
            />
            <div className="content">
              <div className="text-wrapper-13">Text</div>
            </div>
          </div>
        </div>
        <RoundButton className="round-button-instance" hasIcon={false} importance="primary" text="Post your comment" />
      </div>
    </div>
  );
};
