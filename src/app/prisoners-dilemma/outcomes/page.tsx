import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Prisoner's Dilemma Outcomes | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Prisoner's Dilemma Outcomes"
          src="/images/50e09ff5-fc42-4e1b-8f77-0792b6b6b38d.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/retention-churn-matrix", name: "Strategies vs. Costs" },
          ]}
        />
        // <NavigationButtons
        //   links={[
        //     { name: "Back" },
        //     { route: "/gather-tools", name: "Gather Tools" },
        //   ]}
        // />
      }
    >
      <Content />
    </Container>
  );
}
