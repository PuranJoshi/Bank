export default class JuniorSaverAccount {

  constructor() {
    this.type = 'JuniorSaverAccount'
    this.maxAge = 18;
  }

  isEligible(age){
    return age < this.maxAge;
  }
}