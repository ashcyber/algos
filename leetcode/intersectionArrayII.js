/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {}; 
    let common = []; 
    for(let i = 0; i < nums1.length; i++) { 
      if(!map.hasOwnProperty(nums1[i])){
        map[nums1[i]] = 1; 
      }
      else {
        map[nums1[i]]++; 
      }
    }  
    for(let i = 0; i < nums2.length; i++) { 
      if(map.hasOwnProperty(nums2[i]) && map[nums2[i]] > 0) {
        common.push(nums2[i]); 
        map[nums2[i]]--; 
      }
    }
    return common; 
};