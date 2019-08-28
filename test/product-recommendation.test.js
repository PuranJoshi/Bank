import ProductRecommendation from '../src/product-recommendation';
const {expect} = require('chai');

describe('ProductRecommendation', ()=> {
  describe('#getBundles()', () => {

    const productRecommendation = new ProductRecommendation();

    it('should return return bundle with value 0',() => {
      var bundle = productRecommendation.getBundles();
      expect(bundle.value).to.be.equal(0);
    });

    it('should return return Junior Saver bundle when age is less than 18',() => {
      var bundle = productRecommendation.getBundles(17);
      expect(bundle.name).to.be.equal('Junior Saver');
      expect(bundle.id).to.be.equal(0);
    })

  })
})