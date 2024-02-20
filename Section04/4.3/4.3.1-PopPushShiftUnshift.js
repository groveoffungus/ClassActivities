const nums = [6, 5, 2, 3, 4, 1, 0];

// remove each of the last two items with pop(), saving each item to a variable
let nums1 = nums.pop(); // 0
let nums2 = nums.pop(); // 1
console.log(nums1, nums2);


// remove each of the first two items with shift(), saving each item to a variable
let nums3 = nums.shift(); // 6
let nums4 = nums.shift(); // 5
console.log(nums3, nums4);


// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(nums4, nums3);

nums.unshift(nums1, nums2);

console.log(nums);
