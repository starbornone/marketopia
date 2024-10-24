// Scales a feature to a range of 0 to 1 based on its min and max values
export const scaleFeature = (
  value: number,
  min: number,
  max: number
): number => {
  return (value - min) / (max - min);
};

// One-hot encoding for categorical variables (like billing frequency)
export const oneHotEncode = (
  value: string,
  categories: string[]
): { [key: string]: number } => {
  const encoded: { [key: string]: number } = {};
  categories.forEach((category) => {
    encoded[category.toLowerCase()] = value === category ? 1 : 0;
  });
  return encoded;
};
