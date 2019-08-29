const Utility = require("../utility");

export default class Account {
  constructor(type, age, isStudent, income) {
    this.isStudent = isStudent
    this.type = type
    this.age = age,
    this.income = income
    
    this.checkAge = Utility.checkAge.bind(this);
    this.checkIncome = Utility.checkIncome.bind(this);
  }

  isEligible(customer) {

    if (this.isStudent != customer.isStudent)
      return false

    if (this.checkAge(customer.age) === false) {
      return false;
    }

    if (this.checkIncome(customer.income) === false) {
      return false;
    }

    return true;
  }

}