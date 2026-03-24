// 1. Lista de Termos - Português (pt-BR)
const termos_ptBR = ["Bem Vindo", "Carrinho", "Sair"];

// 2. Lista de Termos - Inglês (en-US)
const termos_enUS = new Map([["Bem Vindo", "Welcome"], ["Carrinho", "Cart"], ["Sair", "Leave"]]);

// 3. Lista de Termos - Espanhol (es-ES)
const termos_esES = new Map([["Bem Vindo", "Bienvenido"], ["Carrinho", "Carrito"], ["Sair", "Salir"]]);

// 4. Escolher o idioma
const idiomaSelecionado = termos_esES

// 5. Gerar termos traduzidos
const traducao = termos_ptBR.map(termo => idiomaSelecionado.get(termo));

// 6. Imprimir dados
console.log(traducao[0])
console.log(traducao[1])
console.log(traducao[2])