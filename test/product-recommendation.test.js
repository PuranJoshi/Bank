const ProductRecommendation = require('../src/product-recommendation');

describe('ProductRecommendation', ()=> {
  describe('#getBundles()', () => {
    it('should return Junior Saver Account when age is less than 18',() => {
      let bundle = ProductRecommendation.getBundles(18);
      expect(bundle.value).toBe(0);
    })
  })
})