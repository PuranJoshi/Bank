import StudentAccount from '../products/student-account';
import DebitCard from '../products/debit-card';
import Bundle from './bundle';

export default class StudentBundle extends Bundle{
  constructor() {
    let account = new StudentAccount();
    let products = {
      account: account,
      debitCard: new DebitCard()
    }
    super(0, 'Student', products);
  }

  isEligible(age, isStudent) {
    return super.isEligible(age, isStudent);
  }

}