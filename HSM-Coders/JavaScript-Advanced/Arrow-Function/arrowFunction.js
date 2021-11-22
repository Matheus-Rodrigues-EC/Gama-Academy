// Simple Function

function soma1(a, b){
    return a + b;
}

console.log(soma1(3, 5)); // 8

// Arrow Function

const soma2 = (n1, n2) => n1 + n2;
console.log(soma2(3, 4)); // 7

// Quando passamos apenas um parametro, não é necessário o uso de parenteses
const sayHello = name => `Hello ${name}`;
console.log(sayHello('Matt'));