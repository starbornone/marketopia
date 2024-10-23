import React from "react";
import styles from "./tooltip.module.scss";

export const Tooltip: React.FC<{
  text: string;
  children?: React.ReactNode;
}> = ({ text, children }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltipText}>{text}</span>
    </div>
  );
};
