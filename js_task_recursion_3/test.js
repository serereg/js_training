import {fib} from "./fib.js" 


describe("fib", function() {
  it("fib от 1 до 3", function() {
    assert.equal(fib(3), 2);
  });
  it("fib от 1 до 7", function() {
    assert.equal(fib(7), 13);
  });
  it("fib от 1 до 77", function() {
    assert.equal(fib(77), 5527939700884757);
  });
  
});

mocha.run();