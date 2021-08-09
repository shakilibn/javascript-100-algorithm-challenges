// 1. write a function that returns the sum of two numbers.
// 2. write a function that returns the sum of all numbers regardless of # of params.a

//     Example
// for param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3;

const sum = (param1, param2) => param1 + param2;

const totalSum = (...params) => {
  let total = 0;
  params.forEach((element) => {
    total += element;
  });
  return total;

  // by using reduce
  // const total = params.reduce((cur, total) => cur + total, 0);
  // return total;
};

console.log(totalSum(1, 2, 4));
