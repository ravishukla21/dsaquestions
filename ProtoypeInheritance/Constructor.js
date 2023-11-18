function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = function (amount) {
    this.balance -= amount;
  };
}

//const rakeshAccount = new BankAccount("rakesh k", 50000);
//const johnAccount = new BankAccount("John doe");
//rakeshAccount.deposit(5000);
//rakeshAccount.withdraw(500);
//console.log(rakeshAccount, johnAccount);

const accountform = document.querySelector("#accountform");
const customername = document.querySelector("#customername");
const balance = document.querySelector("#balance");
const depositform = document.querySelector("#depositform");
const accountnumber = document.querySelector("#accountnumber");
const amount = document.querySelector("#amount");
const accounts = [];
accountform.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customername.value, +balance.value);

  console.log(account, "singleaccount");
  accounts.push(account);
  console.log(accounts, "accounts");
});
depositform.addEventListener("click", (e) => {
  e.preventDefault();

  const account = accounts.find((account) => {
    return account.accountNumber === +accountnumber.value;
  });

  account.deposit(+amount.value);
  console.log(accounts);
});
