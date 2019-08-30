export default class IncomeRule {
  constructor(income) {
    this.income = income;
  }

  isEligible(customer) {
    
    if(customer.income === undefined)
      return false;

    if (this.income.min && this.income.min >= customer.income)
      return false;

    if (this.income.max && this.income.max <= customer.income)
      return false;

    return true;
  }
}