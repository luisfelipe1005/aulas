#include <stdio.h>

#define anoat 2024
int main()
{
    int idade=0, anonasc;
    printf("qual o ano que tu nasceu?");
    scanf("%d", &anonasc);
    idade = anoat-anonasc;
    if (idade >= 18)
    {
        printf("Vocẽ é de maior");
    }
    else
    {
        printf("voce é de menor")
    }
}