import ProductRecommendation from '../src/product-recommendation';
const {expect} = require('chai');

describe('ProductRecommendation', ()=> {
  describe('#getBundles()', () => {

    const productRecommendation = new ProductRecommendation();

    it('should return Junior Saver bundle when age is less than 18',() => {
      var bundle = productRecommendation.getBundles(17);
      expect(bundle.length).to.be.equal(1);
      expect(bundle[0].name).to.be.equal('Junior Saver');
      expect(bundle[0].value).to.be.equal(0);
    })

    it('should return Student bundle when age is more than 17 and is a student',() => {
      let isStudent = true;
      var bundle = productRecommendation.getBundles(18, isStudent);
      expect(bundle.length).to.be.equal(1);
      expect(bundle[0].name).to.be.equal('Student');
      expect(bundle[0].value).to.be.equal(0);
    })

    it('should return Current bundle when age is more than 17 and income is greater than 0',() => {
      let isStudent = false; let income = 1;
      var bundle = productRecommendation.getBundles(18, isStudent, income);
      expect(bundle.length).to.be.equal(1);
      expect(bundle[0].name).to.be.equal('Current');
      expect(bundle[0].value).to.be.equal(1);
    })


    it('should return only Current Plus bundle when age is more than 17 and income is greater than 12000',() => {
      let isStudent = false; let income = 12001;
      var bundle = productRecommendation.getBundles(18, isStudent, income);
      expect(bundle.length).to.be.equal(2);
      expect(bundle[0].name).to.be.equal('Current');
      expect(bundle[0].value).to.be.equal(1);
      expect(bundle[1].name).to.be.equal('Current Plus');
      expect(bundle[1].value).to.be.equal(2);
    })

  })

  describe('#getRecommendedBundle()', () => {

    const productRecommendation = new ProductRecommendation();

    it('should return Junior Saver bundle when age is less than 18',() => {
      var bundle = productRecommendation.getRecommendedBundle(17);
      expect(bundle.name).to.be.equal('Junior Saver');
      expect(bundle.value).to.be.equal(0);
    })

    it('should return Student bundle when age is more than 17 and is a student',() => {
      let isStudent = true;
      var bundle = productRecommendation.getRecommendedBundle(18, isStudent);
      expect(bundle.name).to.be.equal('Student');
      expect(bundle.value).to.be.equal(0);
    })

    it('should return Current bundle when age is more than 17 and income is greater than 0',() => {
      let isStudent = false; let income = 1;
      var bundle = productRecommendation.getRecommendedBundle(18, isStudent, income);
      expect(bundle.name).to.be.equal('Current');
      expect(bundle.value).to.be.equal(1);
    })


    it('should return only Current Plus bundle when age is more than 17 and income is greater than 12000',() => {
      let isStudent = false; let income = 12001;
      var bundle = productRecommendation.getRecommendedBundle(18, isStudent, income);
      expect(bundle.name).to.be.equal('Current Plus');
      expect(bundle.value).to.be.equal(2);
    })

  })
})