export default class CreditCard {
  constructor(type, age, income) {
    this.age = age;
    this.type = type;
    this.income = income;
  }

  isEligible(customer) {
    if(this.age)
    {
      if (this.age.min && this.age.min >= customer.age)
        return false;
      if (this.age.max && this.age.max <= customer.age)
        return false;
    }

    if (this.income)
    { 
      if(this.income.min && this.income.min >= customer.income)
        return false;
    }

    return true;
  }
}