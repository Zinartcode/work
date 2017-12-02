// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
window.onload = function() {
  var nums = [78, 7, 11, 15, 6, 3, 56];
  var length = nums.length;
  smalNum(nums);
  // console.log (nums);


  function smalNum(nums) {
    console.log(nums);
    var limit = nums.length;
    var i;
    var sml = nums[0];

    for (i = 0; i < limit; i++) {
      if (nums[i] < nums[i + 1] && nums[i] < sml)
        sml = nums[i];
    }
    result.innerHTML = sml;
  }
}
