class Monstro {
    constructor(nome, vida, dano, dado) {
        this.nome = nome
        this.vida = vida
        this.dano = dano
        this.dado = dado
    }
    dinheiro() {
        this.dinheiro = (this.vida + this.dano)/20 * this.dado
        return this.dinheiro
    }
};

let zumbi = new Monstro("Zumbi", 20, 8, 15);

console.log(zumbi.dinheiro());

console.log("Anderson é legau");
console.log("McBerson é pro plays (novo Caspas Valorant)");

