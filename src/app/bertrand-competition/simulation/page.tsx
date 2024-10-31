import { Metadata } from "next";
import Simulation from "./_simulation";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Bertrand Competition Simulation | ${defaultTitle}`,
};

export default function Page() {
  return <Simulation />;
}
