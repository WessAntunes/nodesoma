/*
let n1 = 2;
let n2 = 4;
let n3 = 5;
let n4 = 20;
let total = 0

console.log("Programa que soma 4 numeros");
total = n1 + n2 + n3 + n4;
console.log(`Total - ${total}`);
*/


/*
let readlineSync = require('readline-sync');

let n = 0;
let total = 0

console.log("Programa que soma 4 numeros");
n = parseFloat(readlineSync.question('Informe o 1 numero'));
total += n;
n = parseFloat(readlineSync.question('informe o 2 numero'));
total += n;
n = parseFloat(readlineSync.question('informe o 3 numero'));
total += n;
n = parseFloat(readlineSync.question('informe o 4 numero'));
total += n;

console.log(`Total = ${total}`);
*/

/*
let readlineSync = require('readline-sync');

let n = 0;

let total = 0;


console.log("Programa que soma 10 numeros");

for (let i = 0; i <=10; i++) 
{
    n = parseFloat(readlineSync.question('Informe o 10 numero'));
    total = total + n;
}

console.log(`Total = ${Total}`);
*/

let readlineSync = require('readline-sync');
let n = 10;
let total = 0;

console.log("Programa que soma 10 numeros");
let i = 1;
while(n!=0)
{
    n = parseFloat(readlineSync.question(`Informe o ${i} numero: `));
    total = total + n;
    i++;
}

console.log(`Total = ${total}`);