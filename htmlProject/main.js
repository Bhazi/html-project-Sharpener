
// With  currying

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(8);

// With closure

let multi = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiByTwo = multi(3);
multiByTwo(3);
