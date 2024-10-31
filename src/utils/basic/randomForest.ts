export const randomForestModel = (
  satisfaction: number,
  timeSinceInteraction: number,
  frequency: number
): number => {
  /**
   * Baseline Churn:
   * In random forest models, we typically start with a baseline churn probability.
   * This represents an average churn rate across the customer base before accounting for specific factors.
   * In this case, we assume a baseline churn probability of 50% for a typical customer.
   * This number can be adjusted based on the average churn rate in our specific business model.
   */
  const baselineChurn = 50;

  /**
   * Impact Calculation:
   * We calculate the combined impact of satisfaction, time since last interaction, and frequency of usage.
   * Random forests typically make predictions by averaging decision trees that split based on the input variables.
   * Here, we simulate the combined effect of the inputs using a multiplicative approach.
   *
   * Formula:
   * Impact = (100 - satisfaction) * (timeSinceInteraction / 30) * (11 - frequency)
   *
   * - Satisfaction: A higher satisfaction score (closer to 100) reduces churn likelihood.
   *   We subtract satisfaction from 100 to invert it, meaning low satisfaction leads to higher churn risk.
   * - Time Since Last Interaction: We divide by 30 to normalize the "days since last interaction" to a 0-1 range.
   *   Longer time since last interaction increases the churn risk.
   * - Frequency: Higher frequency (closer to 10) reduces churn risk,
   *   so we subtract the frequency from 11 to give low-frequency users a higher churn risk.
   *
   * The multiplicative nature of these variables captures the fact that they often interact in determining churn.
   * For example, low satisfaction combined with long inactivity and low frequency leads to a much higher churn risk
   * than any of those factors alone.
   */
  const impact =
    (100 - satisfaction) * (timeSinceInteraction / 30) * (11 - frequency);

  /**
   * Churn Probability:
   * We divide the impact by 100 to scale it down and add it to the baseline churn.
   * This ensures the final churn probability is expressed as a percentage, with adjustments based on
   * customer-specific data.
   *
   * This model assumes the churn risk starts at the baseline and increases (or decreases) based on
   * customer satisfaction, engagement, and recency of interaction.
   */
  return baselineChurn + impact / 100;
};
