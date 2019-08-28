import JuniorSaverAccount from '../products/junior-saver-account';

export default class JuniorSaverBundle {
  constructor() {
    this.id = 0;
    this.name = 'Junior Saver';
    this.accountType = new JuniorSaverAccount();
  }

  isEligible(age) {
    return this.accountType.isEligible(age);
  }

}