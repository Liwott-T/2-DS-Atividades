const vendasRaw = [
    { produto: 'Teclado', preco: 150 },
    { produto: 'Mouse', preco: 80 },
    { produto: 'Teclado', preco: 150 }, // Duplicado
    { produto: 'Monitor', preco: 900 },
    { produto: 'Mouse', preco: 80 },    // Duplicado
    { produto: 'Mousepad', preco: 30 }
];

// Questão 1
const arrayVendas = vendasRaw.map(venda => venda.produto);
const vendasUnicas = new Set (arrayVendas);
console.log([...vendasUnicas]);

// Questão 2
const vendasMap = new Map();
vendasRaw.forEach(item => {
    vendasMap.set(item.produto, item.preco)
});
console.log(vendasMap.get("Mousepad"));

console.log(vendasMap);

// Questão 3
let totalCompra = 0;
for (let preco of vendasMap.values()) {
    totalCompra = totalCompra + preco
};
console.log(totalCompra);