import React from "react";
import styles from "./AboutMe.module.css";
import { H1, Subtitle, Link } from "../../components";

function AboutMe({
  AboutMeSectionColor = "#282c34",
  AboutMeTitle = "About me",
  AboutMeSubtitle = "Please visit my LinkedIn page"
}) {
  const { AboutMeClass } = styles;
  const classNames = [AboutMeClass];
  return (
    <div
      className={classNames}
      style={{ backgroundColor: AboutMeSectionColor }}
    >
      <H1>{AboutMeTitle}</H1>
      <Subtitle>{AboutMeSubtitle}</Subtitle>
      <Link />
    </div>
  );
}

export default AboutMe;
