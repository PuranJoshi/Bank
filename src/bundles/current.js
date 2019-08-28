import CurrentAccount from '../products/current-account';
import DebitCard from '../products/debit-card';

export default class CurrentBundle {
  constructor() {
    this.id = 1;
    this.name = 'Current';
    let account = new CurrentAccount();
    this.products = {
      account: account,
      debitCard: new DebitCard()
    }
  }

  isEligible(age, isStudent, income) {

    let isEligibleAccount = this.products.account.isEligible(age, isStudent, income);
    if(isEligibleAccount == false)
      return false;

    let isEligibleDebit = this.products.debitCard.isEligible(this.products.account.type);
    if(isEligibleDebit == false)
      return false;

    return true
  }

}