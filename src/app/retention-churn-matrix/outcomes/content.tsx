"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Outcomes</h2>
          <p>
            When analyzing the outcomes across the three strategies—Retention
            Investment, Service Quality, and Marketing Effort—we observe
            distinct patterns in how each strategy impacts customer churn and
            business gains.
          </p>
          <h3>Retention Investment vs. Customer Loyalty</h3>
          <p>
            Substantial investment in retention yields significant gains only
            when customer loyalty is high. Investing heavily without
            corresponding customer loyalty can result in losses. Therefore,
            aligning retention efforts with customer loyalty levels is crucial.
          </p>
          <h3>Service Quality vs. Customer Satisfaction</h3>
          <p>
            High service quality must be accompanied by high customer
            satisfaction to maximize retention and profits. Mismatches, such as
            high quality but low satisfaction, may not yield the desired
            outcomes, highlighting the importance of managing customer
            expectations.
          </p>
          <h3>Marketing Effort vs. Churn Risk</h3>
          <p>
            Significant marketing efforts are most effective with low churn risk
            customers, leading to strong retention and high gains. For high-risk
            customers, increased marketing can reduce churn but may offer
            diminishing returns due to higher costs.
          </p>
          <p>
            Overall, these matrices illustrate the need for strategic alignment
            between business efforts and customer characteristics. Careful
            analysis and targeted strategies can optimize outcomes, balancing
            costs with potential gains.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Key Outcomes</h2>
          <ul>
            <li>
              <strong>Retention Investment:</strong> High gains when aligned
              with high customer loyalty; potential losses if loyalty is low.
            </li>
            <li>
              <strong>Service Quality:</strong> Maximum benefits when both
              service quality and customer satisfaction are high.
            </li>
            <li>
              <strong>Marketing Effort:</strong> Most effective with low churn
              risk customers; diminishing returns with high-risk customers.
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
