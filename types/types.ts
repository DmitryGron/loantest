export type Answer = {
  decision: "positive" | "negative";
  amount: number;
  message: string | null;
  period: number;
} | null;
