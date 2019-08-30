export default class StudentRule {
  constructor(isStudent) {
    this.isStudent = isStudent;
  }

  isEligible(customer) {
    if(customer.isStudent === undefined)
      return false;

    return this.isStudent === customer.isStudent;
  }
}