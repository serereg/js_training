import {factorial} from "./factorial.js" 


describe("factorial", function() {
  it("factorial от 1 до 5", function() {
    assert.equal(factorial(5), 120);
  });
});

mocha.run();