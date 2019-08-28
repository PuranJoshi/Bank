import StudentAccount from '../products/student-account';
import DebitCard from '../products/debit-card';

export default class StudentBundle {
  constructor() {
    this.id = 0;
    this.name = 'Student';
    let account = new StudentAccount();
    this.products = {
      account: account,
      debitCard: new DebitCard()
    }
  }

  isEligible(age, isStudent) {
    let isEligibleAccount = this.products.account.isEligible(age, isStudent);
    if(isEligibleAccount == false)
      return false;

    let isEligibleDebit = this.products.debitCard.isEligible(this.products.account.type);
    if(isEligibleDebit == false)
      return false;

    return true
  }

}