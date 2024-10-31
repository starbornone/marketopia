// XGBoost Model
export const xgboostModel = (
  engagementRate: number,
  accountTenure: number,
  campaignSuccess: number,
  billingFrequency: string
): number => {
  const billingValue = billingFrequency === "Yearly" ? 1 : 0;

  let score = 0;

  // Tree 1
  score += engagementRate > 70 ? -0.8 : engagementRate < 40 ? 0.6 : -0.2;

  // Tree 2
  score +=
    campaignSuccess >= 4 && accountTenure > 18
      ? -0.5
      : campaignSuccess <= 2
      ? 0.5
      : 0.0;

  // Tree 3
  score += billingValue === 1 ? -0.4 : 0.2;

  // Convert score to probability
  const churnProbability = 1 / (1 + Math.exp(-score));

  return churnProbability * 100;
};
