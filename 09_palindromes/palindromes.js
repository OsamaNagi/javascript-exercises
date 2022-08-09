const palindromes = function (str) {
    let revrese = str.split('').reverse().join('');
    if (revrese === str) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
