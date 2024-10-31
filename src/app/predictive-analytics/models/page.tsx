import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Prediction Models | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Prediction Models"
          src="/images/68d748ed-437d-42cd-b3b0-bbc19003a08c.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/predictive-analytics/basic-analytics",
              name: "Basic Analytics",
            },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
