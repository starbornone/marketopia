import React from "react";
import clsx from "clsx";
import styles from "./text-area.module.scss";

type TextAreaProps = {
  align?: "center" | "left" | "right";
  size?: "large" | "small";
  children: React.ReactNode;
};

export const TextArea: React.FC<TextAreaProps> = ({
  align,
  size,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles["text-area"],
        align && styles[`text-area--align-${align}`],
        size && styles[`text-area--size-${size}`]
      )}
    >
      {children}
    </div>
  );
};
