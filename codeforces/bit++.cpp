/*
	Problem: 282A - Bit++
*/
#include<bits/stdc++.h>
using namespace std;

 int main()
 {
 	int T; 
 	cin >> T;
 	int result = 0;
 	while(T--){
 		string str;
 		cin >> str;
 		
 		// size_t -> alias of unsigned integer type 
 		// string::npos -> string not found 

 		size_t plus = str.find("++");
 		if(plus != string::npos){
 			result++;
 		}
 		
 		size_t minus = str.find("--");
 		if(minus != string::npos){
 			result--;
 		}
 	}
 	
 	cout << result;
 
 }