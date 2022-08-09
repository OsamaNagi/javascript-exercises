const add = function (...args) {
    let Add = 0;
    for (var i = 0;i < args.length;i++) {
        Add += args[ i ];
    }
    return Add;
};

const subtract = function (...args) {
    let Sub = 0;
    for (var i = 0;i < args.length;i++) {
        Sub -= args[ i ];
    }
    return Sub;
};

const sum = function (...args) {
    let Add = 0;
    for (var i = 0;i < args.length;i++) {
        Add += args[ i ];
    }
    return Add;
};

const multiply = function (...args) {
    let mul = 1;
    for (var i = 0;i < args.length;i++) {
        mul += args[ i ];
    }
    return mul;
};

const power = function (a, b) {
    return Math.pow(a, b);
};

const factorial = function (num) {
    let fact = 1;
    for (var i = 1;i <= num;i++) {
        fact *= i;
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
