/*
	Problem: 231A - Team
*/

#include<bits/stdc++.h>
int main()
{
	int T; cin >> T;
	int count = 0;
	while(T--){
		int a,b,c;
		cin >> a >> b >> c;
		
		int sum = a + b + c;
		if(sum >= 2){
			count++;
		}
	}
	cout << count;
}