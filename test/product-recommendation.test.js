import ProductRecommendation from '../src/product-recommendation';
const {expect} = require('chai');

describe('ProductRecommendation', ()=> {
  describe('#getBundles()', () => {

    const productRecommendation = new ProductRecommendation();

    it('should return return Junior Saver bundle when age is less than 18',() => {
      var bundle = productRecommendation.getBundles(17);
      expect(bundle.length).to.be.equal(1);
      expect(bundle[0].name).to.be.equal('Junior Saver');
      expect(bundle[0].id).to.be.equal(0);
    })

    it('should return return Student bundle when age is more than 17 and is a student',() => {
      let isStudent = true;
      var bundle = productRecommendation.getBundles(18, isStudent);
      expect(bundle[0].name).to.be.equal('Student');
      expect(bundle[0].id).to.be.equal(0);
    })

  })
})