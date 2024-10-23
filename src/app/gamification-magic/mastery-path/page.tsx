import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Gamification: Mastery Path | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/80fbd5cc-d902-44aa-aafa-3e28a9ab2fac.png"
          alt="Mastery Path"
        />
      }
      text={
        <TextArea>
          <p>
            The Mastery Path guides your allies on a journey of skill
            development and campaign mastery. By completing key milestones such
            as launching their first campaign, setting up automations, and
            optimizing their messaging, they unlock new rewards and insights
            along the way. This path transforms their learning into an engaging
            quest for mastery.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/gamification-magic/personalized-incentives",
              name: "Personalized Incentives",
            },
          ]}
        />
      }
    />
  );
}
