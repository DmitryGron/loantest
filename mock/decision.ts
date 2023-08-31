import express, { Request, Response } from 'express';

type CreditModifiers = {
  [key: string]: number;
};

const decisionAPI = express();

decisionAPI.post('/decision', (req: Request, res: Response) => {
  const { personalCode, loanAmount, loanPeriod } = req.body;

  const creditModifiers: CreditModifiers = {
    '49002010965': 0,   // Debt
    '49002010976': 100, // Segment 1
    '49002010987': 300, // Segment 2
    '49002010998': 1000 // Segment 3
  };

  const creditModifier = creditModifiers[personalCode];
  if (creditModifier === undefined) {
    return res.status(200).send({
      decision: null,
      message: 'unknown personal code',
      amount: 0
    });
  }

  const creditScore = (creditModifier / loanAmount) * loanPeriod;
  const maxAmount = loanPeriod * creditModifier;

  let decision: 'positive' | 'negative' | null;
  let amount: number;

  if (creditScore < 1 || creditModifier === 0) {
    decision = 'negative';
    amount = 0; // No amount approved
  } else {
    decision = 'positive';
    amount = creditScore >= 1 ? maxAmount : loanAmount;
    amount = Math.max(2000, Math.min(10000, amount));
  }

  res.status(200).send({
    decision,
    message: 'decision made',
    amount
  });
});

export default decisionAPI;
