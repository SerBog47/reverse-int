module.exports = function reverse (n) {
    number = n.toString().split('')
    if (number[0] === '-') number.shift();
    return number.reverse().join('')
}
