import DataProvider from './data-provider.js/bundle-list';
import _ from 'underscore';

export default class ProductRecommendation {

  constructor() {
    this.bundles = [];
  }

  getRecommendedBundle(customer) {
    let eligibleBundles = this.getBundles(customer);
    return this.getMaxValuedBundle(eligibleBundles);
  }

  getBundles(customer) {
    this.bundles =  new DataProvider().allBundles;
    
    return _.filter(this.bundles, (bundle) => bundle.isEligible(customer));
  }

  getMaxValuedBundle(bundles) {
    return _.max(bundles, (bundle) => bundle.value);
  }
}