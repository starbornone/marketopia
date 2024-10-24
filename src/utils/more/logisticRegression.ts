import { sigmoid } from "../sigmoid";

export const logisticRegression = (
  engagementRate: number, // Measured in percentage (0 to 100)
  accountTenure: number, // Measured in months
  campaignSuccess: number, // Measured on a scale of 1-5
  billingFrequency: string // 'Monthly' or 'Yearly'
): number => {
  // Normalize/Scale the features as needed
  const normalizedEngagementRate = engagementRate / 100; // scale to 0-1
  const normalizedTenure = accountTenure / 60; // assuming max tenure is 60 months
  const normalizedCampaignSuccess = (campaignSuccess - 1) / 4; // scale from 1-5 to 0-1

  // Encode billingFrequency as 0 for 'Monthly' and 1 for 'Yearly'
  const billingFrequencyValue = billingFrequency === "Yearly" ? 1 : 0;

  // Adjusted coefficients to meet the churn target (~60%) for the given scenario
  const intercept = 0.2; // Adjusted for a base churn of ~60% in the specified scenario
  const coefficients = {
    engagementRate: -1.8, // Engagement rate should reduce churn, so negative
    accountTenure: -0.5, // Tenure has a moderate negative effect
    campaignSuccess: -0.7, // Campaign success moderately reduces churn
    billingFrequency: -0.4, // Yearly billing slightly reduces churn
  };

  // Linear sum for the logistic regression model
  const linearSum =
    intercept +
    coefficients.engagementRate * normalizedEngagementRate +
    coefficients.accountTenure * normalizedTenure +
    coefficients.campaignSuccess * normalizedCampaignSuccess +
    coefficients.billingFrequency * billingFrequencyValue;

  // Sigmoid function to convert the linear sum to a probability (0 to 1)
  const churnProbability = sigmoid(linearSum);

  // Return churn probability as a percentage (0 to 100)
  return churnProbability * 100;
};
