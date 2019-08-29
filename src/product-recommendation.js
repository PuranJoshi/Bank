import Bundle from './bundles/bundle';
import Account from './products/account';
import DebitCard from './products/debit-card';
import CreditCard from './products/credit-card';

export default class ProductRecommendation {

  constructor() {
    this.bundles = [
      new Bundle(0, 'Junior Saver', {
        account: new Account('Junior Saver', { max: 18 })
      }),
      new Bundle(0, 'Student', {
        account: new Account('Student', { min: 17 }, true),
        debitCard: new DebitCard()
      }),
      new Bundle(1, 'Classic', {
        account: new Account('Current', { min: 17 }, false, { min: 0 }),
        debitCard: new DebitCard()
      }),
      new Bundle(2, 'Classic Plus', {
        account: new Account('Current', { min: 17 }, false, { min: 12000 }),
        debitCard: new DebitCard(),
        creditCard: new CreditCard('Credit Card', { min: 17 }, { min: 12000 })
      }),
      new Bundle(3, 'Gold', {
        account: new Account('Current Plus', { min: 17 }, false, { min: 40000 }),
        debitCard: new DebitCard(),
        creditCard: new CreditCard('Gold Credit Card', { min: 17 }, { min: 40000 })
      }),
    ];
  }

  getRecommendedBundle(age, isStudent, income) {
    let validBundles = this.getBundles(age, isStudent, income);
    let maxValue = -1; let indexOfMax = -1;
    for (let index = 0; index < validBundles.length; index++) {
      if (validBundles[index].value > maxValue) {
        indexOfMax = index;
        maxValue = validBundles[index].value;
      }
    };

    if (indexOfMax === -1)
      return null;

    return validBundles[indexOfMax];
  }

  getBundles(age, isStudent, income) {
    let validBundles = [];
    for (let bundle of this.bundles) {
      if (bundle.isEligible(age, isStudent, income)) {
        validBundles.push(bundle);
      }
    }
    return validBundles;
  }
}