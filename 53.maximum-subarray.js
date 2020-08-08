/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) 
{
    max = nums[0];

    for (let i = 0; i < nums.length; i++)
    {
        let test = 0;
        for (let j = i; j < nums.length; j++)
        {
            test += nums[j];

            if (test > max)
                max = test;
        }
    }
    return max;
};

let nums = [-4];

let answer = maxSubArray(nums);

console.log(answer);

