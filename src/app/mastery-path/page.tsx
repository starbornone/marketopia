import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Mastery Path | ${defaultTitle}`,
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
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/personalized-incentives",
              name: "Personalized Incentives",
            },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
