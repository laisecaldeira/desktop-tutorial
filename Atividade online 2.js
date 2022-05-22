
var hoje = new Date("2022/05/22");
var dataevento = new Date("2022/05/30");

let idade = 18;
let participantes = ["Camila", "Maria", "João" , "Mário"];

console.log("Qual a data do evento?");
console.log(dataevento);

if (hoje > dataevento){
	console.log("Data incorreta");
}	
	else if (hoje < dataevento){
	console.log("Data válida, informe o número de participantes.");
}
console.log(participantes.length);

if (participantes.length < 100){
	console.log ("Cadastro realizado. Informe a idade dos participantes.");
}
	else if (participantes.length > 100){
	console.log ("Quantidade de participantes excedida. Não é possível realizar o cadastro.");
}
console.log(idade);

if (idade >= 18){
		console.log("Cadastro realizado. Informe o nome dos participantes.");
}
		else if (idade < 18){
		console.log("Cadastro não permitido para menores de 18 anos.");
}

console.log(participantes);
console.log("Cadastro concluído");