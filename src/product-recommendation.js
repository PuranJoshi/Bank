import JuniorSaverBundle from './bundles/junior-saver';
import StudentBundle from './bundles/student';

export default class ProductRecommendation {

  constructor(){
    this.bundles = [
      new JuniorSaverBundle(),
      new StudentBundle()
    ];
  }

  getBundles(age, isStudent) {
    let validBundles = [];
    for(let bundle of this.bundles){
      if(bundle.isEligible(age,isStudent)){
        validBundles.push(bundle);
      }
    }
    return validBundles;
  }
}