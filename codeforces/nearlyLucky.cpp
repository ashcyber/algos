/*
	Problem: 11A Nearly Lucky Number
*/
#include<iostream>
using namespace std;

bool lucky(int n){
	int temp = n;
	
	if(n == 0){
		return false;
	}
	
	while(temp > 0){
		int digit = temp % 10;
		if(digit != 4 && digit != 7){
			return false;
		}
		temp /= 10;
	}
	return true;
}

int main(){
	string str; cin >> str;
	int count_luck = 0;
	bool isLucky = true;
	for(int i=0; i <(int)str.size(); i++){
		if(str[i] == '7' || 
			str[i] == '4'){
			count_luck++;
		}else{
			isLucky = false;
		}
	}
	
	
		
		
	if(lucky(count_luck) == true){
			cout << "YES";
		}else{
			cout << "NO";
		}

	return 0;
}