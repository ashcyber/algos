class TrieNode { 
    constructor() { 
        this.children = new Map(); 
        this.isEnd = false; 
    }
}

class Trie { 
    constructor() { 
        this.root = new TrieNode(); 
    }

    insert(str) { 
        let cur = this.root; 
        for(let i = 0; i < str.length; i++ ) { 
            if(!cur.children.has(str[i])) { 
                cur.children.set(str[i], new TrieNode()); 
            }
            cur = cur.children.get(str[i]); 
        }

        cur.isEnd = true; 
    }

    print() { 
        let arr = []; 
        (function dfs(node, str = "") { 
            if(node) {
                if(node.isEnd === true) { 
                    arr.push(str); 
                }
                let childrens = node.children.keys(); 
                for(let char of childrens) { 
                    dfs(node.children.get(char), str.concat(char)); 
                }
            }
        })(this.root); 
        return arr; 
    }

    isValidWord(word) { 
        let cur = this.root; 
        for(let i = 0; i < word.length; i++) { 
            if(!cur.children.has(word[i])) { 
                return false 
            }
            else{
                cur = cur.children.get(word[i]); 
            }
        }
        return cur.isEnd === true; 
    }
}

