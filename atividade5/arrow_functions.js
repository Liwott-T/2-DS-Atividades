// .map(): Cria uma lista com dados alterados
const metros = [1, 5, 10];
const centimetros = metros.map(m => m*100);
centimetros.forEach(c => console.log(`${c}`));

// .filter(): Cria uma lista com os itens especificados
const notas = [8, 4, 9, 5];
const notas_baixas = notas.filter(n => n < 6);
notas_baixas.forEach(n => console.log(n));

// .find(): Retorna apenas o primeiro item que passa na condição
const alunos = ["Daffini", "Nícolas", "Anderson", "Clara", "Anna Beatriz", "Luiza"];
const busca = alunos.find(nome => nome === "Anderson");
console.log(busca);

// every(): Retorna se todos passam na condição
const mediafinal = [3, 7, 10];
const todosPassaram = mediafinal.every(m => m > 6);
console.log(todosPassaram);

// .toUpperCase() .toLowerCase(): coloca todas as letras em maiúsculas/minúsculas
const nomes = ["Liwott", "mcBerson", "zax", "stRIKer", "yorI", "MITAKA"];
const maiusculas = nomes.map(n => n.toUpperCase());
console.log(maiusculas);
nomes.forEach(n => console.log(n.toLowerCase()));

// .startsWith() .endsWith(): Retorna quem começa/ter
const arquivos = ["charizard.png", "setgaleen21001.exe", "charizard-removebg-preview.png", "mewtwo.png", "GalePortable21001.zip", "M1_Cap5_Estudo_de_caso_CQ.docx"];
const apenasFotos = arquivos.filter(a => a.endsWith(".png"));
apenasFotos.forEach(a => console.log(a));

// .includes(): Verifica se um texto contém outro
const musicas = ["Birdbrain - JamieP", "Spoken For - Flavor Foley", "Don't Wanna Study! - TowTellLee", "Cadmium Colors - JamieP", "Hey Doctor, Doctor - Milk In The Microwave", "Brain Implosion Energy Drink - Flanger Moose", "Machine Love - JamieP", "Morality Lesson - Will Stetson", "Static - Flavor Foley"]
const musicas_JamieP = musicas.filter(m => m.includes("JamieP") || m.includes("Flavor Foley"))
musicas_JamieP.forEach(m => console.log(m))

// .replace(): Troca uma parte do texto por outra
let cpf = "856.456.783-36";
const cpf_oculto = cpf.replace("456.783", "***.***")
console.log(cpf_oculto)