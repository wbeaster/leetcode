/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999 (I to MMMCMXCIX).

Example 1:

Input: "III"
Output: 3

Example 2:

Input: "IV"
Output: 4

Example 3:

Input: "IX"
Output: 9

Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) 
{
    //analyze from right to left, builds the numbers as strings (this is JS after all)
    let index = s.length;
    let answer = 0;
    let place = 1;

    if (s.length == 1)
    {
        switch(s[0])
        {
            case 'I':
                answer = 1;
                break;
            case 'V':
                answer = 5;
                break;
            case 'X':
                answer = 10;
                break;
            case 'L':
                answer = 50;
                break;
            case 'C':
                answer = 100;
                break;
            case 'D':
                answer = 500;
                break;
            case 'M':
                answer = 1000;
                break;
        }
    }
    else if (s.length == 2)
    {
        
    }

    return answer;
    
};

let myArgs = process.argv.slice(2);

console.log(myArgs);

console.log(romanToInt(myArgs));
