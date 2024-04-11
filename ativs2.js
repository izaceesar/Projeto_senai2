//3
function validarConsole(){
    console.log ("Olá,mundo!");
}
validarConsole();

 //4

let Nome = prompt("Digite um nome");
function validarNome(nome){
  console.log (`Olá ${nome}!`);
 }
validarNome (Nome);

 //5

 let Número = parseFloat(prompt("Digite um número"));

function dobroNumero(parNumero){
  return parNumero*2;
}

let dobro = dobroNumero
alert(`O dobro do número é ${dobroNumero}`)

//6

let Número = parseFloat(prompt("Digite um número"));
 let Número2 =parseFloat(prompt("Digite um segundo número"));
 let Número3 = parseFloat(prompt("Digite um terceiro número"));
 let media ;
 function calcularMédia(parN1, parN2, parN3){
  return (parN1+parN2+parN3)/3;

}

media = calcularMédia (n1, n2, n3);
alert (`A média entre os números é ${calcularMédia}`)


 //7

 let Número = parseInt(prompt("Digite um número"));
 let Número2 =parseInt(prompt("Digite um segundo número"));
 let maior
 function validarNumero(parNum1, parNum2){
  if(parNum1 > parNum2 ){
    return parNum1;
  }else{
    return parNum2;
  }

 }

 maior = validarNumero (parNum1, parNum2)
 alert (`O maior número é ${maior}!`);


//8

let Número = parseFloat(prompt("Digite um número"));
 let Multiplicação;

function calcularMédia(parNúmero){
   return parNúmero*parNúmero;

}
Multiplicação = calcularMédia (Número);
alert (`O resultado da multiplicação ${Multiplicação}`)

