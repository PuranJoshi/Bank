export default class CreditCard {

  constructor() {
    this.minIncome = 12000;
    this.minAge = 17;
  }

  isEligible(age, income) {
    if (this.minAge >= age)
      return false;

    if (this.minIncome >= income)
      return false;

    return true;
  }
}