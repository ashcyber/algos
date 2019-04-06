/*
	difficulty: medium
	Given a string, find the length of the longest substring without repeating characters.
	Examples:
	Given "abcabcbb", the answer is "abc", which the length is 3.
	Given "bbbbb", the answer is "b", with the length of 1.
	Given "pwwkew", the answer is "wke", with the length
*/

public int lengthOfLongestSubstring(String s){
    HashMap<Character, Integer> hm = new HashMap<>(); 
    int i = 0, j = 0, max_len_sub = -1;
    while(i < s.length()){
        /*
            if duplicate key found increment the 
            slow j pointer.
        */
        if(hm.containsKey(s.charAt(i)))
            j = Math.max(hm.get(s.charAt(i)) + 1, j);
        hm.put(s.charAt(i), i);
        
        // length of the substring is then difference between two pointers 
        max_len_sub = Math.max(max_len_sub, (i - j + 1));
        i++; 
    }
    return max_len_sub; 
}