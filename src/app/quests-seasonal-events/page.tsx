import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
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
      <Content />
    </Container>
  );
}
