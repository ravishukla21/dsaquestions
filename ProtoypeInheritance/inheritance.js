//DRY
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

function CurrentAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  this.transactionList = 50000;
}

CurrentAccount.prototype.takeBuisnessLoan = function (amount) {
  console.log(" taking buisness loan" + amount);
};

CurrentAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

CurrentAccount.prototype.withdraw = (amount) => {
  this.balance -= amount;
};

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = (amount) => {
  this.balance -= amount;
};

const rakeshAccount = new CurrentAccount("Rakesh K", 500);
console.log(rakeshAccount);
