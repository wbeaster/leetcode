/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) 
{
    if (x <= 9 && x > -9 ) return x;

    let positive = true;
    if (x < 0)
    {
        positive = false;
        x *= -1;
    }

    let newNum = 0;
    let place = 10; //this will increment * 10 every round

    while(x >= 10)
    {
        //pop
        let rightDigit = x % 10;
        x /= 10;
        
        //push
        newNum += rightDigit * place; //***make it so this drop the decimal part */

        place *= 10;
    }

    if (!positive) {newNum *= -1};
    return newNum;
    
};

let myArgs = process.argv.slice(2);

console.log(myArgs);

console.log(reverse(parseInt(myArgs)));