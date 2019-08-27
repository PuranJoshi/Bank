const  ProductRecommendation = require('../src/product-recommendation').ProductRecommendation;
const {expect} = require('chai');

describe('ProductRecommendation', ()=> {
  describe('#getBundles()', () => {
    it('should return Junior Saver Account when age is less than 18',() => {
      let bundle = ProductRecommendation.getBundles(18);
      expect(bundle.value).to.be.equal(0);
    })
  })
})