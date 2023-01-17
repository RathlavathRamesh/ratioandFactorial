const factorial = require("../factorial/index");
const ratio = require("../ratio/index");

const ratioAndFactorial = (a, b, c) => {
  let numratio = ratio(a, b);
  let fact = factorial(c);
  const object = {
    ratio: numratio,
    factorial: fact,
  };
  return object;
};
console.log(ratioAndFactorial(5, 5, 5));
module.exports = ratioAndFactorial;
