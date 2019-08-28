import CurrentAccount from '../products/current-account';
import DebitCard from '../products/debit-card';
import Bundle from './bundle';

export default class CurrentBundle extends Bundle{
  constructor() {
    let account = new CurrentAccount();
    let products = {
      account: account,
      debitCard: new DebitCard()
    }
    super(1, 'Current', products);
  }

  isEligible(age, isStudent, income) {
    return super.isEligible(age, isStudent, income);
  }
}