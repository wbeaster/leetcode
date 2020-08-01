/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true

Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:

Coud you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x <= 9) return true;
    if (x % 10 == 0) return false;

    let originalNum = x;
    let newNum = 0;
    let rightDigit = 0; //so it persists outsdie the while loop

    while(x >= 10)
    {
        //pop
        let rightDigit = x % 10;
        x /= 10;
        
        //push
        newNum *= 10;
        newNum += parseInt(rightDigit);
    }

    newNum *= 10;
    newNum += x;

    return parseInt(newNum) == originalNum;
};

let myArgs = process.argv.slice(2);

console.log(myArgs);

console.log(isPalindrome(parseInt(myArgs)));