"use client";

import { Modal } from "@/components/modal/modal";
import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  const bertrandCompetition =
    "The model was formulated in 1883 by Joseph Louis François Bertrand in a review of Antoine Augustin Cournot's book 'Recherches sur les Principes Mathématiques de la Théorie des Richesses' in which Cournot had put forward the Cournot model.";
  const valueAddedServices =
    "Offering unique features, better customer support, or innovative solutions can keep us ahead of competitors.";

  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Bertrand Competition</h2>
          <p>
            In a{" "}
            <Modal triggerText="Bertrand Competition">
              {bertrandCompetition}
            </Modal>
            , firms compete by setting prices rather than quantities. Each firm
            assumes that its competitors&apos; prices will remain constant while
            it sets its own. The key outcome is that firms will continuously
            lower prices to gain market share until they reach a point where
            profits are driven to zero, leading to a price equal to marginal
            cost. This model illustrates the aggressive price competition in
            markets with identical products.
          </p>
          <p>
            Bertrand Competition highlights the dangers of competing solely on
            price. In a scenario where our services are identical to those
            offered by competitors, lowering prices to retain customers might
            only hurt us in the long term. If we engage in a price war, it will
            eventually lead to lower profit margins without necessarily
            increasing customer loyalty. Instead of focusing on price alone, we
            need to differentiate through{" "}
            <Modal triggerText="value-added services">
              {valueAddedServices}
            </Modal>{" "}
            that will keep customers loyal to Marketopia and help us escape the{" "}
            <strong>zero-profit trap</strong> of pure price competition.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Bertrand Competition</h2>
          <p>
            In{" "}
            <Modal triggerText="Bertrand Competition">
              {bertrandCompetition}
            </Modal>
            , companies compete by adjusting prices. This often leads to
            aggressive price cuts, pushing prices down to marginal cost. Relying
            solely on price can create a <strong>zero-profit trap</strong>.
          </p>
          <p>
            To avoid this, Marketopia should focus on{" "}
            <Modal triggerText="value-added services">
              {valueAddedServices}
            </Modal>
            , offering features or support that encourage customer loyalty
            without engaging in a price war.
          </p>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
