#include<bits/stdc++.h>
using namespace std;

void helper(string str){
    if(str.size() > 10){
        cout << str[0] << str.size()-2
        << str[str.size() - 1] << endl;
    }else{
        cout << str << endl;
    }
}

int main(){
    int n; cin >> n;
    string temp;
    while(n--){
        cin>>temp;
        helper(temp);
    }
    return 0;