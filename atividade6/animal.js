class Animal {
    constructor(apelido) {
        this.nome = apelido;
    }
    falar(som) {
        console.log(som);
    }
}

class Gato extends Animal {
    ronronar() {
        console.log(`o ${this.nome} está ronronando`);
    }
}

class Passaro extends Animal {
    voar() {
        console.log(`o ${this.nome} está pairando alto nos céus`)
    }
}

class Caspas extends Animal {
    proplay() {
        console.log(`o ${this.nome} está amassando no Valorant`);   
    }
}

let luffy = new Gato("Luffy")
let ronaldo = new Passaro("Ronaldo")
let McBerson = new Caspas("McBerson")

luffy.falar("Miaaaauuu")
luffy.ronronar()

ronaldo.falar("Caw caw")
ronaldo.voar()

McBerson.falar("Perai, vou ativar o modo Caspas.... ArRRggGGGGGGgggHHHhhh")
McBerson.proplay()