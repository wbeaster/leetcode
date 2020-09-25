/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

 

Constraints:

    Each string consists only of '0' or '1' characters.
    1 <= a.length, b.length <= 10^4
    Each string is either "0" or doesn't contain any leading zero.

*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) 
{
    let aBin = parseInt(a, 2);
    let bBin = parseInt(b, 2);

    let cBin = a + b;

    return cBin.toString();
    
};

let a1 = '11';
let b1 = '1';

let a = a1;
let b = b1;

console.log(addBinary(a, b));
