const fs = require('fs'); 

class KargerAlgorithm{ 
    constructor(adj_lst){ 
        this.adj_lst = adj_lst; 
    }

    find_min_cut() {
        let len = Object.keys(this.adj_lst).length; 
        while(len > 2) { 
            let [v1,v2] = this.getRandomVertex();   
            if(this.adj_lst[v2]){
                for(let item of this.adj_lst[v2]){
                    this.adj_lst[v1].push(item); 
                    this.adj_lst[item] = this.adj_lst[item].filter((v) => v !== v2); 
                    this.adj_lst[item].push(v1); 
                }
            }
            
            this.adj_lst[v1] = this.adj_lst[v1].filter((v) => v !== v1); 
            delete this.adj_lst[v2]; 
            len = Object.keys(this.adj_lst).length; 
        }
        let keys = Object.keys(this.adj_lst); 
    
        return Math.min(this.adj_lst[keys[0]].length, this.adj_lst[keys[1]].length);    
    }

    getRandomVertex() {
        let keys = Object.keys(this.adj_lst);
        let v1_idx = Math.floor(Math.random() * keys.length); 
        let vals = this.adj_lst[keys[v1_idx]]; 
        let v2_idx = Math.floor(Math.random() * vals.length); 
        return [keys[v1_idx], vals[v2_idx]];    
    }
    
    
}

let min_cost = Infinity
const data = fs.readFileSync('test.txt').toString();
let arr = data.split('\n');  

for(let i = 0; i < 40; i++) { 
    let adj_lst = {}; 
    arr.forEach((val) => {
        let a = val.split("\t"); 
        let ky = parseInt(a[0]); 
        let vals = a.slice(1).filter((v) => v !== '\r' && v !== "");
        adj_lst[ky] = vals;   
    }) 
    let t = new KargerAlgorithm(adj_lst); 
    cuts = t.find_min_cut(); 
    if(cuts < min_cost) {
        min_cost = cuts; 
    }
}
console.log(min_cost); 

