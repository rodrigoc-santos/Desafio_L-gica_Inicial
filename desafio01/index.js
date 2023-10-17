// # 1️⃣ Desafio Classificador de nível de Herói

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Saída
// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

// Incrementei o projeto para não apenas 1 herói pré-definido e sim para solicitar ao usuários os dados e inserir 3 heróis e suas quantidades de experiência (XP) respectivamente. Informar qual a classificação e após isso colocá-los em um rank.


// Entrada do nome e do nível de experiência do Herói
const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomeDoHeroi = [];
let xpDoHeroi = [];

function fazerPergunta(vezes) {
  if (vezes < 3) {
    rl.question('Digite o nome do Herói : ', (nome) => {
      nomeDoHeroi[vezes] = nome;
      rl.question('Digite o XP do Herói : ', (nivelXp) => {
        xpDoHeroi[vezes] = nivelXp;      
        
        fazerPergunta(vezes + 1); // Chama a função novamente para a próxima iteração
        
      });
    });
  } 
  else {
    
    console.log("---------------------------------------")
    for (let i = 0; i < 3; i++) {
      if (xpDoHeroi[i] < 1000) {
        console.log("O Herói de nome " + nomeDoHeroi[i] + " está no nível de FERRO")
      } else if (xpDoHeroi[i] >= 1001 && xpDoHeroi[i] <= 2000) {
        console.log("O Herói de nome " + nomeDoHeroi[i] + " está no nível de BRONZE")
      } else if (xpDoHeroi[i] >= 2001 && xpDoHeroi[i] <= 5000) {
        console.log("O Herói de nome " + nomeDoHeroi[i] + " está no nível de PRATA")
      } else if (xpDoHeroi[i] >= 6001 && xpDoHeroi[i] <= 7000) {
        console.log("O Herói de nome " + nomeDoHeroi[i] + " está no nível de OURO")
      } else if (xpDoHeroi[i] >= 7001 && xpDoHeroi[i] <= 8000) {
        console.log("O Herói de nome " + nomeDoHeroi[i] + " está no nível de PLATINA")
      } else if (xpDoHeroi[i] >= 8001 && xpDoHeroi[i] <= 9000) {
        console.log("O Herói de nome " + nomeDoHeroi[i] + " está no nível de ASCENDENTE")
      } else if (xpDoHeroi[i] >= 9001 && xpDoHeroi[i] <= 10000) {
        console.log("O Herói de nome " + nomeDoHeroi[i] + " está no nível de IMORTAL")
      } else if (xpDoHeroi[i] >= 10001) {
        console.log("O Herói de nome " + nomeDoHeroi[i] + " está no nível de RADIANTE")
      }
    }

    // Organizando os arrays em ordem decrescente
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3 - i; j++) {
        if (xpDoHeroi[j] < xpDoHeroi[j + 1]) {
          let tempXP = xpDoHeroi[j];
          xpDoHeroi[j] = xpDoHeroi[j + 1];
          xpDoHeroi[j + 1] = tempXP;
          let tempNome = nomeDoHeroi[j];
          nomeDoHeroi[j] = nomeDoHeroi[j + 1];
          nomeDoHeroi[j + 1] = tempNome;
        }
      }
    }
    
    console.log(xpDoHeroi)
    console.log(nomeDoHeroi)
    console.log()
    console.log("---------------------------------------")
    console.log("          RANKING DOS HERÓIS           ")
    console.log("---------------------------------------")
    console.log()
    for (let i = 0; i < 3; i++) {
      console.log((i + 1) + "º Lugar: " + nomeDoHeroi[i] + " com " + xpDoHeroi[i] + " de XP!")
    }
    rl.close(); // Fecha a interface readline 
  }
}

fazerPergunta(0); // Inicia o processo de perguntas 3 vezes