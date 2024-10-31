import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Customer Retention Outcomes | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Customer Retention Outcomes"
          src="/images/ccda0acc-744f-442a-83c7-a55c524678d0.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/gather-tools", name: "Gather Tools" },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
