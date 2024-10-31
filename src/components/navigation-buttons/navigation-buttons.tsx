"use client";

import clsx from "clsx";
import styles from "./navigation-buttons.module.scss";
import { Link } from "@/components/link/link";
import { useRouter } from "next/navigation";
import { useVerbose } from "@/context/VerboseContext";
import { ToggleButton } from "@/components/toggle-button/toggle-button";

type NavigationLink = {
  route?: string;
  name: string;
  disabled?: boolean;
};

type NavigationButtonsProps = {
  links: NavigationLink[];
  hideVerbose?: boolean;
};

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  links,
  hideVerbose,
}) => {
  const router = useRouter();
  const { isVerbose, toggleVerbose } = useVerbose();

  return (
    <div
      className={clsx(
        styles["buttons"],
        links.length === 1 && styles["buttons--single"]
      )}
    >
      {!hideVerbose && (
        <ToggleButton
          isChecked={isVerbose}
          label="Verbose Mode"
          onToggle={toggleVerbose}
        />
      )}
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
