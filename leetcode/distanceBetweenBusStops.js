var distanceBetweenBusStops = function(distance, start, destination) {
    let i = start; 
    let n = distance.length; 
    let j = destination; 
    let curDis = 0; 
    let optiDis = 0; 
    while(i !== destination) { 
        curDis += distance[i]; 
        i = (i + 1) % n; 
    }
    optiDis = curDis;
    curDis = 0; 
    while(j !== start){
        curDis += distance[j];
        if(curDis >= optiDis) return optiDis; 
        j = (j + 1) % n; 
    }
    return curDis; 
};

let ans = distanceBetweenBusStops([7,10,1,12,11,14,5,0],7,2); 
console.log(ans); 