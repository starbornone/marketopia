import Content from "./content";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Personalized Incentives | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Personalized Incentives"
          src="/images/33b64b50-c59f-40da-b923-8fea96020e2b.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/referral-rewards",
              name: "Referral & Rewards",
            },
          ]}
        />
      }
    >
      <Content />
    </Container>
  );
}
