class Payment {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    changeValue(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Payment: ${this.client} owes $${this.amount} for ${this.details}`;
    }
}
export { Payment };
