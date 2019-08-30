import Bundle from '../bundles/bundle';
import Account from '../products/account';
import DebitCard from '../products/debit-card';
import CreditCard from '../products/credit-card';
import AgeRule from '../rules/age-rule';
import StudentRule from '../rules/student-rule';
import IncomeRule from '../rules/income-rule';

export default class BundleList {
  constructor() {
    this.allBundles = [
      new Bundle(0, 'Junior Saver', {
        account: new Account('Junior Saver', [new AgeRule({max: 18})])
      }),
      new Bundle(0, 'Student', {
        account: new Account('Student', [new AgeRule({min: 17}), new StudentRule(true)]),
        debitCard: new DebitCard()
      }),
      new Bundle(1, 'Classic', {
        account: new Account('Current',  [new AgeRule({min: 17}), new IncomeRule( {min: 0})]),
        debitCard: new DebitCard()
      }),
      new Bundle(2, 'Classic Plus', {
        account: new Account('Current', [new AgeRule({min: 17}), new IncomeRule( {min: 12000})]),
        debitCard: new DebitCard(),
        creditCard: new CreditCard('Credit Card', [new AgeRule({min: 17}), new IncomeRule( {min: 12000})]),
      }),
      new Bundle(3, 'Gold', {
        account: new Account('Current Plus', [new AgeRule({min: 17}), new IncomeRule( {min: 40000})]),
        debitCard: new DebitCard(),
        creditCard: new CreditCard('Gold Credit Card', [new AgeRule({min: 17}), new IncomeRule( {min: 40000})]),
      }),
    ]
  }
}
