const convert = require("../katas/00-convertToNumbers.js");

describe("convert() takes string values and changes them to numbers and return a single array", () => {
  test('given ("1", "2", "3"), returns [1,2,3]', () => {
    expect(convert("1", "2", "3")).toEqual([1, 2, 3]);
  });

  describe("removes any value that is not a number", () => {
    test('given ("hello", "1", "world", "2" returns [1,2]', () => {
      expect(convert("hello", "1", "world", "2")).toEqual([1, 2]);
    });
  });
});
