const convertAndAdd = require("../katas/01-convertAndAdd");

describe("convertAndAdd takes all values, converts each to a number, adds them up, and returns a single value", () => {
  test('given ("5", 10, "20") returns 35', () => {
    expect(convertAndAdd("5", 10, "20")).toBe(35);
  });
  test('given ("hello", "1", "world", "2" returns 3', () => {
    expect(convertAndAdd("hello", "1", "world", "2")).toEqual(3);
  });
});
