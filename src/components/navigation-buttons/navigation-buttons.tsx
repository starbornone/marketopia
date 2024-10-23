import * as React from "react";
import styles from "./navigation-buttons.module.scss";
import Link from "next/link";

type NavigationLink = {
  route: string;
  name: string;
  disabled?: boolean;
};

type NavigationButtonsProps = {
  links: NavigationLink[];
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ links }) => {
  return (
    <div className={styles["buttons"]}>
      {links.map((link) =>
        link.disabled ? (
          link.name
        ) : (
          <Link
            key={link.route}
            href={link.route}
            className={styles["buttons__button"]}
          >
            {link.name}
          </Link>
        )
      )}
    </div>
  );
};

export default NavigationButtons;
