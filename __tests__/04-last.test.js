const last = require("../katas/04-last");

describe("last() returns the last value", () => {
  test("given the array: [2, 4, 6, 8]) the return value is 8", () => {
    expect(last([2, 4, 6, 8])).toEqual(8);
  });
  test("given the values: 1, 22, 343, 42, 55, 77) the return value is 77", () => {
    expect(last(1, 22, 343, 42, 55, 77)).toEqual(77);
  });
});
