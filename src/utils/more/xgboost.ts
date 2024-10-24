export const xgboostModel = (
  engagementRate: number,
  accountTenure: number,
  campaignSuccess: number,
  billingFrequency: string
): number => {
  const billingValue = billingFrequency === "Yearly" ? 1 : 0;

  // Simulating an XGBoost prediction using gradient boosting logic
  let score = 0;

  // First tree
  score += engagementRate > 50 ? -0.4 : engagementRate < 20 ? 0.6 : -0.2;

  // Second tree (correcting previous errors)
  score += accountTenure > 12 && campaignSuccess >= 4 ? -0.3 : 0.3;

  // Third tree (another correction step)
  score += billingValue === 1 ? -0.5 : 0.5;

  // Convert the final score into a probability using a sigmoid
  const churnProbability = 1 / (1 + Math.exp(-score));

  return churnProbability * 100;
};
