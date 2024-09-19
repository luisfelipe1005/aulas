#include <stdio.h>
#define cotacao 5.57
int main(void)
{
    float compra, cbr;
    printf("digite o valor total das compras em dolar");
    scanf("%f", &compra);
    if (compra > 50)
    {
        printf("hora do taxadd");
        cbr = compra * 0.6;
        cbr -= 20;
    }
    else
    {
        cbr = compra * 0.2;
    }
    cbr *= cotacao;
    printf("o valor final da compra em reais é: %.2f, em imposto é %.2f", cbr + compra * cotacao, cbr);
}