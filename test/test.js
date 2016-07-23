var assert = require('chai').assert;
var expect = require('chai').expect;
var Toolbox = require('../src/index.js');

const utils = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  div: function(a, b) {
    return a / b;
  },
  mult: function(a, b) {
    return a * b;
  }
};

describe('Toolbox', function() {

  describe('registerTools', function() {

    it('should throw an exception if the parameter is wrong', function() {
      expect(() => Toolbox.registerTools('wrong')).to.throw("The value wrong is not a valid object")
    });

    it('should register tools to the toolbox', function() {
      Toolbox.registerTools(utils);
      var tools = Toolbox.tools();
      assert.deepEqual(tools, utils);
    });

    it('should maintain the tools saved', function() {
      var tools = Toolbox.tools();
      assert.deepEqual(tools, utils);
    });

    it('should be able to call the tools', function() {
      var tools = Toolbox.tools();
      assert.equal(4, tools.plus(2,2))
    });

  });

  describe('registerToolBox', function() {

    it('should throw an exception if the name parameter is wrong', function() {
      expect(() => Toolbox.registerToolBox(123)).to.throw("The value 123 is not a valid string")
    });

    it('should throw an exception if the tools parameter is wrong', function() {
      expect(() => Toolbox.registerToolBox('utils', function(){})).to.throw("The value function (){} is not a valid object")
    });

    it('should register a new toolbox', function() {
      Toolbox.registerToolBox('calculator', utils);
      var tools = Toolbox.tools();
      assert.deepEqual(tools.calculator, utils);
    });

    it('should maintain the tools saved', function() {
      var tools = Toolbox.tools();
      assert.deepEqual(tools.calculator, utils);
    });
    
    it('should be able to call the tools', function() {
      var tools = Toolbox.tools();
      assert.equal(4, tools.calculator.plus(2,2))
    });
  });

  describe ('tools', function (){

    it('should return an object', function() {
      var tools = Toolbox.tools();
      assert.isTrue(typeof tools === 'object');
    });
      
  });
});
