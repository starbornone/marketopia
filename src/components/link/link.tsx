import clsx from "clsx";
import styles from "./link.module.scss";
import { default as NextLink } from "next/link";

interface LinkProps {
  appearance?: "primary" | "secondary";
  children: React.ReactNode;
  disabled?: boolean;
  href: string;
  size?: "large" | "small";
}

export const Link = ({
  appearance = "primary",
  children,
  href,
  size,
}: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={clsx(
        styles["link"],
        styles[`link--size-${size}`],
        styles[`link--appearance-${appearance}`]
      )}
    >
      {children}
    </NextLink>
  );
};
