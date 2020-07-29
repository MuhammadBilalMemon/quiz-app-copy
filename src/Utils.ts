export const shuffleArry = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
