// ===== Static Methods and Properties

class Governor {
  static name = "Grant Smith";
  static votesWon() {
    return "Does it really matter?";
  }
  static {
    console.log("How many votes did the Governor get?");
  }
}

console.log(Governor.votesWon());

// ===== Inheritance
class Person {
  constructor(name1, age) {
    this._name1 = name1;
    this._age = age;
    this._remainingYearsWorking = 25;
  }

  get name1() {
    return this.name1;
  }

  get age() {
    return this.age;
  }

  get remainingYearsWorking() {
    return this._remainingYearsWorking;
  }

  countdownToRetire(yearsWorked) {
    this._remainingYearsWorking -= yearsWorked;
  }
}

class PostalWorker extends Person {
  constructor(name1, age, uniformColor) {
    super(name1, age);
    this._uniformColor = uniformColor;
  }
}

class Chef extends Person {
  constructor(name1, age, famousDish) {
    super(name1, age);
    this._famousDish = famousDish;
  }
}

const deliverLouise = new PostalWorker("Louise", 32, "blue");
console.log(deliverLouise);

const deliverLinda = new PostalWorker("Linda", 28, "blue");
console.log(deliverLinda);

deliverLinda.countdownToRetire(12);
console.log(
  "You can retire in " + deliverLinda.remainingYearsWorking + " years"
);

const cookBob = new Chef("Bob", 43, "shrimp and grits");
console.log(cookBob);

// ===== Bank Accounts

class BankAccount {
  constructor(ownerName, balance) {
    this._ownerName = ownerName;
    this._balance = balance;
    this.acctNum = 157;
  }

  get ownerName() {
    return this._ownerName;
  }

  get balance() {
    return this._balance;
  }

  deposit(amountDeposited) {
    this._balance += amountDeposited;
  }

  withdraw(amountWithdrawn) {
    this._balance -= amountWithdrawn;
  }
}

class CheckingAccount extends BankAccount {
  constructor(ownerName, balance) {
    super(ownerName, balance);
    this._overdraftEnabled = true;
  }
  get overdraftEnabled() {
    return this._overdraftEnabled;
  }
  withdraw() {
    return "Overdraft Feature Enabled";
  }
}

class SavingsAccount extends BankAccount {
  constructor(ownerName, balance) {
    super(ownerName, balance);
  }
  withdraw() {
    return "Withdrawals disallowed";
  }
}

const newUser1 = new CheckingAccount("Mark", 500, true);
console.log(newUser1);
console.log(newUser1.withdraw());
