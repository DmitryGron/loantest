export const validatePersonalCode = (personalCode: string): boolean =>
  !(personalCode?.length !== 11 || isNaN(Number(personalCode)));
export const validateLoanAmount = (amount: number): boolean =>
  !(amount! < 2000 || amount > 10000 || isNaN(amount));
export const validateLoanPeriod = (period: number): boolean =>
  !(period < 12 || period > 60 || isNaN(period));
