// let e const
const nomeJogador = "Bob";
let pontos = 0;
pontos = pontos + 10;
pontos += 50;
console.log(nomeJogador, "possui", pontos, "pontos");

// template literal
const preco = 100;
const desconto = 20;
console.log(`O preço do produto é R$${preco-desconto} após aplicar o desconto.`);

const nomeAluno = "Daffini";
const disciplina = "Sociologia";
let nota1 = 8;
let nota2 = 5;
const resultado = `
--- BOLETIM ESCOLAR ---
Aluno: ${nomeAluno}
Disciplina: ${disciplina}
Status: ${(nota1+nota2)/2 > 6 ? "APROVADO" : "RECUPERAÇÃO"}
`;
console.log(resultado);