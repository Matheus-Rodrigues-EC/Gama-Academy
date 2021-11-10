// FizzBuzz
// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Se não for um número => 'Não é um número'
// Se não for divisível nem por 3 nem por 5 => Entrada

let resultado = FizzBuzz();
console.log(resultado);

function FizzBuzz(Entrada){

    if(typeof Entrada !== 'number'){
        return "Não é um número";
    }
    if((Entrada%3 == 0) && (Entrada%5 == 0)){
        return "FizzBuzz";
    }else if(Entrada%3 == 0){
        return "Fizz";
    }else if(Entrada%5 == 0){
        return "Buzz";
    }else{
        return Entrada;
    }

}