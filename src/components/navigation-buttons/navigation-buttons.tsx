"use client";

import clsx from "clsx";
import styles from "./navigation-buttons.module.scss";
import { Link } from "@/components/link/link";
import { useRouter } from "next/navigation";

type NavigationLink = {
  route?: string;
  name: string;
  disabled?: boolean;
};

type NavigationButtonsProps = {
  links: NavigationLink[];
};

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  links,
}) => {
  const router = useRouter();

  return (
    <div
      className={clsx(
        styles["buttons"],
        links.length === 1 && styles["buttons--single"]
      )}
    >
      {links.map((link) =>
        !link.route ? (
          <button
            className={styles["button"]}
            key={link.name}
            onClick={() => router.back()}
          >
            {link.name}
          </button>
        ) : (
          <Link
            disabled={link.disabled}
            href={link.route || "/"}
            key={link.route}
          >
            {link.name}
          </Link>
        )
      )}
    </div>
  );
};
