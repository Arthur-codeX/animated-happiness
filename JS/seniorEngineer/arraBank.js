/*

accounts*/

const accounts = [
  { name: "John Mbugu", pin: "2345", account_number: 34345, amount: 0 },
  { name: "Samson Mwangi", pin: "9993", account_number: 12345, amount: 0 },
];

/*
 function for creating an account
 1.prompt for name
 2.prompt for pin
 3.Generate an accountNumber
4.set an amount of 0
*/

//check if somebody has the account
//use for or while loop to
//transverse array checking each
//Check the account_number is a number
//pin is a number with minimum length of 4 charcters
//account

let atm = null;

function createAccount() {
  const name = prompt("Enter your name");
  const pin = prompt("Enter 4 digit pin");
  //recursion
  const account_number = prompt("Enter account number ");

  for (let i = 0; i < accounts.length; i++) {
    console.log("i is ", i);
    let singleAccount = accounts[i];
    if (singleAccount.account_number == account_number) {
      alert(`Account number ${account_number} exists`);
      return;
    }
  }
  const account = {
    name: name,
    pin: pin,
    account_number: account_number,
    amount: 0,
  };
  accounts.push(account);
}

/*
  -> pin and account number
  -> we allow him to login
*/

function LoginUser() {
  const account_number = prompt("Enter account number ");
  const pin = prompt("Enter 4 digit pin");
  //recursion
  let foundAccount = null;
  for (let i = 0; i < accounts.length; i++) {
    let singleAccount = accounts[i];
    if (account_number == singleAccount.account_number) {
      foundAccount = singleAccount;
      break;
    }
  }
  //We did not find an account
  if (!foundAccount) {
    alert(`Account  ${account_number} not found`);
    return; //ext
  }
  //Match pin
  //pin does not match the account we found
  if (pin !== foundAccount.pin) {
    alert(`Invalid pin`);
    return;
  }
  //When account has been found
  atm = foundAccount;
}

function deposit() {
  if (!atm) {
    alert("Login please");
    return;
  }
  console.log("bofore deposit");
  console.log(atm);
  let amountToDeposit = prompt("Enter Amount To Deposit:");
  //if amountToDeoposit is not a number
  //true
  if (isNaN(amountToDeposit)) {
    alert("Enter a valid number to depost");
    return;
  }
  //conversion
  let numberAmount = Number(amountToDeposit);
  //check for negatives
  if (numberAmount <= 0) {
    alert("To deposit enter amount greater than 1");
    return;
  }
  //access or read previous amount=>atm.amount
  storeLastTransction(numberAmount, "deposit", atm.amount);
  let newAmount = atm.amount + numberAmount;
  //Update the property
  atm.amount = newAmount;
  //
  console.log("after");
  console.log(atm);
}

function withdraw() {
  if (!atm) {
    alert("Login please");
    return;
  }
  console.log("before");
  console.log(atm);
  let amountToWithdraw = prompt("Enter Amount To Withdraw:");
  if (isNaN(amountToWithdraw)) {
    alert("Enter a valid number to withdraw");
    return;
  }
  amountToWithdraw = Number(amountToWithdraw);
  if (amountToWithdraw === 0) {
    alert("Minimum withdrwal amount is 1 ksh");
    return;
  }
  if (amountToWithdraw < 0) {
    amountToWithdraw = amountToWithdraw * -1;
  }

  if (atm.amount < amountToWithdraw) {
    alert("Insufficient Balance in your account");
    return;
  }

  storeLastTransction(amountToWithdraw, "withdraw", atm.amount);

  let newAmount = atm.amount - amountToWithdraw;

  atm.amount = newAmount;
  alert(`Witdrawal success ${amountToWithdraw}`);
  console.log("after");
  console.log(atm);
}

function storeLastTransction(amount, type, prevBalance) {
  let date = new Date();
  let transaction = {
    amount: amount,
    type: type,
    prevBalance: prevBalance,
    timeStamp: date.toISOString(),
  };

  //write update
  atm.lastTransaction = transaction;
}

function logout() {
  atm = null; //set null
}

function showBalance() {
  if (!atm) {
    alert("please login");
    return;
  }
  if (atm.lastTransaction) {
    alert(`Hi, ${atm.name}.
        Balance ${atm.amount}
        Last Transaction ${atm.lastTransaction.type}
        Date ${atm.lastTransaction.timeStamp}
        prevBalance ${atm.lastTransaction.prevBalance}
        amount Transacted ${atm.lastTransaction.amount}
        `);
  } else {
    alert(`Hi, ${atm.name}.
        Balance ${atm.amount}`);
  }
}
