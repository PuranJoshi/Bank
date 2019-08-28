export default class StudentAccount {
  constructor() {
    this.type = 'StudentAccount'
    this.minAge = 17;
  }

  isEligible(age, isStudent){
    return age > this.minAge && isStudent;
  }
}