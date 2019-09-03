export default class Bundle {
  constructor(id, name, products) {
    this.value = id;
    this.name = name;
    this.products = products
  }

  isEligible(customer) {
    if(this.products.account && this.isEligibleAccount(customer) == false)
      return false;

    if(this.products.debitCard && this.isEligibleForDebitCard() == false)
      return false;

    if(this.products.creditCard && this.isEligibleForCreditCard(customer) == false)
      return false;
      
    return true;
  }

  isEligibleAccount(customer){
    return this.products.account.isEligible(customer)
  }

  isEligibleForDebitCard(){
    return this.products.debitCard.isEligible(this.products.account.type);
  }

  isEligibleForCreditCard(customer){
    return this.products.creditCard.isEligible(customer);
  }
}