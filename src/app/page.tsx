"use client";

import "./page.scss";
import { Link } from "@/components/link/link";
import { useVerbose } from "@/context/VerboseContext";
import { ToggleButton } from "@/components/toggle-button/toggle-button";

export default function Page() {
  const { isVerbose, toggleVerbose } = useVerbose();

  return (
    <div className="main-menu">
      <h1 className="main-menu__title">Marketopia Adventures</h1>
      <div className="main-menu__options">
        <Link href="/disclaimer" size="large">
          Start Adventure
        </Link>
        <ToggleButton
          isChecked={isVerbose}
          label="Verbose Mode"
          onToggle={toggleVerbose}
        />
        <Link appearance="secondary" href="/resources">
          Resources
        </Link>
        <Link appearance="secondary" href="/credits">
          Credits
        </Link>
      </div>
    </div>
  );
}
