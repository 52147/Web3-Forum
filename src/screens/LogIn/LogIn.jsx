import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const LogIn = () => {
  return (
    <div className="log-in">
      <div className="div">
        <h1 className="h-1">Welcome back!</h1>
        <div className="frame">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-2">Username</div>
            </div>
          </div>
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-2">Password</div>
            </div>
          </div>
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-2">Email address</div>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <Button selected={false} text="Start browsing" type="CTA" />
        </div>
      </div>
    </div>
  );
};
