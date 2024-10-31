import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Nash Equilibrium | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Nash Equilibrium"
          src="/images/6d3f0fa8-bcc7-4db4-86af-5bc5820a4ebd.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/bertrand-competition",
              name: "Bertrand Competition",
            },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
