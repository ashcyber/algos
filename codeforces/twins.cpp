/*
    Problem: A - Twins 
*/

#include<bits/stdc++.h>
#include<vector>
#include<algorithm>

using namespace std;

int main(){
    int n;
    cin >> n;

    vector<int> vi(n);

    for(int i =0; i < n;i++){
        cin >> vi[i];
    }

    sort(vi.begin(), vi.end());

    reverse(vi.begin(), vi.end());

    vector<int> sum = vi;

    for(int i =1; i < n; i++){
        sum[i] += sum[i-1];
    }
    int last_sum = sum[n - 1];

    for(int i = 0; i < n; i++){
        if(sum[i] > last_sum - sum[i]){
           break;
        }
    }

    return 0;
}