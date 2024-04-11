// dia -> 04/04/2024

// atividade 2
let titulo = document.querySelector ('h1');
titulo.innerHTML = "Hora do desafio"; 

// atividade 3
function exibirNaTela (tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
   }
   exibirNaTela('h1','Hora do desafio!! ')
   
   function validarChute(){
       console.log("O botão foi clicado!");
   }

   // atividaade 4 
   function exibirNaTela (tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
   }
   exibirNaTela('h1','Hora do desafio!! ')
   
   function validarChute(){
       alert("Eu amo JS!");
   }

   // atividade 5 
   function exibirNaTela (tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
   }
   exibirNaTela('h1','Hora do desafio!! ')
   
 
   let cidade;
   function validarChute(){
    cidade = prompt ("Digite sua cidade:");

       alert(`Eu estive na cidade de ${cidade} e lembrei de você!`);
   }
   

   // atividade 6 
   function exibirNaTela (tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
   }
   exibirNaTela('h1','Hora do desafio!! ')
   
 

   let soma;
   function clickSoma(){
    let numero1 = parseInt (prompt("Digite o primeiro número"));
    let numero2 = parseInt (prompt("Digite o segundo número"));
    soma = numero1 + numero2
    alert(`A soma dos números é: ${soma}.`);
   }










// dia -> 05/04/2024

//atividade 3
function mensagemConsole(){
     console.log ('Olá mundo!');
 }
 mensagemConsole();

// atividade 4 
function verificarConsole(){
    let nome = prompt("Qual o seu nome?:");
    console.log (`Olá, ${nome}`);
   }
   verificarConsole()

// atividade 5 
    let numero = parseInt (prompt ("Digite um número:"));
 function receberNumero (numero1){
     return numero1*2;
 }
 let dobro = receberNumero (numero);
 alert (`O dobro do número ${numero}`);

// atividade 6
 function verificarMedia(n1, n2, n3){
     return parseInt (n1+ n2 + n3) / 3;
  }
  let numero1 = parseInt(prompt("Digite o primeiro número:"));
  let numero2 = parseInt(prompt("Digite o segundo número:"));
  let numero3 = parseInt(prompt("Digite o terceiro número:"));
  let resultado = verificarMedia(numero1, numero2, numero3);
  alert (`A média desses três números é: ${numero1} + ${numero2} + ${numero3} = ${resultado}`);

//atividade 7 
 let n1 = parseInt(prompt("Digite um número"));
 let n2 = parseInt(prompt("Digite um número"));

 function verificarConsole(num1, num2) {
        if (n1 > n2) {
         return alert(`O maior número é o ${n1}`);
     }
     else {
         return alert(`O maior número é o ${n2}`);
     }
 }
 verificarConsole();

// atividade 8 
 let n1 = parseInt(prompt("Digite um número"));

 function verificarConsole(num1) {
     return num1*num1
 }
 let resultado = verificarConsole(n1)
 alert (` Resultado: ${n1} x  ${n1} = ${resultado}`)

 verificarConsole();








 // dia -> 11/04/2024

 // atividade 2 
 let peso = parseFloat (prompt ("Digite o seu peso em quilogramas"));
let altura = parseFloat(prompt ("Digite sua altura em metros"));
let imc;
function resultado (parPeso, parAltura){
    return parPeso/ (parAltura*parAltura) ;
    
}
imc = resultado (peso,altura)
alert (`O seu IMC é de ${imc.toFixed(2) }`);


// atividade 3 
let numero = prompt ("Digite um número:");
function fatorial (num){
    numero= num;
    if (num ===0 || num ===1)
     return 1;
    while (num >1){
        num --;
        numero*= num;
    }
   return numero;
}
 numero = fatorial (numero);
 alert (`fatorial: ${numero}`);

 // atividade 4 
 let real = parseFloat (prompt ("Digite um valor em real para saber a quantia em dólar"));
function converter (valor){
    return valor*4.80
}
let resultado = converter (real);
alert (`A quantia de ${real} reais é equivalente a ${resultado} dólares`);

// atividade 5
let largura = parseFloat (prompt ("Digite a largura da sua sala:"));
let altura = parseFloat(prompt ("Digite altura da sua sala"));
function calArea (parLargura, parAltura){
    return parAltura*parLargura;
}
let resultado = calArea (largura,altura); 

function calPerimetro (parLargura,parAltura){
    return (parAltura*2)+(parLargura*2)
}

let resultado2 = calPerimetro(largura,altura); 
alert (`A área da sua sala é de  ${resultado} metros e o perímetro dela é ${resultado2}metros`);

// atividade 6

let raio = parseFloat(prompt("Digite o raio da sua sala"));
 
function calculo(raioPar) {
    return (raioPar*raioPar)*3.14;
}
let resultado = calculo(raio);
 
function calculo2(raioPar) {
    return (raioPar*2)*3.14;
}
let resultado2 = calculo2(raio);
alert (`O perimetro da sala é ${resultado2.toFixed(2)} metros e a area da sala é ${resultado.toFixed(2)} metros`)


// atividade 7 

let numero = prompt("Digite um numero para saber sua tabuada");
 
function tabuada(numeroP){
    for(var i=1;i<=10 ; i++){
        alert (` ${numeroP} X  ${i}=  ${numero * i}`);
    }
   
}
tabuada(numero);wq