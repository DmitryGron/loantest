type LitsNumber = {
  [key: string]: number;
};

export const amounts = { min: 2000, max: 10000 };
export const periods = { min: 12, max: 60 };

export const loanAmountValidation = (loanAmount: string | number) =>
  Number(loanAmount) >= amounts.min && Number(loanAmount) <= amounts.max;
export const loanPeriodValidation = (loanPeriod: string | number) =>
  Number(loanPeriod) >= periods.min && Number(loanPeriod) <= periods.max;
export const getCreditScore = ({
  creditModifier,
  loanAmount,
  loanPeriod,
}: LitsNumber) => (creditModifier / loanAmount) * loanPeriod;

export const creditModifiers = (code: string | number): number | undefined => {
  const modifiers: LitsNumber = {
    "49002010965": 0, // Debt
    "49002010976": 100, // Segment 1
    "49002010987": 300, // Segment 2
    "49002010998": 1000, // Segment 3
  };

  return modifiers[code];
};
