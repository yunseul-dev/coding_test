function solution(nums) {
  var answer = 0;

  const nums2 = [...new Set(nums)];

  if (nums2.length >= nums.length / 2) {
    answer = nums.length / 2;
  } else if (nums2.length < nums.length / 2) {
    answer = nums2.length;
  }

  return answer;
}
