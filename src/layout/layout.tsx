"use client";

import styles from "./layout.module.scss";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Transition } from "./transition";

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isRootRoute = pathname === "/";

  return (
    <div
      className={clsx(
        styles["background"],
        isRootRoute ? styles["background-home"] : styles["background-other"]
      )}
    >
      <div className={clsx(styles["overlay"], styles["overlay--enter"])}>
        <Transition
          key={pathname}
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          exit={{ opacity: 0, x: "-100vw", transition: { duration: 1 } }}
        >
          {children}
        </Transition>
      </div>
    </div>
  );
}
