class BankAccount {
  customerName;
  accountNumber;
  balance = 0;
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount {
  trasactionLimit = 50000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBuisnessLoan(amount) {
    console.log("taking buisness loan", +amount);
  }
}

class SavingAccount extends BankAccount {
  trasactionLimit = 10000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takePersonalLoan(amount) {
    console.log("taking personal loan", +amount);
  }
}

const rakeshAccount = new SavingAccount("rakesh k", 500);

rakeshAccount.deposit(500);
rakeshAccount.withdraw(100);
rakeshAccount.takePersonalLoan(40000);

console.log(rakeshAccount);
