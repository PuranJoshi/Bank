import JuniorSaverAccount from '../products/junior-saver-account';

export default class JuniorSaverBundle {
  constructor() {
    this.id = 0;
    this.name = 'Junior Saver';
    this.products = {
      account: new JuniorSaverAccount()
    }
  }

  isEligible(age, isStudent){
     var result = this.products.account.isEligible(age, isStudent);
     return result;
  }
}