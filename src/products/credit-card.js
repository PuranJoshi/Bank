export default class CreditCard {
  constructor(type, age, income) {
    this.age = age;
    this.type = type;
    this.income = income;
  }

  isEligible(customer) {
    if (this.age && this.checkAge(customer.age) === false) {
      return false;
    }

    if (this.income && this.checkIncome(customer.income) === false){
      return false;
    }
    
    return true;
  }

  checkAge(age) {

    if (!this.age)
      return true;

    if (this.age.min && this.age.min >= age)
      return false;
    if (this.age.max && this.age.max <= age)
      return false;

    return true;
  }

  checkIncome(income) {

    if (!this.income)
      return true;

    if (this.income.min && this.income.min >= income)
      return false;

    return true;
  }
}