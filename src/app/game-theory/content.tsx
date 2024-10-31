"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";
import { Modal } from "@/components/modal/modal";

function Content({ isVerbose }: { isVerbose: boolean }) {
  const inThe1940s =
    "John von Neumann and Oskar Morgenstern authored the 'Theory of Games and Economic Behavior', published in 1944. It is considered the text that created the interdisciplinary research field of game theory.";
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>What is Game Theory?</h2>
          <p>
            Game theory is a concept from <strong>economics</strong> used to
            model strategic interactions between individuals or groups.
            Developed by mathematician <strong>John von Neumann</strong> and
            economist <strong>Oskar Morgenstern</strong>{" "}
            <Modal triggerText="in the 1940s">{inThe1940s}</Modal>, game theory
            has become a key tool to study decision-making and competitive
            behavior.
          </p>
          <p>Some key concepts within game theory include:</p>
          <ul>
            <li>
              <strong>Zero-Sum Games:</strong> A situation where one
              player&apos;s gain is exactly equal to the other player&apos;s
              loss. In zero-sum games, the total resources available remain
              constant.
            </li>
            <li>
              <strong>Cooperative Games:</strong> These games allow for
              collaboration between players, where they can work together to
              achieve better outcomes than they could individually.
            </li>
            <li>
              <strong>Prisoner&apos;s Dilemma:</strong> A classic example of why
              two rational players might not cooperate even if it appears to be
              in their best interests, showing the tension between individual
              and collective benefit.
            </li>
            <li>
              <strong>Dominant Strategy:</strong> A strategy that yields the
              best outcome for a player regardless of the strategies chosen by
              other players.
            </li>
            <li>
              <strong>Sequential Games:</strong> Games where players take turns
              making moves, allowing each player to see and react to the
              previous player&apos;s action.
            </li>
            <li>
              <strong>Evolutionary Game Theory:</strong> An approach to game
              theory that focuses on how strategies evolve over time, often
              applied to biology and social behavior.
            </li>
          </ul>
          <p>
            We&apos;ll apply game theory to understand competitors&apos;
            actions, customer behavior, and how to craft strategies that
            maximize our own outcomes while anticipating the moves of others.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>What is Game Theory?</h2>
          <p>
            Game theory is a concept from <strong>economics</strong> developed
            by mathematician <em>John von Neumann</em> and economist{" "}
            <em>Oskar Morgenstern</em>{" "}
            <Modal triggerText="in the 1940s">{inThe1940s}</Modal>.
          </p>
          <p>Key concepts include:</p>
          <ul>
            <li>
              <strong>Zero-Sum Games</strong>
            </li>
            <li>
              <strong>Cooperative Games</strong>
            </li>
            <li>
              <strong>Prisoner&apos;s Dilemma</strong>
            </li>
            <li>
              <strong>Dominant Strategy</strong>
            </li>
            <li>
              <strong>Sequential Games</strong>
            </li>
            <li>
              <strong>Evolutionary Game Theory</strong>
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
