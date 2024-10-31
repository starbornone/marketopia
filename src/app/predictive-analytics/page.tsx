import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `The Predictive Oracle | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/a3f2f4bc-60a2-4d75-895d-676f299ba274.png"
          alt="The Predictive Oracle"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/predictive-analytics/models",
              name: "Prediction Models",
            },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
