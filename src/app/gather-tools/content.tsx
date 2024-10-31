"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Let&apos;s Gather Our Tools</h2>
          <p>
            Game theory provides a range of tools to analyze strategic
            interactions, helping players anticipate outcomes and make informed
            choices. Here are some foundational concepts:
          </p>
          <ul>
            <li>
              <strong>Nash Equilibrium</strong>: A stable state in a game where
              no player can improve their outcome by changing their strategy
              alone; everyone&apos;s strategy is optimal given the others&apos;
              choices.
            </li>
            <li>
              <strong>Bertrand Competition</strong>: A market model where
              companies compete by setting prices. This often drives prices to
              the level of marginal cost, especially in highly competitive
              markets.
            </li>
            <li>
              <strong>Backward Induction</strong>: A method to predict rational
              choices by reasoning backward from the desired end state to
              determine earlier actions.
            </li>
            <li>
              <strong>Mixed Strategies</strong>: Use of randomized decisions in
              situations lacking a single clear best choice, often balancing
              probabilities to achieve equilibrium.
            </li>
            <li>
              <strong>Bayesian Games</strong>: A framework for analyzing
              decisions under uncertainty, where players have incomplete
              information about each other&apos;s types or intentions.
            </li>
          </ul>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Let&apos;s Gather Our Tools</h2>
          <p>
            Key concepts in game theory to analyze strategy and predict
            outcomes:
          </p>
          <ul>
            <li>
              <strong>Nash Equilibrium</strong>
            </li>
            <li>
              <strong>Bertrand Competition</strong>
            </li>
            <li>
              <strong>Backward Induction</strong>
            </li>
            <li>
              <strong>Mixed Strategies</strong>
            </li>
            <li>
              <strong>Bayesian Games</strong>
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
