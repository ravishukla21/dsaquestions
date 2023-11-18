function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  //this.deposit = function (amount) {
  //   this.balance += amount;
  // };
  //this.withdraw = function (amount) {
  // this.balance -= amount;
  //};
}

const rakeshAccount = new BankAccount("Rakesh K");
const johnAccount = new BankAccount("john doe", 15000);
//console.log(rakeshAccount);
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

rakeshAccount.deposit(20000);
johnAccount.deposit(2222222);
console.log(BankAccount.prototype);
console.log(rakeshAccount);
console.log(johnAccount);
