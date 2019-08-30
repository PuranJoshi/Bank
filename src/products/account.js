export default class Account {
  constructor(type, rules) {
    this.type = type,
    this.rules = rules;
  }

  isEligible(customer) {
    for (let rule of this.rules) {
      var isEligible = rule.isEligible(customer);
      if (isEligible == false)
        return false;
    };
    return true;
  }
}