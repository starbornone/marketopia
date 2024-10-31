import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Welcome to Marketopia | ${defaultTitle}`,
};

function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Queen Celeste Mailer"
          src="/images/4c505b4a-b2da-43b2-a597-6e912ad76ea2.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/game-theory",
              name: "Game Theory",
            },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}

export default Page;
