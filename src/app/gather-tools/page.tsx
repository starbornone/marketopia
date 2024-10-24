import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Gather Tools | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Gathering Allies"
          src="/images/042be389-e61c-47ab-aed3-e6cc0cb3c68b.png"
        />
      }
      text={
        <TextArea>
          <h2>Let&apos;s Gather Our Tools</h2>
          <p>
            Now that you&apos;ve heard the call, it&apos;s time to gather the
            tools we&apos;ll need for your journey. The realm&apos;s chief
            strategist, Lingming, will walk us through some of the main
            concepts.
          </p>
          <ul>
            <li>
              <strong>Nash Equilibrium</strong>: A state where no player can
              benefit by changing their strategy unilaterally.
            </li>
            <li>
              <strong>Bertrand Competition</strong>: A market structure where
              firms compete by setting prices, often driving prices down to
              marginal cost.
            </li>
            <li>
              <strong>Backward Induction</strong>: Predicting optimal decisions
              by reasoning backward from the final outcome.
            </li>
            <li>
              <strong>Mixed Strategies</strong>: Randomized decisions used in
              games without a pure strategy equilibrium.
            </li>
            <li>
              <strong>Payoff Matrices</strong>: Representations of players&apos;
              preferences and outcomes to calculate best responses.
            </li>
            <li>
              <strong>Bayesian Games</strong>: Tools for decision-making under
              incomplete information.
            </li>
          </ul>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/nash-equilibrium",
              name: "Nash Equilibrium",
            },
          ]}
        />
      }
    />
  );
}
