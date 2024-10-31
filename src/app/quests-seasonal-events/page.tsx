import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Quests and Seasonal Events | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Quests and Seasonal Events"
          src="/images/fe542ba7-eb26-463b-b4c3-1f9672272318.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/final-battle", name: "Final Battle" },
          ]}
        />
      }
    >
      <TextArea>
        <h2>Quests and Seasonal Events</h2>
        <p>
          Quests and seasonal events bring excitement and urgency to your
          campaign. By creating time-limited challenges or long-term quests, you
          can motivate your allies to engage more deeply with your brand.
          Whether it&apos;s a seasonal quest to launch a Black Friday campaign
          or a year-long journey to achieve campaign automation mastery, these
          events turn regular tasks into epic adventures.
        </p>
      </TextArea>
    </Container>
  );
}
