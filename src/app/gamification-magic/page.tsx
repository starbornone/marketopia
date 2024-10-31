import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Gamification Magic | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/be5d2665-727c-4545-a328-9139642b7a73.png"
          alt="The Magic of Gamification"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/mastery-path",
              name: "Mastery Path",
            },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
