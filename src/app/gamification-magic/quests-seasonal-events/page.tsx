import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Gamification: Quests & Seasonal Events | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/80fbd5cc-d902-44aa-aafa-3e28a9ab2fac.png"
          alt="Quests & Seasonal Events"
        />
      }
      text={
        <TextArea>
          <p>
            Quests and seasonal events bring excitement and urgency to your
            campaign. By creating time-limited challenges or long-term quests,
            you can motivate your allies to engage more deeply with your brand.
            Whether it&apos;s a seasonal quest to launch a Black Friday campaign
            or a year-long journey to achieve campaign automation mastery, these
            events turn regular tasks into epic adventures.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/final-battle", name: "Final Battle" },
          ]}
        />
      }
    />
  );
}
