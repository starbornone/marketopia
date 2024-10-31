import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
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
      <TextArea>
        <h2>Referral and Rewards</h2>
        <p>
          Referral programs with tiered rewards encourage your allies to recruit
          others to your cause. As they bring in more recruits, they earn
          exclusive rewards like discounts, free credits, or VIP access to new
          features. This creates a sense of community and competition, driving
          not only customer retention but also customer acquisition.
        </p>
      </TextArea>
    </Container>
  );
}
