import * as React from "react";
import styles from "./container.module.scss";

type ContainerProps = {
  buttons?: React.ReactNode;
  children?: React.ReactNode;
  image?: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({
  buttons,
  children,
  image,
}) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container__content"]}>
        {image}
        {children}
        {buttons}
      </div>
    </div>
  );
};
