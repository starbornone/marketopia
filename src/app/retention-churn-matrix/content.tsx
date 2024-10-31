"use client";

import { PayoffMatrix } from "@/components/payoff-matrix/payoff-matrix";
import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";
import { useState } from "react";

const matrices = [
  {
    description: (
      <p>
        In the <strong>Retention Investment vs. Customer Loyalty</strong>{" "}
        matrix, we explore the interplay between how much a business invests in
        retaining customers and the customers&apos; loyalty. When the business
        invests minimal effort into retention strategies and loyalty is low, the
        customer churns, and neither party gains any value. If loyalty is high
        with minimal effort, the business benefits moderately, but the payoff is
        smaller compared to when substantial retention efforts are made. A
        substantial investment in retention coupled with high loyalty yields the
        most favorable outcome, with both the business and customer gaining
        significant value. However, if the business invests substantially but
        customer loyalty is low, the business may incur a loss due to
        ineffective investment.
      </p>
    ),
    shortDescription: (
      <p>
        How investment in retention affects customer loyalty and business
        outcomes. Low investment and loyalty lead to no gains, while high
        investment and loyalty result in significant gains for both parties.
      </p>
    ),
    table: {
      labels: {
        playerA: "Business",
        playerB: "Customer",
        strategyA: "Retention Investment",
        strategyB: "Customer Loyalty",
      },
      data: [
        [
          { topLeft: "+0", bottomRight: "+0" },
          { topLeft: "+200", bottomRight: "+50" },
        ],
        [
          { topLeft: "-100", bottomRight: "+0" },
          { topLeft: "+800", bottomRight: "+300" },
        ],
      ],
    },
  },
  {
    description: (
      <p>
        The <strong>Service Quality vs. Customer Satisfaction</strong> matrix
        highlights how service quality affects satisfaction, which in turn
        impacts churn. Poor service quality and low customer satisfaction result
        in churn and losses for both the business and the customer. If the
        service quality is high but customer satisfaction is low, perhaps due to
        unmet expectations, the business gains little, and the customer may
        still churn. When service quality is poor but customer satisfaction is
        high, which is unlikely but possible due to other factors, the business
        sees moderate gains. The optimal scenario is when both service quality
        and customer satisfaction are high, leading to the highest payoffs and
        customer retention.
      </p>
    ),
    shortDescription: (
      <p>
        How service quality influences customer satisfaction and churn. Poor
        quality and satisfaction lead to losses, while high quality and
        satisfaction maximize retention and gains.
      </p>
    ),
    table: {
      labels: {
        playerA: "Business",
        playerB: "Customer",
        strategyA: "Service Quality",
        strategyB: "Customer Satisfaction",
      },
      data: [
        [
          { topLeft: "-200", bottomRight: "-100" },
          { topLeft: "+50", bottomRight: "+0" },
        ],
        [
          { topLeft: "+100", bottomRight: "+50" },
          { topLeft: "+700", bottomRight: "+300" },
        ],
      ],
    },
  },
  {
    description: (
      <p>
        Finally, the <strong>Marketing Effort vs. Churn Risk</strong> matrix
        shows how different levels of marketing efforts affect customers with
        varying churn risks. Minimal marketing effort with a low churn risk
        brings small gains, but when churn risk is high, a lack of marketing can
        lead to significant losses. Moderate marketing efforts help reduce churn
        risk and bring moderate gains. Significant marketing efforts paired with
        low churn risk yield strong customer retention and high gains. For
        high-risk customers, significant marketing can reduce churn but often
        comes at a higher cost, leading to moderate net gains.
      </p>
    ),
    shortDescription: (
      <p>
        How marketing efforts impact customers with different churn risks.
        Minimal effort yields small gains for low-risk customers but losses for
        high-risk ones. Increased efforts reduce churn and enhance retention.
      </p>
    ),
    table: {
      labels: {
        playerA: "Business",
        playerB: "Customer",
        strategyA: "Marketing Effort",
        strategyB: "Churn Risk",
      },
      data: [
        [
          { topLeft: "+50", bottomRight: "+0" },
          { topLeft: "-100", bottomRight: "-50" },
        ],
        [
          { topLeft: "+200", bottomRight: "+50" },
          { topLeft: "+0", bottomRight: "-20" },
        ],
        [
          { topLeft: "+500", bottomRight: "+100" },
          { topLeft: "+200", bottomRight: "+50" },
        ],
      ],
    },
  },
];

function Content({ isVerbose }: { isVerbose: boolean }) {
  const [currentMatrix, setCurrentMatrix] = useState(0);

  return (
    <TextArea>
      <h2>Strategies and Costs</h2>
      <div className="flex-content">
        <button onClick={() => setCurrentMatrix(0)}>
          Retention Investment vs. Customer Loyalty
        </button>
        <button onClick={() => setCurrentMatrix(1)}>
          Service Quality vs. Customer Satisfaction
        </button>
        <button onClick={() => setCurrentMatrix(2)}>
          Marketing Effort vs. Churn Risk
        </button>
      </div>
      {isVerbose
        ? matrices[currentMatrix].description
        : matrices[currentMatrix].shortDescription}
      <PayoffMatrix matrix={matrices[currentMatrix].table} />
    </TextArea>
  );
}

export default withVerbose(Content);
