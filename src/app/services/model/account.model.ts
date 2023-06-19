export class Account {
    accountNumber: string; 
    type: string;
    balance: number;
    constructor(accountNumber: string, type: string, balance: number) {
      this.accountNumber = accountNumber;
      this.type = type;
      this.balance = balance;
    }
  }