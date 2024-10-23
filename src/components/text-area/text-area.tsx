import * as React from "react";
import styles from "./text-area.module.scss";

type TextAreaProps = {
  children: React.ReactNode;
};

const TextArea: React.FC<TextAreaProps> = ({ children }) => {
  return <div className={styles["text-area"]}>{children}</div>;
};

export default TextArea;
