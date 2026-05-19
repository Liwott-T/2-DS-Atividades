class Personagem {
    constructor(nome, titulo, hp, mana, energia, imagem, background){
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
        this.imagem = imagem;
        this.background = background;
    }
}

class Habilidade {
    constructor(id, nome, dano, custo, energia){
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}

//Instanciar Classes (Criar Objetos)

let id_heroi = 0

do {
    id_heroi = parseFloat(prompt(`Escolha um herói (Insira apenas o número)
    1. Mayreel
    2. Hutao
    3. Heroi3`))
} while (id_heroi !== 1 && id_heroi !== 2 && id_heroi !== 3 && id_heroi !== 18092022)

let heroi
let boss
switch (id_heroi) {
    case 1:
        heroi = new Personagem ("Mayreel", "A Besta Divina da Colheita", 10, 30, 0, "assets/mayreel_idle.gif", "assets/gt_background.png")
        boss = new Personagem ("Lucy", "Besta das Sombras", 10, 0, 50, "assets/shadow_beast.gif", "assets/gt_background.png")
        break
    case 2:
        heroi = new Personagem ("Hutao", "Diretora da Funerária Wangsheng", 10, 30, 0, "assets/hutao_idle.gif", "assets/forest.jpeg")
        boss = new Personagem ("Dvalin", "Dragão do Leste", 10, 0, 50, "assets/dvalin.gif", "assets/forest.jpeg")
        break
    case 18092022:
        heroi = new Personagem ("FNS", "THE MASTERMIND", 10, 30, 0, "assets/fns.png", "assets/arena-do-aspas.webp")
        boss = new Personagem ("Aspas???", "Final Boss", 10, 0, 50, "assets/aspas.png", "assets/arena-do-aspas.webp")
        break
};
console.log(document.getElementById("nome_heroi"));
document.getElementById("nome_heroi").textContent = heroi.nome;
document.getElementById("titulo_heroi").innerText = heroi.titulo;
document.getElementById("imagem_heroi").src = heroi.imagem;
document.getElementById("background").style.backgroundImage = `url('${heroi.background}')`;
document.getElementById("nome_chefe").innerText = boss.nome;
document.getElementById("titulo_chefe").innerText = boss.titulo;
document.getElementById("imagem_chefe").src = boss.imagem;

let listaHabilidades = [
    new Habilidade (1, "ataque", 4, 0, 0),
    new Habilidade (2, "skill", 8, 10, 0),
    new Habilidade (3, "supreme", 15, 0, 100),
]