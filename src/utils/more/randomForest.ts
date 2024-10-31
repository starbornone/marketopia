export const randomForestModel = (
  engagementRate: number,
  accountTenure: number,
  campaignSuccess: number,
  billingFrequency: string
): number => {
  const billingValue = billingFrequency === "Yearly" ? 1 : 0;

  // Decision Tree 1
  const decision1 =
    engagementRate > 60 && campaignSuccess >= 4
      ? 0.2
      : engagementRate < 30 && campaignSuccess <= 2
      ? 0.7
      : 0.5;

  // Decision Tree 2
  const decision2 =
    accountTenure > 24 && billingValue === 1
      ? 0.25
      : accountTenure < 6
      ? 0.65
      : 0.5;

  // Decision Tree 3
  const decision3 =
    engagementRate > 80 ? 0.15 : campaignSuccess < 3 ? 0.6 : 0.45;

  // Average the decisions
  const churnProbability = (decision1 + decision2 + decision3) / 3;

  return churnProbability * 100;
};
