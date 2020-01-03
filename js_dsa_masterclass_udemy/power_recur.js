function power(num, n) { 
    if(n === 0) 
        return 1; 

    return num * power(num, n - 1); 
}
