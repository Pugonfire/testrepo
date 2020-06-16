#include <iostream>
using namespace std;

int main()
{
    int i;
    i = 5;
    cout << "hello bebe" << endl;
    cout << i << endl;
    enum Day
    {
        Sunday,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday
    };
    Day payDay;
    payDay = Tuesday;
    cout << payDay << endl;
    return 0;
}
