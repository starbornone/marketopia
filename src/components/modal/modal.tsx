"use client";

import React, { useState } from "react";
import styles from "./modal.module.scss";

type ModalProps = {
  triggerText: string;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ triggerText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <span className={styles["modal__trigger"]} onClick={openModal}>
        {triggerText}
      </span>
      {isOpen && (
        <span className={styles["modal__overlay"]} onClick={closeModal}>
          <span
            className={styles["modal__content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <span>{children}</span>
            <span>
              <button className={styles["modal__close"]} onClick={closeModal}>
                <svg
                  aria-label="close"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z" />
                </svg>
              </button>
            </span>
          </span>
        </span>
      )}
    </>
  );
};
