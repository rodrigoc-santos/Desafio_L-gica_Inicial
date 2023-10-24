// # 3️⃣ Escrevendo as classes de um Jogo

// **O Que pode ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada

class hero {
    constructor(nameHero, typeHero) {
        this.nameHero = nameHero
        this.typeHero = typeHero
        if (this.typeHero === "guerreiro") {
            this.attackMode = "espada"
        } else if (this.typeHero === "mago") {
            this.attackMode = "magia"
        } else if (this.typeHero === "monge") {
            this.attackMode = "artes marciais"
        } else {
            this.attackMode = "shuriken"
        }
    }

    attack() {
        console.log(`O héroi ${this.nameHero} do tipo ${this.typeHero} atacou usando ${this.attackMode}`)    
    }
}

let firstHero = new hero("Goku", "guerreiro")
let secondHero = new hero("Dr. Estranho", "mago")
let thirdHero = new hero("Aang", "monge")
let fourthHero = new hero("Naruto", "ninja")

firstHero.attack()
secondHero.attack()
thirdHero.attack()
fourthHero.attack()