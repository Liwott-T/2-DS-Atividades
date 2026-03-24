// 1 - Arrays

// 1.1 - Arrays Simples
const rankingBatatas = ["1. Batata Assada", "2. Batata Crua", "3. Batata Frita", "4. Purê de Batata", "5. Batata Cozida"];

// 1.2 - FIFO (Fila)
const fila = ["Daffini", "Anderson", "Anna Beatriz", "Clara (Louca)", "Luiza"];
fila.push("Nícolas");
const primeiro = fila.shift();
console.log(primeiro);

// 1.3 - FILO (Pilha)
const pilhaLivros = ["Marina", "A Revolução dos Bichos", "1984"];
pilhaLivros.push("The Dictionary of Obscure Sorrows");
const livro = pilhaLivros.pop();
console.log(livro);

// 1.4 - Buscar se existe
const temMarina = pilhaLivros.includes("Marina");
const temAMetamorfose = pilhaLivros.includes("A Metamorfose");
console.log(temMarina);
console.log(temAMetamorfose);

// 2 - Sets 

// 2.1 - Adicionando duplicados
const matriculas = new Set([57, 404, 68, 42, 57]);
console.log([...matriculas]);

//2.2 - Adicionar Item
const listaDesejos = new Set(["Hyper Chess", "Bad End Theater"]);
listaDesejos.add("Onikura");
listaDesejos.add("Rhythm Doctor");
listaDesejos.add("Another Crab's Treasure");
console.log([...listaDesejos]);

// 2.3 - Buscar se existe
const temOnikura = listaDesejos.has("Onikura")
const temDeltarune = listaDesejos.has("Deltarune")
console.log(temOnikura);
console.log(temDeltarune);

// 2.4 - Converter array em Set
const convidados = ["Jhian", "Henrique", "Anderson", "Enzo", "Jhian", "Daffini", "Henrique"];
const convidados_unicos = new Set(convidados);
console.log([...convidados_unicos]);

// 3 - Map (Mapas)
// 3.1 - Cadastro de Preços
const produtos = new Map();
produtos.set("Silksong", 59.99);
produtos.set("Hades II", 88.99 );

// 3.2 - Buscando um Valor
valorSilksong = produtos.get("Silksong");
console.log(valorSilksong);