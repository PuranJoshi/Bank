const  ProductRecommendation = require('../src/product-recommendation').ProductRecommendation;
const {expect} = require('chai');

describe('ProductRecommendation', ()=> {
  describe('#getBundles()', () => {
    it('should return return bundle with value 0',() => {
      let bundle = ProductRecommendation.getBundles();
      expect(bundle.value).to.be.equal(0);
    })
  })
})