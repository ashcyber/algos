var checkStraightLine = function(coordinates) { 
    let coord1 = coordinates[0]; 
    let coord2 = coordinates[1];
    let m = (coord2[1] - coord1[1])/(coord2[0] - coord1[0])
    let c = coord1[1] - m*coord1[0] ;
    
    if(coordinates.length === 2 && (coord1[0] === coord1[0] && coord1[1] === coord2[1])) return false; 

    for(let i = 2; i < coordinates.length; i++){
      let curCoord = coordinates[i]; 
      if(curCoord[1] !== (curCoord[0] * m) + c) return false; 
    }
    return true; 
  };
