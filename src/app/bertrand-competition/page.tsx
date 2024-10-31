import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";
import { Modal } from "@/components/modal/modal";

export const metadata: Metadata = {
  title: `Bertrand Competition | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Bertrand Competition"
          src="/images/70b37ad8-29ab-4df1-9792-b3324a5e6e4e.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/bertrand-competition/simulation", name: "Simulation" },
          ]}
        />
      }
    >
      <TextArea>
        <h2>Bertrand Competition</h2>
        <p>
          In a Bertrand Competition, firms compete by setting prices rather than
          quantities. Each firm assumes that its competitors&apos; prices will
          remain constant while it sets its own. The key outcome is that firms
          will continuously lower prices to gain market share until they reach a
          point where profits are driven to zero, leading to a price equal to
          marginal cost. This model illustrates the aggressive price competition
          in markets with identical products.
        </p>
        <p>
          Bertrand Competition highlights the dangers of competing solely on
          price. In a scenario where our services are identical to those offered
          by competitors, lowering prices to retain customers might only hurt us
          in the long term. If we engage in a price war, it will eventually lead
          to lower profit margins without necessarily reducing churn. Instead of
          focusing on price alone, we need to differentiate through{" "}
          <Modal triggerText="value-added services">
            Offering unique features, better customer support, or innovative
            solutions can keep us ahead of competitors.
          </Modal>{" "}
          that will keep customers loyal to Marketopia and help us escape the
          zero-profit trap of pure price competition.
        </p>
        <p>
          Instead of getting trapped in the price-driven competition that
          Bertrand models suggest, Marketopia must focus on offering a unique
          value proposition that makes our services indispensable to customers.
        </p>
      </TextArea>
    </Container>
  );
}
