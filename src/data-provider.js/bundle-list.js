import Bundle from '../bundles/bundle';
import Account from '../products/account';
import DebitCard from '../products/debit-card';
import CreditCard from '../products/credit-card';
import AgeRule from '../rules/age-rule';
import StudentRule from '../rules/student-rule';
import IncomeRule from '../rules/income-rule';

export default class BundleList {
  constructor() {
    
    let isChildRule = new AgeRule({max: 18});
    let isAdult = new AgeRule({min: 17});
    let isStudent = new StudentRule(true);

    this.allBundles = [
      new Bundle(0, 'Junior Saver', {
        account: new Account('Junior Saver', [isChildRule])
      }),
      new Bundle(0, 'Student', {
        account: new Account('Student', [isAdult, isStudent]),
        debitCard: new DebitCard()
      }),
      new Bundle(1, 'Classic', {
        account: new Account('Current',  [isAdult, new IncomeRule( {min: 0})]),
        debitCard: new DebitCard()
      }),
      new Bundle(2, 'Classic Plus', {
        account: new Account('Current', [isAdult, new IncomeRule( {min: 12000})]),
        debitCard: new DebitCard(),
        creditCard: new CreditCard('Credit Card', [isAdult, new IncomeRule( {min: 12000})]),
      }),
      new Bundle(3, 'Gold', {
        account: new Account('Current Plus', [isAdult, new IncomeRule( {min: 40000})]),
        debitCard: new DebitCard(),
        creditCard: new CreditCard('Gold Credit Card', [isAdult, new IncomeRule( {min: 40000})]),
      }),
    ]
  }
}
