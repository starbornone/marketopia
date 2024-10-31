import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Gather Tools | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Let's Gather Our Tools"
          src="/images/e27a9e5b-2096-4708-bd37-914315694676.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/nash-equilibrium",
              name: "Nash Equilibrium",
            },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
