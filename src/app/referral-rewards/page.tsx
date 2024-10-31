import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Referral and Rewards | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Referral and Rewards"
          src="/images/6f32d47e-30e2-4aa6-83b7-45e2e3748f26.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/quests-seasonal-events",
              name: "Quests & Seasonal Events",
            },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
