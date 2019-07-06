import React from "react";
import styles from "./Button.module.css";

const { primary, secondary } = styles;

function Button({ children, title, variant }) {
  const content = children || title;
  const classNames = [primary, variant === "secondary" ? secondary : ""].join(
    " "
  );
  return <button className={classNames}>{content}</button>;
}

export default Button;
