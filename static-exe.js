// ===== Static Methods and Properties
// class Governor {
//     constructor(name){
//         this.name = name
//         this.title = 'title'
//     }
// }

// ===== Inheritance
class Person {
  constructor(name1, age) {
    this._name = name1;
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
    this.remainingYearsWorking -= yearsWorked;
  }
}

class PostalWorker extends Person {
  constructor(name1, age) {}
}

// ===== Bank Accounts
