export default class Bundle {
  constructor(id, name, products) {
    this.id = id;
    this.name = name;
    this.products = products
  }

  isEligible(age, isStudent, income) {
    if(this.isEligibleAccount(age, isStudent, income) == false)
      return false;

    if(this.products.debitCard && this.isEligibleForDebitCard() == false)
      return false;

    if(this.products.creditCard && this.isEligibleForCreditCard(age, income) == false)
      return false;

    return true;
  }

  isEligibleAccount(age, isStudent, income){
    return this.products.account.isEligible(age, isStudent, income)
  }

  isEligibleForDebitCard(){
    return this.products.debitCard.isEligible(this.products.account.type);
  }

  isEligibleForCreditCard(age, income){
    return this.products.creditCard.isEligible(age, income);
  }
}