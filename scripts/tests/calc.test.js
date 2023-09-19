const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("schould return 42 for 20 + 20", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("schould return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test('adding floating point numbers', () => {
            const value = 0.1 + 0.2;
            //expect(value).toBe(0.3);           This won't work because of rounding error
            expect(value).toBeCloseTo(0.3); // This works.
          });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})