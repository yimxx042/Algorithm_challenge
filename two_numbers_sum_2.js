//Algorithm challenge #1_2 another solution 

function twoNumberSum(array, targetSum) {
    const nums = {};
    for (const firstnum of array) {
        const secondNum = targetSum - firstnum;
        if (secondNum in nums) {
            return [secondNum, firstnum];
        } else {
            nums[firstnum] = true;
        }
    }
    return [];
}

exports.twoNumberSum = twoNumberSum;