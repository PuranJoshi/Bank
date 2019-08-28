export default class StudentAccount {
  constructor() {
    this.type = 'CurrentPlusAccount'
    this.minAge = 17,
    this.minIncome = 12000
  }

  isEligible(age, isStudent, income = 0){
   
    if(this.minAge >= age)
      return false;

    if(this.minIncome >= income)
      return false;

    return true;
  }
}