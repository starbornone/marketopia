"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
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
      ) : (
        <TextArea>
          <h2>Prisoner&apos;s Dilemma Outcomes</h2>
          <p>
            <strong>Short-term:</strong> Betrayal is the dominant strategy as it
            reduces individual risk; both betray = 2 years each.
          </p>
          <p>
            <strong>Long-term:</strong> In repeated play, cooperation becomes
            beneficial, resulting in 1 year each if both cooperate consistently.
          </p>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
