/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function getKey(word) { 
    return word.split('').sort().join(''); 
}

var groupAnagrams = function(strs) {
    let hm = {};
    let res = []; 

    for(let i = 0; i < strs.length; i++) {
        let key = getKey(strs[i]); 
        if(!hm.hasOwnProperty(key)) { 
            hm[key] = []; 
        }
        hm[key].push(strs[i]); 
    }
    
    Object.keys(hm).map((val) => {
        res.push(hm[val]); 
    })

    return res; 
};
