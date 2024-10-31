import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `The Role of Data and Weighting | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/73c6c1f7-2ad1-4a83-83fe-ebeba674bcdb.png"
          alt="The Role of Data and Weighting"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/gamification-magic", name: "Gamification Magic" },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
