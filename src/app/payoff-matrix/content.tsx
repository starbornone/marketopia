"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
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
            clearly shows the available strategies and associated payoffs for
            each player, making it easier to analyze optimal strategies and
            outcomes. This form is particularly useful for comparing strategies
            and predicting equilibrium points.
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
      ) : (
        <TextArea>
          <h2>The Payoff Matrix</h2>
          <p>
            A tool that displays potential outcomes for each player based on
            their chosen strategies. Each cell shows the payoffs, helping
            players evaluate the results of different decisions.
          </p>
          <ul>
            <li>
              <strong>Normal Form</strong> organizes a game in matrix form,
              listing all strategies and payoffs.
            </li>
            <li>
              <strong>Dominated Strategies</strong> yield a worse payoff than
              other options, regardless of the opponent&apos;s actions.
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
