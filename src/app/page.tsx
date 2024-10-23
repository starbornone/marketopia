"use client";

import "./page.scss";
import Link from "next/link";

export default function Page() {
  return (
    <div className="main-menu">
      <h1 className="main-menu__title">Marketopia Adventures</h1>
      <div className="main-menu__options">
        <Link href="/call-to-adventure" className="main-menu__button">
          Start Adventure
        </Link>
        <Link href="/credits" className="main-menu__button">
          Credits
        </Link>
      </div>
    </div>
  );
}
