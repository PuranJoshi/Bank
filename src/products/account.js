export default class Account {
  constructor(type, age, isStudent, income) {
    this.isStudent = isStudent
    this.type = type
    this.age = age,
    this.income = income
  }

  isEligible(customer) {
    
    if(this.isStudent != customer.isStudent)
      return false

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