import DataProvider from './data-provider.js/bundle-list';

export default class ProductRecommendation {

  constructor() {
    this.bundles = [];
  }

  getRecommendedBundle(customer) {
    let validBundles = this.getBundles(customer);
    return this.getMaxValuedBundle(validBundles);
  }

  getBundles(customer) {
    this.bundles =  new DataProvider().allBundles;
    let validBundles = [];
    for (let bundle of this.bundles) {
      if (bundle.isEligible(customer)) {
        validBundles.push(bundle);
      }
    }
    return validBundles;  
  }

  getMaxValuedBundle(bundles) {
    let maxValue = -1; let indexOfMax = -1;
    for (let index = 0; index < bundles.length; index++) {
      if (bundles[index].value > maxValue) {
        indexOfMax = index;
        maxValue = bundles[index].value;
      }
    };
    if (indexOfMax === -1)
      return null;

    return bundles[indexOfMax];
  }
}