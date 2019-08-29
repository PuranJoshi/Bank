export default class DebitCard {

  constructor() {
    this.validAccounts = ['Student', 'Current', 'Current Plus'];
  }

  isEligible(accountType){
    return this.validAccounts.filter(account => accountType == account).length > 0;
  }
}