export default class StudentAccount {
  constructor() {
    this.type = 'CurrentAccount'
    this.minAge = 17,
    this.minIncome = 0
  }

  isEligible(age, isStudent, income = 0){
   
    if(this.minAge >= age)
      return false;

    if(this.minIncome >= income)
      return false;

    return true;
  }
}