import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { Modal } from "@/components/modal/modal";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Game Theory 101 | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Game Theory 101"
          src="/images/c74ad2f8-1d1a-4c86-8086-6d129fb8676b.png"
        />
      }
      text={
        <TextArea>
          <h2>What is Game Theory?</h2>
          <p>
            Game theory is a concept from economics used to model strategic
            interactions between individuals or groups. It helps us analyze
            situations where the outcome of one person&apos;s decision depends
            on the decisions made by others.
          </p>
          <p>
            Developed by mathematician John von Neumann and economist Oskar
            Morgenstern{" "}
            <Modal triggerText="in the 1940s">
              John von Neumann and Oskar Morgenstern authored the &apos;Theory
              of Games and Economic Behavior&apos;, published in 1944. It is
              considered the text that created the interdisciplinary research
              field of game theory.
            </Modal>
            , game theory has become a key tool to study decision-making and
            competitive behavior.
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
          </ul>
          <p>
            We&apos;ll apply game theory to understand competitors&apos;
            actions, customer behavior, and how to craft strategies that
            maximize our own outcomes while anticipating the moves of others.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/payoff-matrix", name: "Payoff Matrix" },
          ]}
        />
      }
    />
  );
}
