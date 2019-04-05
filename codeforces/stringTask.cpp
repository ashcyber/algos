/*
    Problem: A - String Task 
*/
#include<iostream>
using namespace std;

bool isVowel(char c){
    char vowels[6] = {'a','e','i','o','u','y'};
    for(int i = 0; i < 6; i++){
        if(vowels[i] == c){
            return true;
        }
    }
    return false;
}

int main(){

    string str;
    cin >> str;

    for(int i=0; i<(int)str.size();i++){
        if(!isVowel((char)tolower(str[i]))){
            cout << "." << (char) tolower(str[i]);
        }
    }

    return 0;
}