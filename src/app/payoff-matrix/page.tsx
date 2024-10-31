import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Payoff Matrix | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Game Theory Payoff Matrix"
          src="/images/0d3bb48c-acd7-434c-8b79-a098d876c358.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/prisoners-dilemma", name: "Prisoner's Dilemma" },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
