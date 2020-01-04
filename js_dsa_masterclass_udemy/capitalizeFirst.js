function capitalizeFirstLetter (word) {
    let w = word.split(''); 
    w[0] = w[0].toUpperCase();    
    return w.join(''); 
}

function capitalizeFirst (arr) { 
    if(arr.length === 0) return []; 
    
    return [capitalizeFirstLetter(arr[0])].concat(capitalizeFirst(arr.slice(1))); 
}
