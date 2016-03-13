'use strict';

// Load modules


// Declare internals

const internals = {};


internals.radix62 = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];


exports.to = function (number) {

    if (number === 0) {
        return internals.radix62[0];
    }

    let residual = number;
    let result = '';
    while (residual) {
        const char = residual % 62;
        result = internals.radix62[char] + result;
        residual = Math.floor(residual / 62);
    }

    return result;
};


exports.from = function (string) {

    let result = 0;
    for (let i = 0; i < string.length; ++i) {
        result = (result * 62) + internals.radix62.indexOf(string[i]);
    }

    return result;
};
