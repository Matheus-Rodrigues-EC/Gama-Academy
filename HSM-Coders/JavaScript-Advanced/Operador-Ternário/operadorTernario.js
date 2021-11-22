// if...else

function MaiorIdadeIf(idade){
    if(idade >= 18){
        return 'Maior de idade';
    }else{
        return 'Menor de idade';
    }
}

function maiorIdadeOPT(idade){
    // operador ternário equivalente ao if..else acima
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(MaiorIdadeIf(17));
console.log(maiorIdadeOPT(21));