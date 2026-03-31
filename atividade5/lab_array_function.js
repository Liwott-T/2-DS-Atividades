// Atividade 1: O Filtro de Hashtags
console.log("----- Atividade 1 -----")
const tags = ["#vida", "#javascript", "#aula", "#js", "#café"];
const postagens_js = tags.filter(js => js.includes("#js"))
postagens_js.forEach(js => console.log(js))

// Atividade 2: Formatador de Nomes de Usuário
console.log("----- Atividade 2 -----")
const usuarios = ["aLeX", "mArIa", "jOãO", "bIa"];
const usuarios_padronizados = usuarios.map(u => u.toLowerCase())
usuarios_padronizados.forEach(u => console.log(u))

// Atividade 3: Sistema de Busca de Convidados
console.log("----- Atividade 3 -----")
const convidados = ["Ana", "Al", "Alberto", "Bia", "Amanda", "Ab"];
const convidados_vip = convidados.filter(vip => vip.startsWith("A") && (vip.length > 2))
convidados_vip.forEach(vip => console.log(vip))

// Atividade 4: O Corretor de Preços (Matemática)
console.log("----- Atividade 4 -----")
const precos = [50, 100, 150, 200];
const precos_desconto = precos.map(d => d - 10)
precos_desconto.forEach(u => console.log(u))