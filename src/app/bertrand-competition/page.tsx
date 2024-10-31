import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Bertrand Competition | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Bertrand Competition"
          src="/images/70b37ad8-29ab-4df1-9792-b3324a5e6e4e.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/bertrand-competition/simulation", name: "Simulation" },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
