import React from "react";
import { H1, Logo, Instructions, Button } from "../../components";
import styles from "./LandingPage.module.css";

const { LandingPageClass } = styles;

function LandingPage({
  heroSectionColor = "#282c34",
  heroSectionTitle = "This is my first react-app"
}) {
  const classNames = [LandingPageClass];
  return (
    <div className={classNames} style={{ backgroundColor: heroSectionColor }}>
      <H1 title={heroSectionTitle} />
      <Logo />
      <Instructions />
      <Button title={"Hello"} variant={"primary"} />
      <Button variant={"secondary"}> Hi! </Button>
    </div>
  );
}

export default LandingPage;
