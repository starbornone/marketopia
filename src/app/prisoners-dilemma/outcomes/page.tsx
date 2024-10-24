import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Prisoner's Dilemma Outcomes | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Game Theory 101 Teacher"
          src="/images/50e09ff5-fc42-4e1b-8f77-0792b6b6b38d.png"
        />
      }
      text={
        <TextArea>
          <h2>Prisoner&apos;s Dilemma Outcomes</h2>
          <p>
            In the short term, the dominant strategy in the Prisoner&apos;s
            Dilemma can be explained by looking at the values in the matrix.{" "}
            <strong>Betrayal</strong> is the dominant strategy because each
            prisoner minimizes their potential loss by betraying, regardless of
            the other prisoner&apos;s choice. For example, if Prisoner A
            cooperates and Prisoner B betrays, Prisoner A receives 3 years while
            Prisoner B goes free. On the other hand, if both betray, they each
            receive 2 years, which is a better outcome for the betrayer compared
            to cooperating and being betrayed.
          </p>
          <p>
            However, in <em>repeated interactions</em>,{" "}
            <strong>cooperation</strong> becomes more beneficial. When the game
            is played multiple times, players can learn from past behavior, and
            cooperation begins to offer better long-term results. If both
            prisoners repeatedly cooperate, they each serve 1 year per
            interaction. This is a better outcome than mutual betrayal, which
            results in 2 years per interaction. The ability to retaliate against
            betrayal in future rounds creates an incentive to cooperate, leading
            to a more favorable outcome for both over time.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/gather-tools", name: "Gather Tools" },
          ]}
        />
      }
    />
  );
}
