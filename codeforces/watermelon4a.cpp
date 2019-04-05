#include<iostream>
using namespace std;

int main(){
    int n; cin >> n;

    bool evenPairFound = false;
    for(int i = 1; i < n; i++){
        if((n-i) % 2 == 0 && i % 2 == 0){
            cout << "YES" << endl;
            evenPairFound = true;
            break;
        }
    }

    if(!evenPairFound)
        cout << "NO" << endl;

    return 0;
}
