"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>What We Can Learn</h2>
          <p>
            Bertrand Competition calculations help us understand the balance
            between pricing strategies and market capture. By setting prices
            lower than the competition, we may gain market share. Conversely,
            premium pricing might result in a smaller share but could lead to
            higher margins depending on the market. It&apos;s crucial to balance
            these aspects when making strategic decisions.
          </p>
          <h2>Potential Problems</h2>
          <p>
            While this model provides an estimate, it&apos;s based purely on
            price and does not account for factors such as product quality,
            brand loyalty, or marketing efforts. Also, the model can suggest
            extreme outcomes (such as negative or overly high market share),
            which might not be realistic. Additionally, the pricing of services
            often involves complex negotiations and other variables.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>What We Can Learn</h2>
          <p>
            Lower prices can increase market share, while premium pricing may
            yield higher margins.
          </p>
          <p>
            The model focuses on price alone, ignoring <strong>quality</strong>,{" "}
            <strong>loyalty</strong>, and <strong>marketing</strong>.
          </p>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
