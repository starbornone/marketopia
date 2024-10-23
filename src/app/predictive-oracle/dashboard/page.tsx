"use client";

import React, { useState, useEffect } from "react";

import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { TextArea } from "@/components/text-area/text-area";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import Tooltip from "@/components/tooltip/tooltip";
import styles from "./dashboard.module.scss";

import { logisticRegressionModel } from "@/utils/logisticRegression";
import { randomForestModel } from "@/utils/randomForest";
import { xgboostModel } from "@/utils/xgboost";

export default function Page() {
  const [frequencyOfUsage, setFrequencyOfUsage] = useState(3);
  const [satisfactionScore, setSatisfactionScore] = useState(7);
  const [timeSinceLastInteraction, setTimeSinceLastInteraction] = useState(14);
  const [churnProbability, setChurnProbability] = useState(0);
  const [selectedModel, setSelectedModel] = useState("Logistic Regression");

  useEffect(() => {
    let churn = 0;

    if (selectedModel === "Logistic Regression") {
      churn = logisticRegressionModel(
        satisfactionScore,
        timeSinceLastInteraction,
        frequencyOfUsage
      );
    } else if (selectedModel === "Random Forest") {
      churn = randomForestModel(
        satisfactionScore,
        timeSinceLastInteraction,
        frequencyOfUsage
      );
    } else if (selectedModel === "XGBoost") {
      churn = xgboostModel(
        satisfactionScore,
        timeSinceLastInteraction,
        frequencyOfUsage
      );
    }

    setChurnProbability(Math.min(Math.max(churn, 0), 100));
  }, [
    frequencyOfUsage,
    satisfactionScore,
    timeSinceLastInteraction,
    selectedModel,
  ]);

  return (
    <Container
      image={
        <ImageArea
          src="/images/a3f2f4bc-60a2-4d75-895d-676f299ba274.png"
          alt="The Predictive Oracle"
        />
      }
      text={
        <TextArea>
          <h2>Predictive Analytics Dashboard</h2>
          <p>
            Customer churn is the phenomenon of customers stopping their use of
            a service. By analyzing key factors that contribute to churn,
            businesses can intervene early to retain customers. Here are the
            variables commonly used in churn prediction models:
          </p>
          <ul>
            <li>
              <strong>Frequency of Usage:</strong> How often a customer
              interacts with your service. High frequency of usage generally
              indicates greater customer engagement and lower churn risk.
            </li>
            <li>
              <strong>Satisfaction Score:</strong> This is typically measured
              through surveys or feedback systems, where customers rate their
              satisfaction on a scale of 1 to 10. Higher satisfaction scores
              correlate with reduced churn likelihood.
            </li>
            <li>
              <strong>Time Since Last Interaction:</strong> The number of days
              since a customer last interacted with your service. A longer time
              since the last interaction is often a warning sign of
              disengagement and a higher risk of churn.
            </li>
          </ul>
          <p>
            In this simulation, you can adjust these variables and choose from
            three different churn prediction models to see how they calculate
            the likelihood of a customer churning.
          </p>

          <form className={styles["form"]}>
            <fieldset>
              <label htmlFor="frequency">
                <Tooltip text="A score representing how often the customer interacts with the service. 1 represents very infrequent usage (e.g., once per month), while 10 represents very frequent usage (e.g., multiple times per day).">
                  Frequency of Usage
                </Tooltip>
              </label>
              <input
                className={styles["slider"]}
                type="range"
                id="frequency"
                min="1"
                max="10"
                value={frequencyOfUsage}
                onChange={(e) => setFrequencyOfUsage(Number(e.target.value))}
              />
              <div>{frequencyOfUsage}</div>
            </fieldset>
            <fieldset>
              <label htmlFor="satisfaction">
                <Tooltip text="A score indicating customer satisfaction. Higher values mean greater satisfaction.">
                  Satisfaction Score
                </Tooltip>
              </label>
              <input
                className={styles["slider"]}
                type="range"
                id="satisfaction"
                min="1"
                max="10"
                value={satisfactionScore}
                onChange={(e) => setSatisfactionScore(Number(e.target.value))}
              />
              <div>{satisfactionScore}</div>
            </fieldset>
            <fieldset>
              <label htmlFor="time-since">
                <Tooltip text="The number of days since the customer last interacted with the service.">
                  Days Since Last Interaction
                </Tooltip>
              </label>
              <input
                type="number"
                id="time-since"
                min="0"
                value={timeSinceLastInteraction}
                onChange={(e) =>
                  setTimeSinceLastInteraction(Number(e.target.value))
                }
              />
              <div>{timeSinceLastInteraction}</div>
            </fieldset>
          </form>

          <div className={styles["model-selection"]}>
            <button
              type="button"
              onClick={() => setSelectedModel("Logistic Regression")}
            >
              Logistic Regression
            </button>
            <button
              type="button"
              onClick={() => setSelectedModel("Random Forest")}
            >
              Random Forest
            </button>
            <button type="button" onClick={() => setSelectedModel("XGBoost")}>
              XGBoost
            </button>
          </div>

          <p className="emphasis">
            Predicted Churn Probability: {churnProbability.toFixed(2)}%
          </p>

          {selectedModel === "Logistic Regression" && (
            <p>
              Logistic Regression uses a weighted sum of the variables and
              applies a sigmoid function to output a probability between 0 and
              100. It assumes linear relationships between variables and churn
              risk.
            </p>
          )}
          {selectedModel === "Random Forest" && (
            <p>
              Random Forest aggregates multiple decision trees to make a churn
              prediction. It considers how different factors like satisfaction,
              frequency, and time since the last interaction impact churn.
            </p>
          )}
          {selectedModel === "XGBoost" && (
            <p>
              XGBoost is a powerful model that builds multiple decision trees
              sequentially, with each tree correcting the errors of the previous
              ones. It&apos;s known for its high performance with larger
              datasets.
            </p>
          )}
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/predictive-oracle/data", name: "Data" },
          ]}
        />
      }
    />
  );
}
