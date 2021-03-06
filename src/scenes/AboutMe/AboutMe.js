import React from "react";
import { AboutMe as AboutMeClass } from "./AboutMe.module.css";
import { H1, Subtitle, Link } from "../../components";

function AboutMe({
  AboutMeSectionColor = "#282c34",
  AboutMeTitle = "About me",
  AboutMeSubtitle = "Please visit my LinkedIn page"
}) {
  return (
    <div
      className={AboutMeClass}
      style={{ backgroundColor: AboutMeSectionColor }}
    >
      <H1>{AboutMeTitle}</H1>
      <Subtitle>{AboutMeSubtitle}</Subtitle>
      <Link />
    </div>
  );
}

export default AboutMe;
