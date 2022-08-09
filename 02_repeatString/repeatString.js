const repeatString = function (word, number) {
    let empty = '';
    for (let i = 0;i < number;i++) {
        empty += word;
    }
    return empty;
};

// Do not edit below this line
module.exports = repeatString;
