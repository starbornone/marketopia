"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Prediction Models</h2>
          <p>
            By analyzing key factors that contribute to churn, businesses can
            intervene early to retain customers. Here are common variables used
            in churn prediction models:
          </p>
          <ul>
            <li>
              <strong>Frequency of Usage:</strong> How often a customer
              interacts with our service. High frequency usually indicates
              greater engagement and lower churn risk.
            </li>
            <li>
              <strong>Satisfaction Score:</strong> Measured through surveys or
              feedback, higher scores typically mean a reduced risk of churn.
            </li>
            <li>
              <strong>Time Since Last Interaction:</strong> The longer the gap
              since the last interaction, the higher the likelihood of
              disengagement and churn.
            </li>
          </ul>
          <p>
            By monitoring these variables in real-time, businesses can identify
            at-risk customers and intervene with proactive strategies like
            personalized messages, promotions, or targeted support to keep them
            engaged.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Prediction Models</h2>
          <p>
            Analyzing <strong>usage frequency</strong>,{" "}
            <strong>satisfaction scores</strong>, and{" "}
            <strong>time since last interaction</strong> helps identify churn
            risk.
          </p>
          <p>
            Real-time monitoring allows <strong>proactive interventions</strong>{" "}
            like personalized offers to retain customers.
          </p>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
