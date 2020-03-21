var subdomainVisits = function(cpdomains) {
    let hm = {}; 

    for(let i = 0; i < cpdomains.length; i++) { 
        let [count, main] = cpdomains[i].split(" "); 
        let domains = main.split('.'); 
        
        for(let i = 0; i < domains.length; i++) { 
            let d = domains.slice(i).join('.');  
            if(!hm[d]) hm[d] = 0; 
            hm[d] += parseInt(count)
        }
    }

    let res = [];
    let keys = Object.keys(hm); 
    return keys.map((val) => `${hm[val]} ${val}`); 
};