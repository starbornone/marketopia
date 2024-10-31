"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>The Role of Data and Weighting</h2>
          <p>
            Predictive modeling is only as effective as the data it relies on.
            Data-driven decision-making, especially in scenarios like churn
            prediction, hinges on two critical factors: the quality of the data
            and how features (inputs) are weighted.
          </p>

          <h3>The Importance of High-Quality Data</h3>
          <p>
            Data quality is fundamental. Poor-quality data can lead to
            inaccurate predictions, no matter how advanced the model is. In
            predictive models like the ones we use for churn forecasting,
            unreliable data will skew the results, making it difficult to
            interpret customer behavior accurately.
          </p>
          <p>Key aspects of high-quality data include:</p>
          <ul>
            <li>
              <strong>Accuracy:</strong> Ensure the data reflects real customer
              interactions and isn&apos;t out of date or incorrect. For example,
              an outdated customer satisfaction score will lead to incorrect
              churn predictions.
            </li>
            <li>
              <strong>Completeness:</strong> Incomplete data (e.g., missing
              frequency of usage or time since the last interaction) will
              distort predictions. Missing data points should either be imputed
              carefully or excluded.
            </li>
            <li>
              <strong>Consistency:</strong> Ensure that the data is consistent
              across different sources. For example, customer activity data
              should align with satisfaction surveys and other indicators.
            </li>
          </ul>

          <h3>Why Weighting Matters</h3>
          <p>
            Proper weighting in predictive models is crucial because it ensures
            that each feature&apos;s importance is reflected accurately in the
            final predictions. In churn prediction, factors like customer
            satisfaction, frequency of usage, and time since the last
            interaction play different roles in determining churn risk.
          </p>
          <p>
            If the weights (coefficients) are misaligned, the model may
            overemphasize some features while underestimating the impact of
            others. For example:
          </p>
          <ul>
            <li>
              <strong>Under-weighting:</strong> If the time since last
              interaction is given too little weight, the model might fail to
              capture the importance of inactivity as a key predictor of churn.
            </li>
            <li>
              <strong>Over-weighting:</strong> Conversely, if satisfaction is
              over-weighted, the model might overlook customers who are
              moderately satisfied but disengaged.
            </li>
          </ul>

          <h3>The Balance Between Features</h3>
          <p>
            The effectiveness of a model depends on striking the right balance
            between different features. In churn prediction, a combination of
            factors influences customer behavior. Weighting each feature
            correctly ensures that the final prediction reflects real-world
            patterns.
          </p>
          <p>
            For example, while high customer satisfaction reduces churn risk,
            it&apos;s not a guarantee of retention. The frequency of usage and
            recency of interaction are equally important, if not more so, in
            many cases. That&apos;s why the coefficients for each feature need
            to be fine-tuned based on historical data and business context.
          </p>

          <h3>Calibrating the Model</h3>
          <p>
            To ensure our model performs optimally, it&apos;s important to test
            different weightings and adjust them based on real-world outcomes.
            This calibration process involves iterating on the model by using
            actual churn data and observing how well the predictions match
            reality.
          </p>
          <p>
            Once we find the right balance between the features and ensure our
            data is accurate and up to date, our model can offer powerful
            predictions that allow us to proactively address customer behavior
            before churn occurs.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Data &amp; Weighting in Predictive Modeling</h2>
          <ul>
            <li>
              <strong>Data Quality:</strong> Accuracy, Completeness, Consistency
            </li>
            <li>
              <strong>Feature Weighting:</strong> Proper importance of factors
              like satisfaction &amp; usage
            </li>
            <li>
              <strong>Balance:</strong> Ensure all relevant features influence
              predictions
            </li>
            <li>
              <strong>Model Calibration:</strong> Adjust weights based on
              real-world outcomes
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
