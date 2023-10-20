// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let playerWins;
let playerDefeats;

console.log("---------------------------------------")
console.log("           ELO DA SEASON I             ")
console.log("---------------------------------------")
console.log()

function main (start) {
    if (start === 1) {
        rl.question('Quantas partidas você ganhou nessa temporada? ', (wins) => {
            playerWins = wins;
            rl.question('Quantas partidas você perdeu? ', (defeats) => {
                playerDefeats = defeats; 
                
                playerWins = parseInt(playerWins);
                playerDefeats = parseInt(playerDefeats);
                let rankeds = calcularRankeds(playerWins, playerDefeats)
                
                
                console.log("---------------------------------------")
                console.log(rankeds)
                
                main (start + 1)
            });
        });    
    } else { 
        rl.close();
    }
}

function calcularRankeds (wins, defeats) {
    let winningBalance = wins - defeats
    let result;
    if (winningBalance < 10) {
        result = "O Herói tem saldo de vitória de " + winningBalance + " está no nível de FERRO"
    } else if (winningBalance >= 11 && winningBalance <= 20) {
        result = "O Herói tem saldo de vitória de " + winningBalance + " está no nível de BRONZE"
    } else if (winningBalance >= 21 && winningBalance <= 50) {
        result = "O Herói tem saldo de vitória de " + winningBalance + " está no nível de PRATA"
    } else if (winningBalance >= 51 && winningBalance <= 80) {
        result = "O Herói tem saldo de vitória de " + winningBalance + " está no nível de OURO"
    } else if (winningBalance >= 81 && winningBalance <= 90) {
        result = "O Herói tem saldo de vitória de " + winningBalance + " está no nível de DIAMANTE"
    } else if (winningBalance >= 91 && winningBalance <= 100) {
        result = "O Herói tem saldo de vitória de " + winningBalance + " está no nível de LENDÁRIO"
    } else if (winningBalance >= 101) {
        result = "O Herói tem saldo de vitória de " + winningBalance + " está no nível de IMORTAL"
    }
    return result
}

main (1)



 

