"use client";

import { Modal } from "@/components/modal/modal";
import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  const nashEquilibrium =
    "Proposed by John Forbes Nash Jr., the Nash equilibrium is the most commonly-used solution concept for non-cooperative games.";

  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Nash Equilibrium</h2>
          <p>
            The <Modal triggerText="Nash Equilibrium">{nashEquilibrium}</Modal>{" "}
            is a concept where players reach a state in which no player can
            benefit from changing their strategy while others maintain their
            strategies. Here, each player&apos;s choice is optimal, given the
            choices of others. This situation leads to a stable outcome where
            players are incentivized to stick to their strategies.
          </p>
          <p>
            For example, we saw in the prisoner&apos;s dilemma that the unique
            Nash Equilibrium of the game is (Betray, Betray).
          </p>
          <p>
            Meanwhile, if competitors offer similar tools and pricing, we reach
            a point where no company can gain an advantage by unilaterally
            changing its strategy. This equilibrium might explain why price wars
            don&apos;t always lead to long-term customer retention; customers
            will switch between services as long as their expectations are met,
            regardless of minor pricing differences.
          </p>
          <p>
            Understanding this equilibrium means recognizing that merely
            reacting to competitors&apos; actions may not improve our situation.
            Instead, we need innovative strategies that shift customer behavior
            by offering unique value, breaking free from the Nash Equilibrium
            trap where no party can gain by changing strategies alone.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Nash Equilibrium</h2>
          <p>
            The <Modal triggerText="Nash Equilibrium">{nashEquilibrium}</Modal>{" "}
            is a state where players&apos; strategies are optimal, with no
            incentive to change if others don&apos;t.
          </p>
          <ul>
            <li>
              In business, similar pricing leads to equilibrium, limiting gains
              from small changes.
            </li>
            <li>
              Breaking free of equilibrium requires unique value to influence
              customer behavior.
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
