export default class DebitCard {

  constructor() {
    this.validAccounts = ['StudentAccount', 'CurrentAccount'];
  }

  isEligible(accountType){
    return this.validAccounts.filter(account => accountType == account).length > 0;
  }
}