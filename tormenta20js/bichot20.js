import Monstro from "./t20anlz.js";
// struct responsavel por guardar as informações do Monstro


function mostrar(Monstro bicho,  numero);
function analisar(Monstro bicho,  numero);
function criar( numero);


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
                console.log("\ntodos os monstros mostrados.");
            }
            else
            {
                console.log("você não criou nenhum monstro, por favor adicione!\n");
            }
            break;
            case 0:

            console.log("fechando programa.....");
            break;

        default:
              
                console.log("escolha invalida, tente novamente:\n");
            
        }
    } while (escolha != 0);
    // aqui pergunta a quantidade de Monstros que se deseja avaliar, sendo utilizada no for



function mostrar(Monstro m, numero)
{
    console.log("o Monstro numero  "+numero+" possui o nome "+m.nome+", sendo do tipo ");
    if (m.tipo == 1)
    {
        console.log("solo");
    }
    else if (m.tipo == 2)
    {
        console.log("lacaio");
    }
    else if (m.tipo == 3)
    {
        console.log("especial");
    }

    console.log("\n ele tem  "+m.Vatq+" de bonus de acerto, dando um dano medio de "+%m.dano+"\n de resistencias ele possui"+ %m.resFo+" de resistencia forte, "+m.resM+" de resistencia media e "+m.resFr+" de resistencia fraca\n " );

    if (m.CD != 0)
    {
        
            console.log("sua CD de efeito é: "+ m.CD);
        }
    }
    if (m.PM != 0)
    {
        console.log("possuindo "+m.PM+" de PM's", );
    }

    console.log("------------------------------------------------------------------\n");


// função que preenche a classe monstro com suas informações pelo usuario
function criar(x)
{
    Monstro m;
    // pergunta e respostas são variaveis feitas para guardar as respostas do usuario, no caso do tipo e nivel do monstro são numeros que tem um varervalo definido o programa se nega a analisar algo diferente do necessario
    char pergunta[4];
    var resposta = 0;
    m.nome = prompt("digite nome do Monstro %i \n", x);
    
    do
    {
        pergunta=prompt("você quer colocar alguma ND na criatura %i , se sim escreva ''sim'', do contrario escreva 'nao' \n", x);

    } while (pergunta != "sim" && pergunta != "nao");
    if (pergunta== "sim")
    {
        do
        {
            m.ND=prompt("digite o nivel de desafio do Monstro, se deseja nd S escreva 21, S+ 22  \n");
           
        } while (m.ND == 0.25 && m.ND == 0.5 || m.ND < 1 && m.ND > 22);
    }
    m.Vatq=prompt("digite o valor de ataque do Monstro %i \n", x);
    

    m.dano=prompt("digite a media de dano do Monstro %i \n", x);
    

    m.defesa=prompt("digite a defesa do Monstro %i \n", x);
   
    m.resFo=prompt("digite a resistencia forte da criatura %i \n", x);
    
    m.resM=prompt("digite a resistencia media da criatura %i \n", x);
    

    m.resFr=prompt("digite a resistencia fraca da criatura %i \n", x);
    

    m.pv=prompt("digite os pontos de vida da criatura %i \n", x);
    
    do
    {
        m.tipo=prompt("digite o tipo de monstro: 1-solo, 2-lacaio e 3-especial\n", x);
        
    } while (m.tipo > 1 && m.tipo < 3);
    // ambos esses do-while servem para perguntar se o usuario quer adicionar alguma coisa opcional, caso queira pede para adicionar, do contrario ele preenche com um nulo.
    do
    {
        pergunta=prompt("você quer colocar alguma cd na criatura %i , se sim escreva ''sim'', do contrario escreva 'nao' \n", x);

        // essa gambiarra ve se o usuario mandou "sim" ou não até ele escolher um dos dois, com um sim ele pode escrever o atributo, do contrario ele fica nulo

    } while (pergunta != "sim" && pergunta != "nao");
    if (pergunta != "sim")
    {
        m.CD=prompt("digite a CD efeito da criatura %i: \n", x);
        
    }
    else
    {
        m.CD = 0;
    }
    // reinicia a variavel pergunta
     
    // mesma coisa da CD
    do
    {
        pergunta=prompt("você quer colocar PM's na criatura %i , se sim escreva ''sim'', do contrario escreva 'nao'  \n", x);

    } while (pergunta != "sim" && pergunta != "nao");
    if (pergunta != "sim")

    {

        m.PM=prompt("digite a quantidade de pontos de mana da criatura %i \n", x);
        
    }
    else
    {
        m.PM = 0;
    }

    return m;
}
/*
void analisar(Monstro bicho, var numero)
{
    float CD; 
        CD = anlz(bicho);
    console.log("%f", CD);
}
*/