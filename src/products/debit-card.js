export default class DebitCard {

  constructor() {
    this.validAccounts = ['StudentAccount', 'CurrentAccount', 'CurrentPlusAccount'];
  }

  isEligible(accountType){
    return this.validAccounts.filter(account => accountType == account).length > 0;
  }
}