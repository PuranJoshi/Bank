import JuniorSaverBundle from './bundles/junior-saver';

export default class ProductRecommendation {

  constructor(){
    this.bundles = [];
    this.bundles.push(new JuniorSaverBundle());
    //this.bundles.push(new StudentBundle());
  }

  getBundles(age, isStudent) {
    let validBundles = [];
    for(let bundle of this.bundles){
      if(bundle.isEligible(age,isStudent));
        validBundles.push(bundle);
    }
    return validBundles;
  }
}