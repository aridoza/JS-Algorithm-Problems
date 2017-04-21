// Merge Two Sorted Lists
// Q: Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes
// of the first two lists.

// my solution
// want to set up a function for setting up a linked list
// then try to splice the lists into a new list, and return that new list

// Definition for singly-linked list:
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// Setup from LeetCode:
// mergeTwoLists = (l1, l2) => {
//
// }



// Two sum
// Q: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// ex: given nums = [2,7,11,15], target = 9,     Because nums[0] + nums[1] = 2 + 7 = 9,    return [0, 1].

// my solution:
// have to loop through the given array and use two local variables to compare their sum against the target value;
// if true, return the variables' index positions in the array

twoSum = (arr, target) => {
  let num1;
  let num2;

  for (let i = 0; i < arr.length; i += 1) {
    num1 = arr[i];

    for (let j = 1; j < arr.length; j += 1) {
      num2 = arr[j];

      console.log(num1, num2);
      if (i === j) {
        continue;
      } else if (num1 + num2 === target) {
        return [i, j];
      }
    }

  }
}


// Instructor Solution
// Time Complexity: O(n) - We traverse the list containing 'n' elements exactly twice. Since the hash table reduces the look up time to O(1),
// the time complexity is O(n).   (uses hash tables, check to see how this compares to for loop)
// Space Complexity: O(n) - The extra space required depends on the number of items stored in the hash table, which stores exactly 'n' elements.

// Using a single loop:
twoSum2 = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    let compliment = target - nums[i];
    if (nums.indexOf(compliment) === i) {
      continue;
    } else if (nums.includes(compliment)) {
      let comp = nums.indexOf(compliment);
      console.log(comp);
      if (i < comp) {
        return [i, comp];
      } else {
        return [comp, i];
      }
    }
  }
}
