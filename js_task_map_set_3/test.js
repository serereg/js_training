import {getLastDayOfMonth} from "./getLastDayOfMonth.js" 


describe("getLastDayOfMonth", function() {
  it("последнее число 01.01.2012 - 31", function() {
    assert.equal(getLastDayOfMonth(2012, 0), 31);
  });

  it("последнее число 01.02.2012 - 29 (високосный год)", function() {
    assert.equal(getLastDayOfMonth(2012, 1), 29);
  });

  it("последнее число 01.02.2013 - 28", function() {
    assert.equal(getLastDayOfMonth(2013, 1), 28);
  });
});

mocha.run();