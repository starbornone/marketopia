import clsx from "clsx";
import styles from "./navigation-buttons.module.scss";
import { Link } from "@/components/link/link";

type NavigationLink = {
  route: string;
  name: string;
  disabled?: boolean;
};

type NavigationButtonsProps = {
  links: NavigationLink[];
};

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  links,
}) => {
  return (
    <div
      className={clsx(
        styles["buttons"],
        links.length === 1 && styles["buttons--single"]
      )}
    >
      {links.map((link) => (
        <Link disabled={link.disabled} key={link.route} href={link.route}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};
