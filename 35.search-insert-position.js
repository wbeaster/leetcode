/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2

Example 2:

Input: [1,3,5,6], 2
Output: 1

Example 3:

Input: [1,3,5,6], 7
Output: 4

Example 4:

Input: [1,3,5,6], 0
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) 
{
    if (target < nums[0])
        return 0;

    if (nums[0] == target)
        return 0;
    
    if (nums.length == 1)
    {
        if (nums[0] == target)
            return 0;
        if (nums[0] > target)
            return 0;
        else 
            return 1;
    }

    for (let i=1; i < nums.length; i++)
    {
        if (nums[i] == target)
            return i;
        else if (nums[i-1] < target && nums[i] > target)
            return i;
    }

    return nums.length;
};

let nums = [1,3];
let target = 1;

let answer = searchInsert(nums, target);

console.log(answer);