"use client";

import React, { useState, useEffect } from "react";
import styles from "./_dashboard.module.scss";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { logisticRegression } from "@/utils/more/logisticRegression";
import { randomForestModel } from "@/utils/more/randomForest";
import { xgboostModel } from "@/utils/more/xgboost";
import { withVerbose } from "@/hoc/withVerbose";

function Dashboard({ isVerbose }: { isVerbose: boolean }) {
  const [engagementRate, setEngagementRate] = useState(50); // Percentage
  const [accountTenure, setAccountTenure] = useState(12); // In months
  const [campaignSuccess, setCampaignSuccess] = useState(2); // On a scale of 1-5 for CTR success
  const [billingFrequency, setBillingFrequency] = useState("Monthly");
  const [churnProbability, setChurnProbability] = useState(0);
  const [selectedModel, setSelectedModel] = useState("Logistic Regression");

  useEffect(() => {
    let churn = 0;

    if (selectedModel === "Logistic Regression") {
      churn = logisticRegression(
        engagementRate,
        accountTenure,
        campaignSuccess,
        billingFrequency
      );
    } else if (selectedModel === "Random Forest") {
      churn = randomForestModel(
        engagementRate,
        accountTenure,
        campaignSuccess,
        billingFrequency
      );
    } else if (selectedModel === "XGBoost") {
      churn = xgboostModel(
        engagementRate,
        accountTenure,
        campaignSuccess,
        billingFrequency
      );
    }

    setChurnProbability(Math.min(Math.max(churn, 0), 100));
  }, [
    engagementRate,
    accountTenure,
    campaignSuccess,
    billingFrequency,
    selectedModel,
  ]);

  return (
    <Container
      image={
        <ImageArea
          alt="More Analytics"
          src="/images/c5741513-40fd-493c-a81f-c1a53d8b4812.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/data-weight", name: "Data and Weighting" },
          ]}
        />
      }
    >
      <TextArea>
        <h2>More Analytics</h2>
        {isVerbose && (
          <p>
            In this simulation, adjust variables and choose from three different
            churn prediction models to see how they calculate the likelihood of
            a customer churning.
          </p>
        )}

        <form className={styles["form"]}>
          <fieldset>
            <label htmlFor="engagement">Engagement Rate</label>
            <input
              className={styles["slider"]}
              id="engagement"
              max="100"
              min="0"
              onChange={(e) => setEngagementRate(Number(e.target.value))}
              type="range"
              value={engagementRate}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="tenure">Account Tenure</label>
            <input
              className={styles["slider"]}
              id="tenure"
              max="60"
              min="1"
              onChange={(e) => setAccountTenure(Number(e.target.value))}
              type="range"
              value={accountTenure}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="campaign-success">Campaign Success</label>
            <input
              className={styles["slider"]}
              id="campaign-success"
              max="5"
              min="1"
              onChange={(e) => setCampaignSuccess(Number(e.target.value))}
              type="range"
              value={campaignSuccess}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="billing">Billing Frequency</label>
            <select
              id="billing"
              onChange={(e) => setBillingFrequency(e.target.value)}
              value={billingFrequency}
            >
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </fieldset>
        </form>

        <div className={styles["model-selection"]}>
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
