import CurrentAccount from '../products/current-account.js';
import DebitCard from '../products/debit-card';
import CreditCard from '../products/credit-card';
import Bundle from './bundle';

export default class CurrentPlusBundle extends Bundle{
  constructor() {
    let account = new CurrentAccount();
    let products = {
      account: account,
      debitCard: new DebitCard(),
      creditCard: new CreditCard(),
    }
    super(2, 'Current Plus', products);
  }

  isEligible(age, isStudent, income) {
    return super.isEligible(age, isStudent, income);
  }
}