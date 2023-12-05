/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const TwoSum = (nums, target) =>
{
  const numsLength = nums.length;
  let currentNum;
  let currentIndex;
  
  for(let i = 0; i < numsLength; i++)
   {
     
      currentNum = nums[i];
      currentIndex = nums.indexOf(currentNum);
     
      for(let j = 0; j < numsLength; j++)
        { 
          if(currentNum + nums[j] == target && nums.indexOf(nums[j], j) != currentIndex)
            {
              console.log([nums.indexOf(currentNum), nums.indexOf(nums[j], j)]);
              return;
            }
        }
     
      
   }
}
