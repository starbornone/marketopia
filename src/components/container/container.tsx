import * as React from "react";
import styles from "./container.module.scss";

type ContainerProps = {
  buttons?: React.ReactNode;
  children?: React.ReactNode;
  image?: React.ReactNode;
  text?: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({
  buttons,
  children,
  image,
  text,
}) => {
  return (
    <div className={styles["visual-novel"]}>
      <div className={styles["visual-novel__content"]}>
        {image}
        {text}
        {children}
        {buttons}
      </div>
    </div>
  );
};
