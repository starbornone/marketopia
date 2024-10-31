import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Call to Adventure | ${defaultTitle}`,
};

export default function Page() {
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
              name: "Game Theory 101",
            },
          ]}
        />
      }
    >
      <TextArea>
        <h2>Welcome to Marketopia!</h2>
        <p>
          We are here to assist Queen Celeste Mailer in her quest to save the
          kingdom from its latest threat. The formidable{" "}
          <strong>Churn Dragon</strong> threatens our customer base, and if left
          unchecked, it could drain the lifeblood of Marketopia: our customers.
          The Churn Dragon represents the ever-present danger of losing valuable
          clients who stop using our tools.
        </p>
        <p>
          To defeat this menace, we must come together and wield the powers of{" "}
          <strong>game theory</strong>, <strong>predictive analytics</strong>,
          and, as a bonus round, <strong>gamification</strong>. Together, these
          tools will allow us to predict customer behavior, craft strategies
          that increase loyalty, and reduce the destructive forces of churn. Our
          journey is essential for the survival of the kingdom, as maintaining a
          healthy, engaged customer base is the key to our prosperity.
        </p>
        <p>
          Join us in the fight! With careful planning and strategy, we can
          outsmart the Churn Dragon and ensure that Marketopia flourishes under
          Queen Celeste Mailer&apos;s reign.
        </p>
      </TextArea>
    </Container>
  );
}
