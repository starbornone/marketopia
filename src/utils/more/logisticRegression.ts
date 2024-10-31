import { sigmoid } from "../sigmoid";

export const logisticRegression = (
  engagementRate: number, // Percentage (0 to 100)
  accountTenure: number, // Months
  campaignSuccess: number, // Scale of 1-5
  billingFrequency: string // 'Monthly' or 'Yearly'
): number => {
  // Normalize features
  const normalizedEngagementRate = engagementRate / 100; // 0 to 1
  const normalizedTenure = accountTenure / 60; // Assuming max tenure is 60 months
  const normalizedCampaignSuccess = (campaignSuccess - 1) / 4; // 0 to 1

  // Encode billing frequency
  const billingFrequencyValue = billingFrequency === "Yearly" ? 1 : 0;

  // Adjusted coefficients and intercept to match outputs with other models
  const intercept = 1.0;
  const coefficients = {
    engagementRate: -0.8,
    accountTenure: -0.4,
    campaignSuccess: -0.6,
    billingFrequency: -0.3,
  };

  // Linear combination
  const linearSum =
    intercept +
    coefficients.engagementRate * normalizedEngagementRate +
    coefficients.accountTenure * normalizedTenure +
    coefficients.campaignSuccess * normalizedCampaignSuccess +
    coefficients.billingFrequency * billingFrequencyValue;

  // Convert to probability
  const churnProbability = sigmoid(linearSum);

  // Return as percentage
  return churnProbability * 100;
};
