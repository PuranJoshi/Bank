export default class StudentAccount {
  constructor() {
    this.type = 'StudentAccount'
    this.minAge = 17;
  }

  isEligible(age, isStudent){

    if(isStudent == false)
      return false;

    if(this.minAge >= age)
      return false;

    return true;
  }
}