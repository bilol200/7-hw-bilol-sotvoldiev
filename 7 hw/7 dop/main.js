const nums = [1,2,3,4,5,6,7,8];
const result = [];

for(let i = 0;i < nums.length;i++){
  const mult = nums[i] * 2;
  const str = mult.toString();
  result.push(str)
}

console.log(result);