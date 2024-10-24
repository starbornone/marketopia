export const sigmoid = (z: number): number => {
  return 1 / (1 + Math.exp(-z));
};
