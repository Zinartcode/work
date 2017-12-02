// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var nums = [2, 7, 11, 15];
var target = 9;


var twoSum = function(nums, target) {
  var limit = nums.length,
      result,
      i, j;

  for(i = 0 ; i < limit ; i++) {
    for(j = i+1 ; j < limit ; j++) {
      if(nums[i] + nums[j] == target) {
        result = [i, j];
        limit = j;
      }
    }
  }

  return result;
}
