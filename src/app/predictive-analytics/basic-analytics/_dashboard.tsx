"use client";

import React, { useState, useEffect } from "react";
import styles from "./_dashboard.module.scss";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { logisticRegressionModel } from "@/utils/basic/logisticRegression";
import { randomForestModel } from "@/utils/basic/randomForest";
import { withVerbose } from "@/hoc/withVerbose";
import { xgboostModel } from "@/utils/basic/xgboost";

function Dashboard({ isVerbose }: { isVerbose: boolean }) {
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
          alt="Basic Analytics"
          src="/images/0308e150-8439-4cd7-a170-bb106ccc35d9.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/predictive-analytics/more-analytics",
              name: "More Analytics",
            },
          ]}
        />
      }
    >
      <TextArea>
        <h2>Basic Analytics</h2>
        {isVerbose && (
          <p>
            In this simulation, we can adjust these variables and choose from
            three different churn prediction models to see how they calculate
            the likelihood of a customer churning.
          </p>
        )}

        <form className="flex-content">
          <fieldset>
            <label htmlFor="frequency">Frequency of Usage</label>
            <input
              className={styles["slider"]}
              id="frequency"
              max="10"
              min="1"
              onChange={(e) => setFrequencyOfUsage(Number(e.target.value))}
              type="range"
              value={frequencyOfUsage}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="satisfaction">Satisfaction Score</label>
            <input
              className={styles["slider"]}
              id="satisfaction"
              max="10"
              min="1"
              onChange={(e) => setSatisfactionScore(Number(e.target.value))}
              type="range"
              value={satisfactionScore}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="time-since">Days Since Last Interaction</label>
            <input
              id="time-since"
              min="0"
              onChange={(e) =>
                setTimeSinceLastInteraction(Number(e.target.value))
              }
              type="number"
              value={timeSinceLastInteraction}
            />
          </fieldset>
        </form>

        <div className="flex-content">
          <button
            onClick={() => setSelectedModel("Logistic Regression")}
            type="button"
          >
            Logistic Regression
          </button>
          <button
            onClick={() => setSelectedModel("Random Forest")}
            type="button"
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
            <strong>Logistic Regression</strong> uses a weighted sum of the
            variables and applies a sigmoid function to output a probability
            between 0 and 100. It assumes linear relationships between variables
            and churn risk.
          </p>
        )}
        {selectedModel === "Random Forest" && (
          <p>
            <strong>Random Forest</strong> aggregates multiple decision trees to
            make a churn prediction. It considers how different factors like
            satisfaction, frequency, and time since the last interaction impact
            churn.
          </p>
        )}
        {selectedModel === "XGBoost" && (
          <p>
            <strong>XGBoost</strong> is a powerful model that builds multiple
            decision trees sequentially, with each tree correcting the errors of
            the previous ones. It&apos;s known for its high performance with
            larger datasets.
          </p>
        )}
      </TextArea>
    </Container>
  );
}

export default withVerbose(Dashboard);
