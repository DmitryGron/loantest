import express, { Request, Response } from "express";
import {
  amounts,
  creditModifiers,
  getCreditScore,
  loanAmountValidation,
  loanPeriodValidation,
  periods,
} from "./utils";

const decisionAPI = express();

decisionAPI.post("/decision", (req: Request, res: Response) => {
  const { personalCode, loanAmount, loanPeriod } = req.body;
  let decision: string = "negative";
  let amount: number = 0;
  let period: number = 0;
  const creditModifier = creditModifiers(personalCode);
  if (creditModifier === undefined) {
    return res.status(200).send({
      decision: null,
      message: "unknown personal code",
      amount: 0,
      period: 0,
    });
  }
  if (
    creditModifier === 0 ||
    !loanAmountValidation(loanAmount) ||
    !loanPeriodValidation(loanPeriod)
  ) {
    return res.status(200).send({
      decision: "negative",
      message: "decision made",
      amount: 0,
      period: 0,
    });
  }
  const creditScore = getCreditScore({
    creditModifier,
    loanAmount,
    loanPeriod,
  });
  if (creditScore < 1) {
    const minAmount = Math.floor(creditModifier * loanPeriod);
    if (minAmount >= amounts.min) {
      decision = "positive";
      amount = minAmount;
      period = loanPeriod;
    } else {
      const newLoanPeriod = Math.floor(loanAmount / creditModifier);
      if (newLoanPeriod <= periods.max && newLoanPeriod >= periods.min) {
        decision = "positive";
        amount = loanAmount;
        period = newLoanPeriod;
      }
    }
  }
  if (creditScore > 1) {
    const maxAmount = Math.floor(creditModifier * loanPeriod);
    if (maxAmount >= amounts.max) {
      decision = "positive";
      amount = amounts.max;
      period = loanPeriod;
    } else {
      decision = "positive";
      amount = maxAmount;
      period = loanPeriod;
    }
  }
  if (creditScore === 1) {
    decision = "positive";
    amount = loanAmount;
  }
  res.status(200).send({
    decision,
    message: "decision made",
    amount,
    period,
  });
});

export default decisionAPI;
