import {pow} from "./pow.js" 


describe("pow", function () {

    describe("возводит x в степень 3", function () {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function () {
                assert.equal(x**3, expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    it("проверка pow", function () {
        assert.equal(pow(), "my fun");
    });

    it("если n не число, результат будет NaN", function () {
        assert.isNaN(mul(2, 1.5));
    });

});

mocha.run();