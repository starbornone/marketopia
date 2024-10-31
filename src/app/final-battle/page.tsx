import Battle from "./_battle";
import { Metadata } from "next";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Final Battle | ${defaultTitle}`,
};

export default function Page() {
  return <Battle />;
}
