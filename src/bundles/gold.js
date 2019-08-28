import CurrentPlusAccount from '../products/current-plus-account.js';
import DebitCard from '../products/debit-card';
import GoldCreditCard from '../products/gold-credit-card';
import Bundle from './bundle';

export default class GoldBundle extends Bundle{
  constructor() {
    let account = new CurrentPlusAccount();
    let products = {
      account: account,
      debitCard: new DebitCard(),
      creditCard: new GoldCreditCard(),
    }
    super(3, 'Gold', products);
  }

  isEligible(age, isStudent, income) {
    return super.isEligible(age, isStudent, income);
  }
}