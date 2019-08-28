export default class DebitCard {

  constructor() {
    this.validAccounts = ['StudentAccount'];
  }

  isEligible(accountType){
    return this.validAccounts.filter(account => accountType == account).length > 0;
  }
}