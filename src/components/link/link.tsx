import clsx from "clsx";
import styles from "./link.module.scss";
import { default as NextLink } from "next/link";

interface LinkProps {
  children: React.ReactNode;
  disabled?: boolean;
  href: string;
  size?: "large" | "small";
}

export const Link = ({ children, href, size }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={clsx(styles["link"], styles[`link--size-${size}`])}
    >
      {children}
    </NextLink>
  );
};
