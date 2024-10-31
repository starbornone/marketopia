"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";
import { PayoffMatrix } from "@/components/payoff-matrix/payoff-matrix";

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

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
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
            In the version of the Prisoner&apos;s Dilemma shown above, we
            observe the following rules:
          </p>
          <ul>
            <li>
              <strong>If both prisoners cooperate</strong>, they each get 1 year
              in prison. Cooperation leads to a moderately good outcome for
              both, as they receive reduced sentences.
            </li>
            <li>
              <strong>
                If one prisoner betrays while the other cooperates
              </strong>
              , the betrayer goes free (0 years) while the cooperating prisoner
              receives 3 years. This creates a strong incentive to betray, as
              each prisoner fears being left with the worst punishment if the
              other betrays them.
            </li>
            <li>
              <strong>If both betray</strong>, each prisoner receives 2 years, a
              less ideal outcome than mutual cooperation but safer than risking
              3 years.
            </li>
          </ul>
          <p>
            This model is useful in analyzing competitive behaviors in
            economics, politics, and business where individuals or groups might
            prioritize their short-term gain over collective benefit, often
            leading to suboptimal outcomes. It highlights the tension between
            individual incentives and the overall good, making it an essential
            tool for understanding strategic decision-making.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Prisoner&apos;s Dilemma</h2>
          <p>
            A classic game theory example where two individuals might not
            cooperate, even when it&apos;s mutually beneficial. Fear of betrayal
            leads both to choose self-interest, resulting in worse outcomes for
            both.
          </p>
          <PayoffMatrix matrix={matrixData} />
          <ul>
            <li>
              <strong>Both Cooperate:</strong> Each gets 1 year.
            </li>
            <li>
              <strong>One Betrays, One Cooperates:</strong> Betrayer goes free;
              cooperator gets 3 years.
            </li>
            <li>
              <strong>Both Betray:</strong> Each gets 2 years.
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
