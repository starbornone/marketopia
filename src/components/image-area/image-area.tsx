/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import styles from "./image-area.module.scss";

type ImageAreaProps = {
  src: string;
  alt: string;
};

const ImageArea: React.FC<ImageAreaProps> = ({ src, alt }) => {
  return (
    <div className={styles["image-area"]}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageArea;
