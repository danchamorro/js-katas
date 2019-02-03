const combine = require("../katas/02-combine");

describe("combines multiple arguments into a single array", () => {
  test("given the following arrays [1, 2, 3], [4, 5, 6] combine() returns [1,2,3,4,5,6]", () => {
    expect(combine([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("given the arguments 1,2,3 combine() returns [1,2,3]", () => {
    expect(combine(1, 2, 3)).toEqual([1, 2, 3]);
  });

  test("given: the arguments [1,2], 3 combine() returns [1,2,3]", () => {
    expect(combine([1, 2], 3)).toEqual([1, 2, 3]);
  });

  test("given: the arguments 1, [2,3] combine() returns [1,2,3]", () => {
    expect(combine(1, [2, 3])).toEqual([1, 2, 3]);
  });
});
