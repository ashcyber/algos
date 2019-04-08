/*
    Problem: 131A capsLock
*/
#include<bits/stdc++.h>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
    string str;
    cin >> str;

    bool afterFirstUp = true;

    for(int i = 1; i < (int)str.size(); i++){
        if(islower(str[i])){
            afterFirstUp = false;
            break;
        }
    }

    if(afterFirstUp){
        // change the case
        if(islower(str[0])){
            str[0] = (char)toupper(str[0]);
        }else{
            str[0] = (char)tolower(str[0]);
        }
        for(int i = 1; i < (int)str.size(); i++){
            str[i] = (char)tolower(str[i]);
        }
    }

    cout << str;
}