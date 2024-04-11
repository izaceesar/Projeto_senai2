//2

let peso = parseFloat(prompt ("Digite seu peso:"));
let altura = parseFloat(prompt ("Digite sua altura"));
let imc

function calcularImc (parPeso, parAltura){
     return parPeso/(parAltura *parAltura);
    }
imc= calcularImc (peso, altura);
alert (`O seu imc é ${imc.toFixed(2)}`);

//3

let num = prompt('digite um numero');
 function fat(num1){
    if(num == 1 || 0){
         alert ('O fatorial desse numero é 1')
    }else{
         numero = 1
         for(let i = num1; i>1 ; i-- ){
           numero *= i;
        }
    return numero
    }  

 }
 let fatorial = fat(num);
alert (`A fatorial desse numero é ${fatorial}`);




//4

let valor = parseFloat(prompt("digite um valor em dolar para ser convertido "));
let valorReais 

function ConverterDolar (parValor){
   return parValor * 4.80;
}

valorReais = ConverterDolar (valor);
alert (`O valor em reais da sua quantidade de dolares é R$ ${valorReais.toFixed(2)}`)

//5

let altura = prompt ("Digite a altura da sala")
let largura = prompt ("Digite a largura da sala")
 
function area (parAlt, parLarg) {
  return parAlt * parLarg
}
function perimetro (paraAlt, paraLarg){
  return (paraAlt*2)+(paraLarg*2)
}
let areaSala = area (altura, largura)
let perimetroSala = perimetro (altura,largura)
alert (`O perímetro da sala é de: ${perimetroSala} e a área é de ${areaSala}`)

//6
let raio = parseFloat(prompt ("Digite o raio da sala"));
 
function area (parRaio) {
  return (parRaio*parRaio) * 3.14;
}
function perimetro (parRaio){
  return  ((2*3.14)*parRaio);
}
let areaSala = area (raio);
let perimetroSala = perimetro (raio);
alert (`O perímetro da sala é de: ${perimetroSala} e a área é de ${areaSala}`);

//7

let numero = parseInt(prompt ("Digite um número"));
 
function calculaTabuada (parNumero) {
  for (let i = 0; i <= 10; i++) {
    console.log(parNumero * i);
}
}
calculaTabuada (numero);


