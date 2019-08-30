import ProductRecommendation from '../src/product-recommendation';
const {expect} = require('chai');

describe('ProductRecommendation', ()=> {
  describe('#getBundles()', () => {

    const productRecommendation = new ProductRecommendation();
    

    it('should return Junior Saver bundle when age is less than 18',() => {
      let customer = {
        age : 17
      }
      var bundle = productRecommendation.getBundles(customer);
      expect(bundle.length).to.be.equal(1);
      expect(bundle[0].name).to.be.equal('Junior Saver');
      expect(bundle[0].value).to.be.equal(0);
    })

    it('should return Student bundle when age is more than 17 and is a student',() => {
      let customer = {
        age : 18,
        isStudent: true
      }
      var bundle = productRecommendation.getBundles(customer);
      expect(bundle.length).to.be.equal(1);
      expect(bundle[0].name).to.be.equal('Student');
      expect(bundle[0].value).to.be.equal(0);
    })

    it('should return Current bundle when age is more than 17 and income is greater than 0',() => {
      let customer = {
        age : 18,
        income: 10001
      }
      var bundle = productRecommendation.getBundles(customer);
      expect(bundle.length).to.be.equal(1);
      expect(bundle[0].name).to.be.equal('Classic');
      expect(bundle[0].value).to.be.equal(1);
    })


    it('should return only Current Plus bundle when age is more than 17 and income is greater than 12000',() => {
      let customer = {
        age : 18,
        income: 12001
      }
      var bundle = productRecommendation.getBundles(customer);
      expect(bundle.length).to.be.equal(2);
      expect(bundle[0].name).to.be.equal('Classic');
      expect(bundle[0].value).to.be.equal(1);
      expect(bundle[1].name).to.be.equal('Classic Plus');
      expect(bundle[1].value).to.be.equal(2);
    })



    it('should return only Gold bundle when age is more than 17 and income is greater than 40000',() => {
      let customer = {
        age : 18,
        income: 40001
      }
      var bundle = productRecommendation.getBundles(customer);
      expect(bundle.length).to.be.equal(3);
      expect(bundle[0].name).to.be.equal('Classic');
      expect(bundle[0].value).to.be.equal(1);
      expect(bundle[1].name).to.be.equal('Classic Plus');
      expect(bundle[1].value).to.be.equal(2);
      expect(bundle[2].name).to.be.equal('Gold');
      expect(bundle[2].value).to.be.equal(3);
    })

  })

  describe('#getRecommendedBundle()', () => {

    const productRecommendation = new ProductRecommendation();

    it('should return Junior Saver bundle when age is less than 18',() => {
      let customer = {
        age : 17
      }
      var bundle = productRecommendation.getRecommendedBundle(customer);
      expect(bundle.name).to.be.equal('Junior Saver');
      expect(bundle.value).to.be.equal(0);
    })

    it('should return Student bundle when age is more than 17 and is a student',() => {
      let customer = {
        age : 18,
        isStudent: true
      }
      var bundle = productRecommendation.getRecommendedBundle(customer);
      expect(bundle.name).to.be.equal('Student');
      expect(bundle.value).to.be.equal(0);
    })

    it('should return Current bundle when age is more than 17 and income is greater than 0',() => {
      let customer = {
        age : 18,
        income: 10001
      }
      var bundle = productRecommendation.getRecommendedBundle(customer);
      expect(bundle.name).to.be.equal('Classic');
      expect(bundle.value).to.be.equal(1);
    })


    it('should return only Current Plus bundle when age is more than 17 and income is greater than 12000',() => {
      let customer = {
        age : 18,
        income: 12001
      }
      var bundle = productRecommendation.getRecommendedBundle(customer);
      expect(bundle.name).to.be.equal('Classic Plus');
      expect(bundle.value).to.be.equal(2);
    })

    it('should return only Gold bundle when age is more than 17 and income is greater than 40000',() => {
      let customer = {
        age : 18,
        income: 40001
      }
      var bundle = productRecommendation.getRecommendedBundle(customer);
      expect(bundle.name).to.be.equal('Gold');
      expect(bundle.value).to.be.equal(3);
    })

  })
})