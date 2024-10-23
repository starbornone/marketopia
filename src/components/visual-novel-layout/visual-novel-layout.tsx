import * as React from "react";
import styles from "./visual-novel-layout.module.scss";

type VisualNovelLayoutProps = {
  image?: React.ReactNode;
  text: React.ReactNode;
  buttons?: React.ReactNode;
};

const VisualNovelLayout: React.FC<VisualNovelLayoutProps> = ({
  image,
  text,
  buttons,
}) => {
  return (
    <div className={styles["visual-novel"]}>
      <div className={styles["visual-novel__content"]}>
        {image}
        {text}
        {buttons}
      </div>
    </div>
  );
};

export default VisualNovelLayout;
