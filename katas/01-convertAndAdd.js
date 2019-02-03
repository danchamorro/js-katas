/* Building on the previous convert function...
  Write a function named convertAndAdd() that that takes multiple values and adds them together, returning a single value
 
  For Example: 
  convertAndAdd("5", 10, "20") => 35
*/

const convertAndAdd = (...args) => {
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

  // Function to add to arguments. Which we will also use in reduce, and reduce takes two arguments.
  const add = (a, b) => {
    return a + b;
  };

  // Now using reduce we can add all the array elements.
  const sum = filtered.reduce(add);

  return sum;
};

module.exports = convertAndAdd;
