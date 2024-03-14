// // -look at the example below and do the same for other problems.

// /*
// Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value

function convertToString(number) {
  return String(number);
}

convertToString();

// Do the following for the given problem:
// */

// - Write a Function Decleration

function addNumber(num1 = 0, num2 = 0) {
  return num1 + num2;
}

addNumber(9, 7);

// - Write a Function Expression

const addTwoNumbers = function (num1 = 0, num2 = 0) {
  return num1 + num2;
};

addTwoNumbers(7,8);

// - Write an Arrow Function with curly brackets

const addTwoNumbers = (num1 = 0, num2 = 0) => num1 + num2;

// - Execute the function

addTwoNumbers(5, 8);

// - Execute the function and store the return value in a variable.

let result = addTwoNumbers(5, 8);

// - What is the typeof returnValue

typeof returnValue is number

// /* 1. Add one to the given value

//  Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

//  Do the following with above problem.
//  */

// - Write a Function Declaration

function addOne(number) {
  return number + 1;
}

addOne();

// - Write a Function Expression

const addOne = function (number) {
  return number + 1;
};

addOne();

// - Write an Arrow Function without curly brackets(if possible)

const addOne = (number) => number + 1;

addOne();

// - Write an Arrow Function with curly brackets

const addOne = (number) => {
  return number + 1;
};

// - Execute the function

addOne();

// - Execute the function and store the return value in a variable.

let result = addOne();

// - What is the typeof returnValue

the typeof returnValue is 'Number'

/* 2. Subtract one
 
 Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)
 
 Do the following with above problem.
 */

// - Write a Function Declaration

function substractOne(num1, num2) {
  return num1 - num2;
}

// - Write a Function Expression

const substractOne = function (num1, num2) {
  return num1 - num2;
};

// - Write an Arrow Function without curly brackets(if possible)

const substractOne = (num1, num2) => num1 - num2;

// - Write an Arrow Function with curly brackets

const substractOne = (num1, num2) => {
  return num1 - num2;
};

// - Execute the function

substractOne();

// - Execute the function and store the return value in a variable.

let result = substractOne();

// - What is the typeof returnValue

the typeof returnValue is 'Number'

/* 3. Add two numbers
 
 Write a function named `sum` that accepts two numbers and returns the sum of them.
 
 Do the following with above problem.
 */

// - Write a Function Declaration

function sum(num1, num2) {
  return num1 + num2;
}

// - Write a Function Expression

const sum = function (num1, num2) {
    return num1 + num2;
};

// - Write an Arrow Function without curly brackets(if possible)

const sum = (num1, num2) => {
  return num1 + num2;
};

// - Write an Arrow Function with curly brackets

const sum = (num1, num2) => num1 + num2;

// - Execute the function

Sum();

// - Execute the function and store the return value in a variable

let result = Sum();

// - What is the typeof returnValue

the typeof returnValue is 'Number'

/* 4. Square of the given value
 
 Write a function named `square` that accepts a number and returns the square of the number.
 
 Do the following with above problem.
 */

// - Write a Function Declaration

function square(num1) {
  return num1 * num1;
}

// - Write a Function Expression

const square = function (num1) {
  return num1 * num1;
};

// - Write an Arrow Function without curly brackets(if possible)

const square = (num1) => num1 * num1;

// - Write an Arrow Function with curly brackets

const square = (num1) => {
  return num1 * num1;
};

// - Execute the function

square();

// - Execute the function and store the return value in a variable

let result = square();

// - What is the typeof returnValue

the typeof returnValue is 'Number'

/* 5. Find isGreater
 
 Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.
 
 Do the following with above problem.
 */

// - Write a Function Declaration

function isGreater(x, y) {
  return Boolean(x > y);
}

// - Write a Function Expression

const isGreater = function (x, y) {
  return Boolean(x > y);
};

// - Write an Arrow Function without curly brackets(if possible)

const isGreater = (x, y) => {
  return Boolean(x > y);
};

// - Write an Arrow Function with curly brackets

const isGreater = (x, y) => Boolean(x > y);

// - Execute the function

isGreater();

// - Execute the function and store the return value in a variable

let result = isGreater();

// - What is the typeof returnValue

the typeof returnValue is 'Boolean'

/* 6.
 
 Write a function named `oddOrEven` that accepts a`number` and returns
 
   - `Number is odd` for odd number
   - `Number is even` for even number.
 
 Do the following with above problem.
 */

// - Write a Function Declaration

function oddOrEven(number) {
  if (number % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}

// - Write an anonymous Function Expression

const oddOrEven = function (number) {
  if (number % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
};

// - Write an named Function Expression

const oddOrEven = function checkOddOrEven(number) {
  if (number % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
};

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

const oddOrEven = (number) =>
  number % 2 === 0 ? `Number is even` : `Number is odd`;

// - Write an Arrow Function with curly brackets

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
};

// - Execute the function

oddOrEven();

// - Execute the function and store the return value in a variable

let result = oddOrEven();

// - What is the typeof returnValue

the typeof returnValue is 'string'


