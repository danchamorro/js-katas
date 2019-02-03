/* Write a function named convert() that takes string values and changes each value to number, and returns a single array

  For Example:
    convert("1", "2", "3") => [1,2,3]
*/

const convert = (...args) => {
  // Loops over the arguments turn each into a string. Map will return an array.
  numArr = args.map(num => {
    return parseInt(num, 10);
  });

  // Takes the above array and filters out any string that is not a number and returns a new array.
  const filtered = numArr.filter(value => {
    if (value !== isNaN) {
      return value;
    }
  });

  return filtered;
};

module.exports = convert;
