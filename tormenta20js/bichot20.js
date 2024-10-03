import input from 'readline-sync'

import Monstro from "./t20anlz.js";
// struct responsavel por guardar as informações do Monstro



    // objeto Monstro é guardado em varios array
    let Monstros = []

    do
    {
        // todo esse sistema de switch serve de UI para o usuario levando as funções que ele desejar
        const escolha = input.question("digite o que deseja fazer: \n 0 -fechar programa \n 1 - criar monstros\n 2 - avaliar monstros \n 3 - mostrar todos os monstros na tela \n");
       
        switch (parseInt(escolha))
        {
        case 1:
            // aqui serve para o usuario digitar a quantidade de monstros que deseja levar, em seguida levando a função de criar os monstros
            let y = input.question("digite a quantidade de Monstros que deseja criar\n");
            
           
            // o for utilizado para a adição dos Monstros com suas informações
            for (var x = 0; x < y; x++)
            {
                 criar(x + 1);
            }
            break;

        case 2:
        



            break;

        case 3:
            if (y != 0)
            {
                for (var z = 0; z < y; z++)
                {
                    mostrar(Monstros[z], z + 1);
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
    } while (parseInt(escolha) != 0);
    // aqui pergunta a quantidade de Monstros que se deseja avaliar, sendo utilizada no for



function exibirMonstro()
{
    console.log("o Monstro numero  "+this.numero+" possui o nome "+this.nome+", sendo do tipo: "+this.tipo);
   

    console.log("\n ele tem  "+this.Vatq+" de bonus de acerto, dando um dano medio de "+this.dano+"\n de resistencias ele possui"+ this.resFo+" de resistencia forte, "+this.resM+" de resistencia media e "+this.resFr+" de resistencia fraca\n " );

    if (CD != 0)
    {
        
            console.log("sua CD de efeito é: "+ this.CD);
        }
    
    if (PM != 0)
    {
        console.log("possuindo "+this.PM+" de PM's", );
    }

    console.log("------------------------------------------------------------------\n");

}



function exibirMonstros() {
    Monstros.forEach((Monstro, index) => {
      console.log(`Monstro ${index + 1}: ${Monstro.exibirMonstro()}`);
    });
  }

  https://github.com/login?client_id=01ab8ac9400c4e429b23&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D01ab8ac9400c4e429b23%26prompt%3Dselect_account%26redirect_uri%3Dhttps%253A%252F%252Fvscode.dev%252Fredirect%26scope%3Dcodespace%2Bread%253Auser%2Brepo%2Buser%253Aemail%26state%3Dvscode%25253A%25252F%25252Fvscode.github-authentication%25252Fdid-authenticate%25253Fnonce%25253D6c430c099b5760e9%252526windowId%25253D2















// função que preenche a classe monstro com suas informações pelo usuario
 criar(x)
{
    
    var nome, Vatq, dano, defesa, resFo, resM, resFr, pv, CD, PM, ND, tipo
    // pergunta e respostas são variaveis feitas para guardar as respostas do usuario, no caso do tipo e nivel do monstro são numeros que tem um varervalo definido o programa se nega a analisar algo diferente do necessario
    var pergunta;
    var resposta = 0;
    nome = input.question("digite nome do Monstro " + x +" \n");
    
    do
    {
        pergunta=input.question("você quer colocar alguma ND na criatura " + x +" , se sim escreva ''sim'', do contrario escreva 'nao' \n", x);

    } while (pergunta != "sim" && pergunta != "nao");
    if (pergunta== "sim")
    {
        do
        {
            ND=input.question("digite o nivel de desafio do Monstro, se deseja nd S escreva 21, S+ 22  \n");
           
        } while (ND == 0.25 && ND == 0.5 || ND < 1 && ND > 22);
    }
    Vatq=input.question("digite o valor de ataque do Monstro " + x +" \n", x);
    

    dano=input.question("digite a media de dano do Monstro " + x +" \n", x);
    

    defesa=input.question("digite a defesa do Monstro " + x +" \n", x);
   
    resFo=input.question("digite a resistencia forte da criatura " + x +" \n", x);
    
    resM=input.question("digite a resistencia media da criatura " + x +" \n", x);
    

    resFr=input.question("digite a resistencia fraca da criatura " + x +" \n", x);
    

    pv=input.question("digite os pontos de vida da criatura " + x +" \n", x);
    
    do
    {
        var temp=input.question("digite o tipo de monstro: 1-solo, 2-lacaio e 3-especial\n", x);
        if(tipo == 1){
            tipo = "solo"
        }
        else if(tipo == 2){
            tipo = "lacaio"
        }
        else if(tipo == 3){
            tipo = "especial"
        }
    } while (tipo > 1 && tipo < 3);
    // ambos esses do-while servem para perguntar se o usuario quer adicionar alguma coisa opcional, caso queira pede para adicionar, do contrario ele preenche com um nulo.
    do
    {
        pergunta=input.question("você quer colocar alguma CD na criatura " + x +" , se sim escreva ''sim'', do contrario escreva 'nao' \n", x);

        // essa gambiarra ve se o usuario mandou "sim" ou não até ele escolher um dos dois, com um sim ele pode escrever o atributo, do contrario ele fica nulo

    } while (pergunta != "sim" && pergunta != "nao");
    if (pergunta == "sim")
    {
        CD=input.question("digite a CD efeito da criatura " + x +": \n", x);
        
    }
    else
    {
        CD = 0;
    }
    // reinicia a variavel pergunta
     
    // mesma coisa da CD
    do
    {
        pergunta=input.question("você quer colocar PM's na criatura " + x +" , se sim escreva ''sim'', do contrario escreva 'nao'  \n", x);

    } while (pergunta != "sim" && pergunta != "nao");
    if (pergunta == "sim")

    {

        PM=input.question("digite a quantidade de pontos de mana da criatura " + x +" \n", x);
        
    }
    else
    {
        PM = 0;
    }
let m = new Monstro(nome, Vatq, dano, defesa, resFo, resFr, pv, CD, PM, ND, tipo)
Monstros.push(m)
}
/*
void analisar(Monstro bicho, var numero)
{
    float CD; 
        CD = anlz(bicho);
    console.log("%f", CD);
}
*/