export default class GoldCreditCard {

  constructor() {
    this.minIncome = 40000;
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