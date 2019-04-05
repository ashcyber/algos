/*
    Problem: 112A - Petya and Strings
*/

#include<bits/stdc++.h>
using namespace std;

int main(){
    string first; cin >> first;
    string second; cin >> second;
    bool isEqual = true;
    for(int i = 0; i < (int)first.size(); i++){
        if(tolower(first[i]) < tolower(second[i])){
            cout << -1;
            isEqual = false;
            break;
        }
        else if(tolower(first[i]) > tolower(second[i])){
            cout << 1;
            isEqual = false;
            break;
        }
    }


    if(isEqual == true){
        cout << 0;
    }
    return 0;
}