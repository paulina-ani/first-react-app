import React from "react";
import {
  H1,
  Subtitle,
  Link,
  Logo,
  Instructions,
  Button
} from "../../components";
import "./LandingPage.module.css";

function LandingPage({
  heroSectionColor = "#282c34",
  heroSectionTitle = "This is my first react-app",
  heroSectionSubtitle = "Please visit my LinkedIn page"
}) {
  return (
    <div className="Landingpage" style={{ backgroundColor: heroSectionColor }}>
      <H1 title={heroSectionTitle} />
      <Subtitle> {heroSectionSubtitle}</Subtitle>
      <Link />
      <Logo />
      <Instructions />
      <Button title={"Hello"} variant={"primary"} />
      <Button variant={"secondary"}> Hi! </Button>
    </div>
  );
}

export default LandingPage;
