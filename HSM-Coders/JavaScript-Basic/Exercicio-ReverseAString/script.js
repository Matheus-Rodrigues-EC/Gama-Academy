
let newStr = ' ';

let resultado = reverseAString("Hello Gama");
console.log(resultado);

function reverseAString(str){
    let aux;

    for(let i = str.length - 1; i >= 0 ; i--){
        newStr += str[i];
        console.log(newStr);
    }
}