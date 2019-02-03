const removeDuplicates = require("../katas/03-removeDuplicates");

describe("removeDuplicates takes any number of arguments and returns a single array without duplicates", () => {
  test("given (2, 33, 4, 2, 11, 33, 99, 11, 4, 5) returns the value of [2, 33, 4, 11, 99, 5]", () => {
    expect(removeDuplicates(2, 33, 4, 2, 11, 33, 99, 11, 4, 5)).toEqual([
      2,
      33,
      4,
      11,
      99,
      5
    ]);
  });

  test("given ([1,2,3],[2,3,4], returns the value [1,2,3,4]", () => {
    expect(removeDuplicates([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("given (1, 2, 3, 4, [2, 3, 4, 5], returns the value [1,2,3,4,5]", () => {
    expect(removeDuplicates(1, 2, 3, 4, [2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
