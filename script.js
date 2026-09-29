/*
Projeto Calculando Gastos Mensais
seu nome;
seu salário;
alguns gastos;
cálculo do total gasto;
cálculo do dinheiro restante;
uma mensagem mostrando o resultado;

*/

const nome = "Felipe";
const idade = 23;

const salario = 2900 ;

const aluguel = 1000;
const mercado = 300;
const lazer = 150;
const economia = 200;


const totalGastos = aluguel + mercado + lazer;

const dinheiroRestante = salario - totalGastos;
const dinheiroDisponivel = dinheiroRestante - economia;

console.log("Olá " + nome + ", sua idade é " + idade + " anos.");
console.log("Seu salário é de R$ " + salario + ", você gastou R$ " + totalGastos + ", e agora você tem R$ " + dinheiroRestante + " restantes.");
console.log("Após economizar R$ " + economia + ", você tem R$ " + dinheiroDisponivel + " restantes.");



