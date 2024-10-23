import * as React from "react";
import styles from "./text-area.module.scss";
import clsx from "clsx";

type TextAreaProps = {
  align?: "center" | "left" | "right";
  children: React.ReactNode;
  size?: "large" | "small";
};

export const TextArea: React.FC<TextAreaProps> = ({
  align,
  children,
  size,
}) => {
  return (
    <div
      className={clsx(
        styles["text-area"],
        styles[`text-area--align-${align}`],
        styles[`text-area--size-${size}`]
      )}
    >
      {children}
    </div>
  );
};
