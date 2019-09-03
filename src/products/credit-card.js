import _ from 'underscore';

export default class CreditCard {
  constructor(type, rules) {
    this.type = type,
    this.rules = rules;
  }

  isEligible(customer) {
    return _.all(this.rules, rule => rule.isEligible(customer));
  }
}