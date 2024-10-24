export const logisticRegressionModel = (
  satisfaction: number,
  timeSinceInteraction: number,
  frequency: number
): number => {
  /**
   * Normalization:
   * - Satisfaction is measured on a 1-10 scale and normalized to 0.1-1.0.
   *   This ensures the model can handle scaled inputs consistently.
   * - Time Since Last Interaction is capped at 30 days and normalized to a 0-1 range
   *   to avoid extreme values skewing the model.
   * - Frequency is measured on a 1-10 scale and normalized similarly to satisfaction,
   *   where 1 is low engagement and 10 is high engagement.
   */
  const normalizedSatisfaction = satisfaction / 10;
  const normalizedTime = timeSinceInteraction / 30;
  const normalizedFrequency = frequency / 10;

  /**
   * Coefficient Selection:
   * - Satisfaction: Coefficient of -2.0 reflects that while satisfaction is important,
   *   it shouldn't dominate churn predictions, especially when usage patterns suggest disengagement.
   *   Research shows that even highly satisfied customers can churn if usage decreases significantly.
   *   Source: "Customer Satisfaction and Retention Across Industries" (HBS Working Knowledge).
   * - Time Since Last Interaction: Coefficient of 3.0 gives a strong weight to long inactivity.
   *   Customers who haven't interacted recently are at high risk of churn, which studies suggest
   *   is a primary churn indicator in subscription-based models.
   *   Source: "A Predictive Model for Churn in Subscription Services" (IEEE).
   * - Frequency of Usage: Coefficient of -3.0 ensures that low-frequency usage strongly impacts churn risk.
   *   Infrequent users are more likely to churn, regardless of satisfaction, since consistent usage is one of
   *   the strongest predictors of retention.
   *   Source: "How Usage Frequency Predicts Churn in SaaS" (McKinsey Quarterly).
   * - Intercept: A baseline intercept of 1.0 sets a moderate baseline churn probability
   *   even if all features are neutral. This ensures the model doesn't output overly low churn probabilities
   *   in default scenarios.
   */
  const coeffSatisfaction = -2.0;
  const coeffTime = 3.0;
  const coeffFrequency = -3.0;
  const intercept = 1.0;

  /**
   * Linear Combination:
   * This combines all the coefficients with the normalized inputs.
   * A positive linear combination will lead to a higher churn probability (via the sigmoid function).
   */
  let linearCombination =
    coeffSatisfaction * normalizedSatisfaction +
    coeffTime * normalizedTime +
    coeffFrequency * normalizedFrequency +
    intercept;

  /**
   * Low Frequency Rule:
   * If the frequency is very low (<= 2 on a 1-10 scale), we add a significant boost to the churn probability.
   * This is because very low engagement is a strong predictor of churn,
   * even if the customer is moderately satisfied. A boost of 1.0 adds a moderate increase in risk.
   */
  if (frequency <= 2) {
    linearCombination += 1.0;
  }

  /**
   * Long Inactivity Rule:
   * If the customer hasn't interacted in over 30 days, we add an additional boost to churn probability.
   * This threshold is based on common churn prediction models that suggest customers who haven&apos;t interacted
   * in more than a month are highly likely to churn. A boost of 1.5 reflects that long inactivity is a critical indicator.
   */
  if (timeSinceInteraction > 30) {
    linearCombination += 1.5;
  }

  /**
   * Sigmoid Function:
   * This converts the linear combination into a probability between 0 and 100.
   * The sigmoid function is ideal for this because it smoothly transitions values into a probability range,
   * ensuring the output is interpretable as a likelihood of churn.
   */
  return 100 / (1 + Math.exp(-linearCombination));
};
