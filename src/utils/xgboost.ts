export const xgboostModel = (
  satisfaction: number,
  timeSinceInteraction: number,
  frequency: number
): number => {
  /**
   * Base Prediction:
   * In XGBoost, we start with a base prediction, often a prior estimate or average prediction
   * before adding the contribution of decision trees. Here, we start with a baseline churn probability of 40%.
   * This reflects an initial assumption that, without specific customer data, the churn probability is moderate.
   */
  const basePrediction = 40;

  /**
   * Correction Factor:
   * The correction factor is used to adjust the base prediction based on the customer's satisfaction,
   * time since last interaction, and frequency of usage.
   * Each feature contributes multiplicatively, capturing the compounding impact of these factors on churn.
   *
   * Formula:
   * Correction Factor = ((100 - satisfaction) * (timeSinceInteraction / 30) * (11 - frequency)) / 50
   *
   * - Satisfaction: Subtracting from 100 inverts the score, meaning lower satisfaction increases churn.
   * - Time Since Last Interaction: Normalized by dividing by 30 to represent a 0-1 range for days since last use.
   * - Frequency of Usage: Higher frequency reduces churn, so we subtract it from 11 to give more weight to
   *   low-frequency users.
   *
   * The divisor of 50 in the correction factor controls the overall impact, ensuring that the adjustments
   * don't overwhelm the base prediction.
   */
  const correctionFactor =
    ((100 - satisfaction) * (timeSinceInteraction / 30) * (11 - frequency)) /
    50;

  /**
   * Churn Probability:
   * The final churn probability is calculated by adding the correction factor to the base prediction.
   * This approach reflects how XGBoost adds sequential "boosts" to improve the prediction by correcting errors.
   * In a real XGBoost model, these corrections come from decision trees, but here we simplify it into
   * a single correction formula based on customer data.
   */
  return basePrediction + correctionFactor;
};
