const Utility = require("../utility");

export default class CreditCard {
  constructor(type, age, income) {
    this.age = age;
    this.type = type;
    this.income = income;

    this.checkAge = Utility.checkAge.bind(this);
    this.checkIncome = Utility.checkIncome.bind(this);
  }

  isEligible(customer) {
    if (this.checkAge(customer.age) === false) {
      return false;
    }

    if (this.checkIncome(customer.income) === false) {
      return false;
    }

    return true;
  }
}