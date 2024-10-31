import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";
import Content from "./content";

export const metadata: Metadata = {
  title: `Bertrand Competition Simulation Conclusion | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Bertrand Competition Simulation Conclusion"
          src="/images/3e7188d4-02a2-4fa0-855e-79837efcc691.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/predictive-analytics",
              name: "Predictive Oracle",
            },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
