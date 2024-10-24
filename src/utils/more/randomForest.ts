export const randomForestModel = (
  engagementRate: number,
  accountTenure: number,
  campaignSuccess: number,
  billingFrequency: string
): number => {
  const billingValue = billingFrequency === "Yearly" ? 1 : 0;

  // Example of random forest logic (aggregating multiple decision trees)
  const decision1 =
    engagementRate > 40 && accountTenure > 6 && campaignSuccess >= 3
      ? 0.2
      : 0.6;
  const decision2 =
    billingValue === 1 && engagementRate > 60
      ? 0.1
      : engagementRate < 20
      ? 0.7
      : 0.5;
  const decision3 = campaignSuccess >= 4 && accountTenure > 12 ? 0.15 : 0.55;

  // Average the results of the decision trees
  const churnProbability = (decision1 + decision2 + decision3) / 3;

  return churnProbability * 100;
};
