"use client";

import styles from "./toggle-button.module.scss";

type ToggleButtonProps = {
  isChecked: boolean;
  label: string;
  onToggle: () => void;
};

export const ToggleButton = ({
  isChecked,
  label,
  onToggle,
}: ToggleButtonProps) => {
  return (
    <label className={styles["toggle-button"]}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onToggle}
        className={styles["toggle-button__input"]}
      />
      <span className={styles["toggle-button__display"]}>
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={styles["toggle-button__tick"]}
            aria-hidden="true"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        )}
      </span>
      <span className={styles["toggle-button__label-text"]}>{label}</span>
    </label>
  );
};
