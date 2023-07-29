/**
 * Link: https://leetcode.com/problems/linked-list-cycle/
 * Difficulty: Easy
 * Time: 20 minutes
 */


/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by 
 * continuously following the next pointer.
 * 
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * Example 1:
 * Input: 3 -> 2 -> 0 -> 4
 *             ^         |
 *             |_________|
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node.
 * 
 * Example 2:
 * Input: 1 -> 2
 *        ^    |
 *        |____|
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 * 
 * Example 3:
 * Input: 1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 * 
 * Constraints:
 * The number of the nodes in the list is in the range [0, 104].
 * -105 <= Node.val <= 105
 * 
 * Follow up: Can you solve it using O(1) (i.e. constant) memory?
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    
};

module.exports = { hasCycle };