import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { PayoffMatrix } from "@/components/payoff-matrix/payoff-matrix";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

const matrixData = {
  labels: {
    playerA: "Prisoner A",
    playerB: "Prisoner B",
    strategyA: "Cooperate",
    strategyB: "Betray",
  },
  data: [
    [
      { topLeft: "1 year", bottomRight: "1 year" },
      { topLeft: "3 years", bottomRight: "Free" },
    ],
    [
      { topLeft: "Free", bottomRight: "3 years" },
      { topLeft: "2 years", bottomRight: "2 years" },
    ],
  ],
};

export const metadata: Metadata = {
  title: `Prisoner's Dilemma | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Game Theory 101 Teacher"
          src="/images/e25ca41e-e2f1-4ba8-aa7b-092751348a98.png"
        />
      }
      text={
        <TextArea>
          <h2>Prisoner&apos;s Dilemma</h2>
          <p>
            The Prisoner&apos;s Dilemma is a classic example in game theory that
            shows how two rational individuals might not cooperate, even if it
            seems that working together would be in their best interest. Each
            player faces a choice to cooperate or betray the other, but the fear
            of being betrayed leads both to choose self-interest, resulting in a
            worse outcome for both.
          </p>
          <PayoffMatrix matrix={matrixData} />
          <p>
            This model is useful in analyzing competitive behaviors in
            economics, politics, and business where individuals or groups might
            prioritize their short-term gain over collective benefit, often
            leading to suboptimal outcomes. It highlights the tension between
            individual incentives and the overall good, making it an essential
            tool for understanding strategic decision-making.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/prisoners-dilemma/outcomes", name: "Outcomes" },
          ]}
        />
      }
    />
  );
}
