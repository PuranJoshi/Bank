export default class Account {
  constructor(type, age, isStudent, income) {
    this.isStudent = isStudent
    this.type = type
    this.age = age,
    this.income = income
  }

  isEligible(age, isStudent, income) {
    
    if(this.isStudent != isStudent)
      return false

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