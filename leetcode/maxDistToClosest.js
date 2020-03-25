var maxDistToClosest = function(seats) {
    seats = seats.map((val) => {
        if(val === 1) { 
            return 0; 
        }
        return Infinity; 
    });

    // Pass left to right 
    for(let i = 1; i < seats.length; i++) { 
        seats[i] = Math.min(seats[i], seats[i-1] + 1)
    }
    let maxDis = 0; 
    for(let i = seats.length - 1; i >= 0; i--) { 
        if(i <= seats.length - 2) { 
            seats[i] = Math.min(seats[i], seats[i+1]+1);
        }
        maxDis = Math.max(seats[i], maxDis);  
    }
    return maxDis; 
};
