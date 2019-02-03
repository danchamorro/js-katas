const keysAndValues = require("../katas/05-keysAndValues");

describe("keysAndValues() takes an object and returns tow separate arrays. One of keys, one of values", () => {
  test('given ({ firstName: "Foo", lastName: "Bar" }) returns [["firstName", "lastName"], ["Foo", "Bar"]]', () => {
    const obj = { firstName: "Foo", lastName: "Bar" };

    expect(keysAndValues(obj)).toEqual([
      ["firstName", "lastName"],
      ["Foo", "Bar"]
    ]);
  });
});
