export default class JuniorSaverAccount {

  constructor() {
    this.maxAge = 18;
  }

  isEligible(age){
    return age < this.maxAge;
  }
}