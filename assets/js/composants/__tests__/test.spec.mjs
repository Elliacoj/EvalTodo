import {UnitTest} from "../UnitTest.mjs";
import {checkOldMatchers} from "./helpers/CustomMatchers.mjs";

describe("First test 'Hello world'", function () {
    let test = "hello world";

    it("'test' = 'hello world'", function () {
        expect(test).toMatch(/hello world/);
    });
})

describe("Test unit test class", function () {
    let unitTest = new UnitTest();

    beforeEach(function () {
        jasmine.addMatchers(checkOldMatchers);
    });

    it("UnitTest firstname and lastname = Jack Haddy", function () {
        expect(unitTest.name()).toMatch(/Jack Haddy/);
    });

    it("UnitTest old is adult", function () {
        expect(unitTest.yearOld()).toBeAdult();
    });
});