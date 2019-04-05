/*
	Given numRows, generate the first numRows of pascal's 
	triangle 
*/
public List<List<Integer>> generate(int numRows){
    List<List<Integer>> tri = new ArrayList<>();
    
    if(numRows == 0)
        return tri;
    // Add first row 
    
    // ROW 1 
    tri.add(new ArrayList<>(Arrays.asList(1)));
    
    if (numRows == 1) return tri; 
    
    // ROW 2 
    tri.add(new ArrayList<>(Arrays.asList(1,1))); 

    if (numRows == 2) return tri; 
    
    for(int i = 2; i < numRows; i++){
        List<Integer> prev_row = tri.get(i-1); 
        List<Integer> new_row = new ArrayList<>(); 
        
        new_row.add(1); 
        
        for(int j=1; j< prev_row.size(); j++){
            new_row.add(prev_row.get(j-1)+
                    prev_row.get(j)); 
        }
        
        new_row.add(1);
        
        tri.add(new_row);
    }
    return tri; 
}