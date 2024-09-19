#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "t20anlz.h"
// struct responsavel por guardar as informações do Monstro

void mostrar(Monstro bicho, int numero);
void analisar(Monstro bicho, int numero);
Monstro criar(int numero);

int main(void)
{

    // objeto Monstro é guardado em 99 variações
    int y = 0;
    int escolha;
    Monstro A[99];
    do
    {
        // todo esse sistema de switch serve de UI para o usuario levando as funções que ele desejar
        printf("digite o que deseja fazer: \n 0 -fechar programa \n 1 - criar monstros\n 2 - avaliar monstros \n 3 - mostrar todos os monstros na tela \n");
        scanf("%i", &escolha);
        switch (escolha)
        {
        case 1:
            // aqui serve para o usuario digitar a quantidade de monstros que deseja levar, em seguida levando a função de criar os monstros
            printf("digite a quantidade de Monstros que deseja criar\n");
            scanf("%i", &y);

            // o for utilizado para a adição dos Monstros com suas informações
            for (int x = 0; x < y; x++)
            {
                A[x] = criar(x + 1);
            }
            break;

        case 2:
            for (int x = 0; x < y; x++)
            {
                analisar(A[x], x + 1);
            }
            break;

        case 3:
            if (y != 0)
            {
                for (int z = 0; z < y; z++)
                {
                    mostrar(A[z], z + 1);
                };
                printf("\ntodos os monstros mostrados.");
            }
            else
            {
                printf("você não criou nenhum monstro, por favor adicione!\n");
            }
            break;

        default:
            if (escolha == 0)
            {
                printf("fechando programa.....");
            }
            else
            {
                printf("escolha invalida, tente novamente:\n");
            }
        }
    } while (escolha != 0);
    // aqui pergunta a quantidade de Monstros que se deseja avaliar, sendo utilizada no for

    return 0;
}

void mostrar(Monstro m, int numero)
{
    printf("o Monstro numero  %i possui o nome %s, sendo do tipo ", numero, m.nome);
    if (m.tipo == 1)
    {
        printf("solo");
    }
    else if (m.tipo == 2)
    {
        printf("lacaio");
    }
    else if (m.tipo == 3)
    {
        printf("especial");
    }

    printf("\n ele tem  %i de bonus de acerto, dando um dano medio de %f\n de resistencias ele possui %i de resistencia forte, %i de resistencia media e %i de resistencia fraca\n \n", m.Vatq, m.dano, m.resFo, m.resM, m.resFr);

    if (m.CD != 0)
    {
        {
            printf("sua CD de efeito é %i", m.CD);
        }
    }
    if (m.PM != 0)
    {
        printf("possuindo %i de PM's", m.PM);
    }

    printf("------------------------------------------------------------------\n");
}

// função que preenche a classe monstro com suas informações pelo usuario
Monstro criar(int x)
{
    Monstro m;
    // pergunta e respostas são variaveis feitas para guardar as respostas do usuario, no caso do tipo e nivel do monstro são numeros que tem um intervalo definido o programa se nega a analisar algo diferente do necessario
    char pergunta[4];
    int resposta = 0;
    printf("digite nome do Monstro %i \n", x);
    scanf("%s", m.nome);
    do
    {
        printf("você quer colocar alguma ND na criatura %i , se sim escreva ''sim'', do contrario escreva 'nao' \n", x);

        scanf("%s", pergunta);
    } while (strcmp(pergunta, "sim") != 0 && strcmp(pergunta, "nao") != 0);
    if (strcmp(pergunta, "sim") == 0)
    {
        do
        {
            printf("digite o nivel de desafio do Monstro, se deseja nd S escreva 21, S+ 22 %i \n", x);
            scanf("%f", &m.ND);
        } while (m.ND == 0.25 && m.ND == 0.5 || m.ND < 1 && m.ND > 22);
    }
    printf("digite o valor de ataque do Monstro %i \n", x);
    scanf("%i", &m.Vatq);

    printf("digite a media de dano do Monstro %i \n", x);
    scanf("%f", &m.dano);

    printf("digite a defesa do Monstro %i \n", x);
    scanf("%i", &m.defesa);

    printf("digite a resistencia forte da criatura %i \n", x);
    scanf("%i", &m.resFo);

    printf("digite a resistencia media da criatura %i \n", x);
    scanf("%i", &m.resM);

    printf("digite a resistencia fraca da criatura %i \n", x);
    scanf("%i", &m.resFr);

    printf("digite os pontos de vida da criatura %i \n", x);
    scanf("%i", &m.pv);
    do
    {
        printf("digite o tipo de monstro: 1-solo, 2-lacaio e 3-especial\n", x);
        scanf("%i", &m.tipo);
    } while (m.tipo > 1 && m.tipo < 3);
    // ambos esses do-while servem para perguntar se o usuario quer adicionar alguma coisa opcional, caso queira pede para adicionar, do contrario ele preenche com um nulo.
    do
    {
        printf("você quer colocar alguma cd na criatura %i , se sim escreva ''sim'', do contrario escreva 'nao' \n", x);

        scanf("%s", pergunta);
        // essa gambiarra ve se o usuario mandou "sim" ou não até ele escolher um dos dois, com um sim ele pode escrever o atributo, do contrario ele fica nulo

    } while (strcmp(pergunta, "sim") != 0 && strcmp(pergunta, "nao") != 0);
    if (strcmp(pergunta, "sim") == 0)
    {
        printf("digite a CD efeito da criatura %i: \n", x);
        scanf("%i", &m.CD);
    }
    else
    {
        m.CD = 0;
    }
    // mesma coisa da CD
    do
    {
        printf("você quer colocar PM's na criatura %i , se sim escreva ''sim'', do contrario escreva 'nao'  \n", x);

        scanf("%s", pergunta);
    } while (strcmp(pergunta, "sim") == 0 && strcmp(pergunta, "nao") == 0);
    if (strcmp(pergunta, "sim") == 0)

    {

        printf("digite a quantidade de pontos de mana da criatura %i \n", x);
        scanf("%i", &m.PM);
    }
    else
    {
        m.PM = 0;
    }

    return m;
}

void analisar(Monstro bicho, int numero)
{
    float CD;
    CD = anlz(bicho);
    printf("%f", CD);
}
