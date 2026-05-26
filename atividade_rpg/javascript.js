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
    ataque_heroi(alvo, habilidade){
        if (this.mana >= habilidade.custo && this.energia >= habilidade.energia) {
            alvo.hp = alvo.hp - habilidade.dano;
            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo
                this.energia += 34
            }
            if (habilidade.energia > 0) {
                this.energia -= habilidade.energia
            }
        }
        else {
            return "Mana ou energia insuficiente";
        }
    }
    ataque_boss(alvo){
        if (this.energia >= 100){
            alvo.hp -= 15
            this.energia += 50
        }
        else {
            this.energia += 50
        }
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

let listaHabilidades = [];

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
        heroi = new Personagem ("Mayreel", "A Besta Divina da Colheita", 100, 100, 0, "assets/mayreel_idle.gif", "assets/gt_background.png");
        boss = new Personagem ("Lucy", "Besta das Sombras", 100, 0, 50, "assets/shadow_beast.gif", "assets/gt_background.png");

        listaHabilidades = [
        new Habilidade (1, "🍃 Solaris", 4, 0, 0),
        new Habilidade (2, "🌸 Explosão Floral", 8, 10, 0),
        new Habilidade (3, "🦙 Transformação", 15, 0, 100),
        ];
        break
    case 2:
        heroi = new Personagem ("Hutao", "Diretora da Funerária Wangsheng", 100, 100, 0, "assets/hutao_idle.gif", "assets/forest.jpeg");
        boss = new Personagem ("Dvalin", "Dragão do Leste", 100, 0, 50, "assets/dvalin.gif", "assets/forest.jpeg");
                
        listaHabilidades = [
        new Habilidade (1, "🔥 Lança", 4, 0, 0),
        new Habilidade (2, "🦋 Guia do Além", 8, 10, 0),
        new Habilidade (3, "👻 Pacificadora de Espíritos", 15, 0, 100),
        ];
        break
    case 18092022:
        heroi = new Personagem ("FNS", "THE MASTERMIND", 100, 1000, 0, "assets/fns.png", "assets/arena-do-aspas.webp");
        boss = new Personagem ("Aspas???", "Final Boss", 100, 2024, 50, "assets/aspas.png", "assets/arena-do-aspas.webp");
                
        listaHabilidades = [
        new Habilidade (1, "🗑️ Trash", 5, 0, 0),
        new Habilidade (2, "📌 Pinada", 10, 10, 0),
        new Habilidade (3, "🧠 MASTERMIND", 50, 0, 100),
        ];
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

let containerBtn = document.getElementById("controles")
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-light");
    containerBtn.appendChild(btn);
    btn.onclick = () => {
        heroi.ataque_heroi(boss, hab)
        boss.ataque_boss(heroi)
        atualizarTela()
    }
});

const atualizarTela = () => {
    document.getElementById("hp-heroi").value = heroi.hp
    document.getElementById("mana-heroi").value = heroi.mana
    document.getElementById("energia-heroi").value = heroi.energia
    document.getElementById("hp-boss").value = boss.hp
    document.getElementById("energia-boss").value = boss.energia
};