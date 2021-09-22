import { HasFormatter } from "../interfaces/HasFormatter.js";

class Payment implements HasFormatter {
  constructor(
    private client: string,
    private details: string,
    private amount: number
  ) {}

  changeValue(client: string, details: string, amount: number): void {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format(): string {
    return `Payment: ${this.client} owes $${this.amount} for ${this.details}`;
  }
}

export { Payment };
