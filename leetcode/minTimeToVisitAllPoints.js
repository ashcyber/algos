var minTimeToVisitAllPoints = function(points) {
    if(points.length === 1) return 0; 
    
    let totalTime = 0; 
    
    let j = 1; 

    while(j < points.length){
            
        let start = points[j-1]; 
        let end = points[j]; 

        let endX = end[0]
        let endY = end[1]

        let startX = start[0]; 
        let startY = start[1]; 
    
        totalTime += Math.max(Math.abs(endY - startY), Math.abs(endX - startX)); 
        
        j++; 
    }
    
    return totalTime; 
};
