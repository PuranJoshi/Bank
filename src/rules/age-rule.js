export default class AgeRule {
  constructor(age) {
    this.age = age;
  }

  isEligible(customer) {
    
    if(customer.age === undefined)
      return false;

    if (this.age.min && this.age.min >= customer.age)
      return false;

    if (this.age.max && this.age.max <= customer.age)
      return false;

    return true;
  }
}