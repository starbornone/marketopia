import "@/styles/global.scss";
import type { Metadata } from "next";
import { Layout } from "@/layout/layout";
import { Lexend } from "next/font/google";
import { VerboseProvider } from "@/context/VerboseContext";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: defaultTitle,
  description:
    "Join us on a journey through Marketopia, where we'll delve into collaborative strategies to outmanoeuvre competitors, harness predictive analytics to understand customer behaviours and implement gamification techniques to engage and retain our audience. Together, we'll navigate the challenges and unlock powerful tactics!",
};

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.variable}>
        <VerboseProvider>
          <Layout>{children}</Layout>
        </VerboseProvider>
      </body>
    </html>
  );
}
