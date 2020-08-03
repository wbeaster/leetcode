/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true

 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) 
{
    //this is just a for loop that pops ({[ on. )}] pops things off. If there is no corresponding ({[ then it isn't a valid string
    console.log("Handle if it's and empty string treating it as valid");
    
    let stack = s[0];
    let top = s[0];

    for(let i = 1; i < s.length; i++)
    {
        onDeck = s[i]; //this will be they guy we check as ({[ and ]})
    }
    


};

let myArgs = process.argv.slice(2);

console.log(myArgs);
let a = isValid(String(myArgs));

console.log(a);
