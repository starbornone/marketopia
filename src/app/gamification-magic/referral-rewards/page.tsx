import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Gamification: Referral & Rewards | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/80fbd5cc-d902-44aa-aafa-3e28a9ab2fac.png"
          alt="Referral & Rewards"
        />
      }
      text={
        <TextArea>
          <p>
            Referral programs with tiered rewards encourage your allies to
            recruit others to your cause. As they bring in more recruits, they
            earn exclusive rewards like discounts, free credits, or VIP access
            to new features. This creates a sense of community and competition,
            driving not only customer retention but also customer acquisition.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/gamification-magic/quests-seasonal-events",
              name: "Quests & Seasonal Events",
            },
          ]}
        />
      }
    />
  );
}
