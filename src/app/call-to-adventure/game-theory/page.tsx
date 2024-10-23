import * as React from "react";
import { ImageArea } from "@/components/image-area/image-area";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { Container } from "@/components/container/container";

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/4c505b4a-b2da-43b2-a597-6e912ad76ea2.png"
          alt="Queen Celeste Mailer"
        />
      }
      text={
        <TextArea>
          <p>
            Game theory is a framework used to model strategic interactions
            between individuals or groups. It helps us analyze situations where
            the outcome of one person&apos;s decision depends on the decisions
            made by others.
          </p>
          <p>
            At its core, game theory studies how participants (called
            &quot;players&quot;) make decisions in competitive environments.
            These decisions impact not only their own outcomes but also the
            outcomes of others involved.
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
            In the context of our journey, we&apos;ll apply game theory to
            understand competitors&apos; actions, customer behavior, and how to
            craft strategies that maximize our own outcomes while anticipating
            the moves of others.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { route: "/", name: "Back" },
            { route: "/gathering-allies", name: "Gather Allies" },
          ]}
        />
      }
    />
  );
}
