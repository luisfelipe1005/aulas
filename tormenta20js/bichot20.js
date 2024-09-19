
import analzt20 from "./t20anlz.js";
import Monstro from "./t20anlz.js";
// struct responsavel por guardar as informações do Monstro


function mostrar(Monstro bicho,  numero);
function analisar(Monstro bicho,  numero);
Monstro criar( numero);


    // objeto Monstro é guardado em 99 variações
    
    
    do
    {
        // todo esse sistema de switch serve de UI para o usuario levando as funções que ele desejar
        const escolha = prompt("digite o que deseja fazer: \n 0 -fechar programa \n 1 - criar monstros\n 2 - avaliar monstros \n 3 - mostrar todos os monstros na tela \n");
   
        switch (escolha)
        {
        case 1:
            // aqui serve para o usuario digitar a quantidade de monstros que deseja levar, em seguida levando a função de criar os monstros
            const y = prompt("digite a quantidade de Monstros que deseja criar\n");
            

            // o for utilizado para a adição dos Monstros com suas informações
            for (var x = 0; x < y; x++)
            {
                 criar(x + 1);
            }
            break;

        case 2:
            for (var x = 0; x < y; x++)
            {
                analisar(A[x], x + 1);
            }
            break;

        case 3:
            if (y != 0)
            {
                for (var z = 0; z < y; z++)
                {
                    mostrar(A[z], z + 1);
                };
                prvarf("\ntodos os monstros mostrados.");
            }
            else
            {
                prvarf("você não criou nenhum monstro, por favor adicione!\n");
            }
            break;

        default:
            if (escolha == 0)
            {
                prvarf("fechando programa.....");
            }
            else
            {
                prvarf("escolha invalida, tente novamente:\n");
            }
        }
    } while (escolha != 0);
    // aqui pergunta a quantidade de Monstros que se deseja avaliar, sendo utilizada no for

    return 0;
}

void mostrar(Monstro m, var numero)
{
    prvarf("o Monstro numero  %i possui o nome %s, sendo do tipo ", numero, m.nome);
    if (m.tipo == 1)
    {
        prvarf("solo");
    }
    else if (m.tipo == 2)
    {
        prvarf("lacaio");
    }
    else if (m.tipo == 3)
    {
        prvarf("especial");
    }

    prvarf("\n ele tem  %i de bonus de acerto, dando um dano medio de %f\n de resistencias ele possui %i de resistencia forte, %i de resistencia media e %i de resistencia fraca\n \n", m.Vatq, m.dano, m.resFo, m.resM, m.resFr);

    if (m.CD != 0)
    {
        {
            prvarf("sua CD de efeito é %i", m.CD);
        }
    }
    if (m.PM != 0)
    {
        prvarf("possuindo %i de PM's", m.PM);
    }

    prvarf("------------------------------------------------------------------\n");
}

// função que preenche a classe monstro com suas informações pelo usuario
Monstro criar(var x)
{
    Monstro m;
    // pergunta e respostas são variaveis feitas para guardar as respostas do usuario, no caso do tipo e nivel do monstro são numeros que tem um varervalo definido o programa se nega a analisar algo diferente do necessario
    char pergunta[4];
    var resposta = 0;
    prvarf("digite nome do Monstro %i \n", x);
    scanf("%s", m.nome);
    do
    {
        prvarf("você quer colocar alguma ND na criatura %i , se sim escreva ''sim'', do contrario escreva 'nao' \n", x);

        scanf("%s", pergunta);
    } while (strcmp(pergunta, "sim") != 0 && strcmp(pergunta, "nao") != 0);
    if (strcmp(pergunta, "sim") == 0)
    {
        do
        {
            prvarf("digite o nivel de desafio do Monstro, se deseja nd S escreva 21, S+ 22 %i \n", x);
            scanf("%f", &m.ND);
        } while (m.ND == 0.25 && m.ND == 0.5 || m.ND < 1 && m.ND > 22);
    }
    prvarf("digite o valor de ataque do Monstro %i \n", x);
    scanf("%i", &m.Vatq);

    prvarf("digite a media de dano do Monstro %i \n", x);
    scanf("%f", &m.dano);

    prvarf("digite a defesa do Monstro %i \n", x);
    scanf("%i", &m.defesa);

    prvarf("digite a resistencia forte da criatura %i \n", x);
    scanf("%i", &m.resFo);

    prvarf("digite a resistencia media da criatura %i \n", x);
    scanf("%i", &m.resM);

    prvarf("digite a resistencia fraca da criatura %i \n", x);
    scanf("%i", &m.resFr);

    prvarf("digite os pontos de vida da criatura %i \n", x);
    scanf("%i", &m.pv);
    do
    {
        prvarf("digite o tipo de monstro: 1-solo, 2-lacaio e 3-especial\n", x);
        scanf("%i", &m.tipo);
    } while (m.tipo > 1 && m.tipo < 3);
    // ambos esses do-while servem para perguntar se o usuario quer adicionar alguma coisa opcional, caso queira pede para adicionar, do contrario ele preenche com um nulo.
    do
    {
        prvarf("você quer colocar alguma cd na criatura %i , se sim escreva ''sim'', do contrario escreva 'nao' \n", x);

        scanf("%s", pergunta);
        // essa gambiarra ve se o usuario mandou "sim" ou não até ele escolher um dos dois, com um sim ele pode escrever o atributo, do contrario ele fica nulo

    } while (strcmp(pergunta, "sim") != 0 && strcmp(pergunta, "nao") != 0);
    if (strcmp(pergunta, "sim") == 0)
    {
        prvarf("digite a CD efeito da criatura %i: \n", x);
        scanf("%i", &m.CD);
    }
    else
    {
        m.CD = 0;
    }
    // reinicia a variavel pergunta
     char *pergunta = '\0';
    // mesma coisa da CD
    do
    {
        prvarf("você quer colocar PM's na criatura %i , se sim escreva ''sim'', do contrario escreva 'nao'  \n", x);

        scanf("%s", pergunta);
    } while (strcmp(pergunta, "sim") == 0 && strcmp(pergunta, "nao") == 0);
    if (strcmp(pergunta, "sim") == 0)

    {

        prvarf("digite a quantidade de pontos de mana da criatura %i \n", x);
        scanf("%i", &m.PM);
    }
    else
    {
        m.PM = 0;
    }

    return m;
}

void analisar(Monstro bicho, var numero)
{
    float CD; 
        CD = anlz(bicho);
    prvarf("%f", CD);
}
