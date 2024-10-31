import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
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
      <TextArea>
        <h2>Nash Equilibrium</h2>
        <p>
          Nash Equilibrium is a concept where players reach a state in which no
          player can benefit from changing their strategy while others maintain
          their strategies. Here, each player&apos;s choice is optimal, given
          the choices of others. This situation leads to a stable outcome where
          players are incentivized to stick to their strategies.
        </p>
        <p>
          For example, we saw in the prisoner&apos;s dilemma that the unique
          Nash Equilibrium of the game is (Betray, Betray).
        </p>
        <p>
          Meanwhile, if competitors offer similar tools and pricing, we reach a
          point where no company can gain an advantage by unilaterally changing
          its strategy. This equilibrium might explain why price wars don&apos;t
          always lead to long-term customer retention; customers will switch
          between services as long as their expectations are met, regardless of
          minor pricing differences.
        </p>
        <p>
          Understanding this equilibrium means recognizing that merely reacting
          to competitors&apos; actions may not reduce churn. Instead, we need
          innovative strategies that shift customer behavior by offering unique
          value, breaking free from the Nash Equilibrium trap where no party can
          gain by changing strategies alone.
        </p>
      </TextArea>
    </Container>
  );
}
