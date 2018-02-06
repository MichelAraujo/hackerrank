#include <bits/stdc++.h>

using namespace std;

int birthdayCakeCandles(int n, vector <int> ar) {
    int qtd = 0;
    int maxHeight;
    for (int i = 0; i < n; i++) {
        if (i == 0) {
            maxHeight = ar[i];
        } else if (ar[i] > maxHeight) {
            maxHeight = ar[i];
        }
    }

    for (int j = 0; j < n; j++) {
        if (ar[j] == maxHeight) {
            qtd++;
        }
    }
    
    return qtd;
}

int main() {
    int n;
    cin >> n;
    vector<int> ar(n);
    for(int ar_i = 0; ar_i < n; ar_i++){
       cin >> ar[ar_i];
    }
    int result = birthdayCakeCandles(n, ar);
    cout << result << endl;
    return 0;
}

