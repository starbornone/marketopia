import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
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
      <TextArea>
        <h2>Personalized Incentives</h2>
        <p>
          Personalized incentives are a powerful way to engage and retain your
          allies. By tailoring rewards to individual behaviors and preferences,
          you can encourage meaningful engagement and drive loyalty. Whether it
          be offering special discounts for top performers or exclusive access
          to new features, these incentives can strengthen the bond between you
          and your allies.
        </p>
      </TextArea>
    </Container>
  );
}
