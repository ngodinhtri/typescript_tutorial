import { HasFormatter } from "../interfaces/HasFormatter.js";

class Invoice implements HasFormatter {
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
    return `Invoice: ${this.client} owes $${this.amount} for ${this.details}`;
  }
}

export { Invoice };
