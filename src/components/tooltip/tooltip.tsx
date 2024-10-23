import React from "react";
import styles from "./tooltip.module.scss";

export const Tooltip: React.FC<{
  text: string;
  children?: React.ReactNode;
}> = ({ text, children }) => {
  return (
    <span className={styles.tooltip} tabIndex={0}>
      <span className={styles["tooltip__trigger"]}>{children}</span>
      <span className={styles["tooltip__text"]}>{text}</span>
    </span>
  );
};
