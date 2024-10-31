import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Strategies and Costs | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Strategies and Costs"
          src="/images/4c52b9bc-71cf-4d51-a9f2-6460af0a8896.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/retention-churn-matrix/outcomes", name: "Outcomes" },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
