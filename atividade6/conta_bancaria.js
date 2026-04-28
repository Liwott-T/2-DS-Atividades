class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }
    verSaldo() {
        console.log(`
            Olá ${this.titular},
            seu saldo atual é de
            R$ ${this.saldo}`)
    }
    depositar(valor) {
        this.saldo = this.saldo + valor
        this.verSaldo()
    }
    sacar(valor) {
        this.saldo = this.saldo - valor
    }
}

let contaDoMcBerson = new ContaBancaria("Mac do Barso (caspas)", 123456789.76);

contaDoMcBerson.verSaldo()
contaDoMcBerson.depositar(987654321)

contaDoMcBerson.verSaldo()
contaDoMcBerson.sacar(-987654321)
contaDoMcBerson.verSaldo()

    
let contaDoStrikernuof = new ContaBancaria("Striker no of", -0.76);

contaDoStrikernuof.verSaldo()