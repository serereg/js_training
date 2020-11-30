import {sumTo} from "./sumTo.js" 


describe("sumTo", function() {
  it("сумма от 1 до 5", function() {
    assert.equal(sumTo(5), Number((1.0+5.0)/2.0*5.0));
  });

});

mocha.run();