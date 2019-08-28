import JuniorSaverBundle from './bundles/junior-saver';

export default class ProductRecommendation {
  constructor(){
    this.juniorSaver = new JuniorSaverBundle();
  }

  getBundles(age) {

    if (this.juniorSaver.isEligible(age))
      return this.juniorSaver;

    return {
      value: 0
    }
  }
}