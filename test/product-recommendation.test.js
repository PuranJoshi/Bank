const  ProductRecommendation = require('../src/product-recommendation').ProductRecommendation;
const {expect} = require('chai');

describe('ProductRecommendation', ()=> {
  describe('#getBundles()', () => {
    it('should return return bundle with value 0',() => {
      let bundle = ProductRecommendation.getBundles();
      expect(bundle.value).to.be.equal(0);
    });

    it('should return return Junior Saver bundle when age is less than 18',() => {
      let bundle = ProductRecommendation.getBundles(18);
      expect(bundle.name).to.be.equal('Junior Saver');
      expect(bundle.value).to.be.equal(0);
    })

  })
})