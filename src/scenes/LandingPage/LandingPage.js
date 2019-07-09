import React from "react";
import { H1, Logo, Instructions, Button } from "../../components";
import {
  LandingPage as LandingPageClass,
  logo
} from "./LandingPage.module.css";

function LandingPage({
  heroSectionColor = "#282c34",
  heroSectionTitle = "This is my first react-app"
}) {
  return (
    <div
      className={LandingPageClass}
      style={{ backgroundColor: heroSectionColor }}
    >
      <H1 title={heroSectionTitle} />
      <Logo className={logo} />
      <Instructions />
      <Button title={"Hello"} variant={"primary"} />
      <Button variant={"secondary"}> Hi! </Button>
    </div>
  );
}

export default LandingPage;
