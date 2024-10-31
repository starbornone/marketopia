import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Prisoner's Dilemma | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Prisoner's Dilemma"
          src="/images/39a12b6b-d515-491e-ab97-027ce74fe4d5.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/prisoners-dilemma/outcomes", name: "Outcomes" },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
