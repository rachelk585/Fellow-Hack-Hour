/**
 * Link: https://leetcode.com/problems/majority-element/
 * Difficulty: Easy
 * Time: 20 minutes
 */

/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 * 
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 * 
 * Constraints:
 * n == nums.lengt
 * 1 <= n <= 5 * 10
 * -109 <= nums[i] <= 10
 * 
*/

/**
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const count = {};
  for (const el of nums) {
    count[el] ? count[el]++ : count[el] = 1;
    if (count[el] > nums.length / 2) return el;
  }
};

module.exports = {majorityElement};