import JuniorSaverBundle from './bundles/junior-saver';
import StudentBundle from './bundles/student';
import CurrentBundle from './bundles/current';

export default class ProductRecommendation {

  constructor(){
    this.bundles = [
      new JuniorSaverBundle(),
      new StudentBundle(),
      new CurrentBundle()
    ];
  }

  getBundles(age, isStudent, income) {
    let validBundles = [];
    for(let bundle of this.bundles){
      if(bundle.isEligible(age, isStudent, income)){
        validBundles.push(bundle);
      }
    }
    return validBundles;
  }
}