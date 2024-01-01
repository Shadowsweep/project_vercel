import React from "react";
import { FacebookFill } from "./FacebookFill";
import { GoogleFill } from "./GoogleFill";
import { Logo } from "./Logo";
import { SignInPage } from "./SignInPage";
import "./style.css";

export const SignInOverlay = () => {
  return (
    <div className="sign-in-overlay">
      <SignInPage
        buttonsIcon={<GoogleFill className="icon-instance-node-2" />}
        className="sign-in-page-instance"
        device="desktop"
        icon={<Logo className="LOGO-2" />}
        img="line-44-2.svg"
        line="image.svg"
        override={<FacebookFill className="icon-instance-node-2" />}
        text="Welcome to Linked Bricks. Sign in to enjoy much more"
        type="sign-in"
      />
    </div>
  );
};
