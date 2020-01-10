var findNumbers = function(nums) {
    return nums.filter((val) => `${val}`.length % 2 === 0).length; 
};
