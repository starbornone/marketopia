import Dashboard from "./_dashboard";
import { Metadata } from "next";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Basic Analytics | ${defaultTitle}`,
};

export default function Page() {
  return <Dashboard />;
}
