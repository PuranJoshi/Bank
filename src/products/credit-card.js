export default class CreditCard {
  constructor(type, age, income) {
    this.age = age;
    this.type = type;
    this.income = income;
  }

  isEligible(age, income) {
    if(this.age)
    {
      if (this.age.min && this.age.min >= age)
        return false;
      if (this.age.max && this.age.max <= age)
        return false;
    }
    
    if (this.income)
    { 
      if(this.income.min && this.income.min >= income)
        return false;
    }
      
    return true;
  }
}