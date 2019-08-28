import JuniorSaverAccount from '../products/junior-saver-account';
import Bundle from './bundle';

export default class JuniorSaverBundle extends Bundle{
  constructor() {

    let products = {
      account: new JuniorSaverAccount()
    }

    super(0, 'Junior Saver', products);

  }

  isEligible(age){
     return super.isEligible(age);
  }
}