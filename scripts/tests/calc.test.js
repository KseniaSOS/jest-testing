const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("schould return 42 for 20 + 20", () => {
            expect(addition(20, 22)).toBe(42);
        })
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
    describe("Addition function", () => {

    });
})