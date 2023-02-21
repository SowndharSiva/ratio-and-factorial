const factorial = require("../factorial/index");
const ratio = require("../ratio/index");
let ratioAndFactorial = (a, b, c) => {
  let ratioOfTwoNum = ratio(a, b);
  let factorial = factorial(c);
  return { ratioOfTwoNum, factorial };
};
module.exports = ratioAndFactorial;
