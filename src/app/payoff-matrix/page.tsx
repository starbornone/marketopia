import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Payoff Matrix | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Game Theory Payoff Matrix"
          src="/images/0d3bb48c-acd7-434c-8b79-a098d876c358.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/prisoners-dilemma", name: "Prisoner's Dilemma" },
          ]}
        />
      }
    >
      <TextArea>
        <h2>The Payoff Matrix</h2>
        <p>
          The payoff matrix is a key tool in game theory that represents the
          potential outcomes of a strategic interaction between players. Each
          cell in the matrix shows the payoffs for all players based on their
          chosen strategies. By examining the matrix, players can evaluate the
          outcomes of different decisions and how those decisions impact both
          themselves and others.
        </p>
        <h3>Normal Form</h3>
        <p>
          The normal form of a game, which uses a payoff matrix, presents the
          strategic interaction in a simplified and structured manner. It
          clearly shows the available strategies and associated payoffs for each
          player, making it easier to analyze optimal strategies and outcomes.
          This form is particularly useful for comparing strategies and
          predicting equilibrium points.
        </p>
        <h3>Dominated Strategies</h3>
        <p>
          A dominated strategy is one that results in a worse payoff than
          another strategy, regardless of the opponent&apos;s actions.
          Identifying and eliminating dominated strategies can simplify the
          decision-making process, as rational players will typically avoid
          dominated options, focusing on strategies that could lead to better
          payoffs.
        </p>
      </TextArea>
    </Container>
  );
}
