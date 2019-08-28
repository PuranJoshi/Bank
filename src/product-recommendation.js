import JuniorSaverBundle from './bundles/junior-saver';
import StudentBundle from './bundles/student';
import CurrentBundle from './bundles/current';
import CurrentPlusBundle from './bundles/current-plus';

export default class ProductRecommendation {

  constructor() {
    this.bundles = [
      new JuniorSaverBundle(),
      new StudentBundle(),
      new CurrentBundle(),
      new CurrentPlusBundle()
    ];
  }

  getRecommendedBundle(age, isStudent, income) {
    let validBundles = this.getBundles(age, isStudent, income);
    let maxValue = -1; let indexOfMax = -1;
    for (let index = 0; index < validBundles.length; index++) {
      if (validBundles[index].value > maxValue) {
        indexOfMax = index;
        maxValue = validBundles[index].value;
      }
    };

    if(indexOfMax === -1)
      return null;

    return validBundles[indexOfMax];
  }

  getBundles(age, isStudent, income) {
    let validBundles = [];
    for (let bundle of this.bundles) {
      if (bundle.isEligible(age, isStudent, income)) {
        validBundles.push(bundle);
      }
    }
    return validBundles;
  }
}