const entrada = require ('prompt-sync')({sigint: true});

let numeroDeAlunos = entrada ("Qual é o número de alunos? ");

let contador = 0;

console.log (` \n\#######################\n\       Laço WHILE\n\#######################\n\ `);

while (contador <= numeroDeAlunos) {
    if (contador == 0)    {
        console.log ("Este número é " + contador + ".");
    } else if (contador % 2 == 0) {
        console.log (`O número ${contador} é par!`);
    } else {
        console.log (`O número ${contador} é ímpar!`);
    }
    contador++;
}

console.log (` \n\#######################\n\       Laço FOR\n\#######################\n\ `);

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    if (contador == 0)    {
        console.log ("Este número é " + contador + ".");
    } else if (contador % 2 == 0) {
        console.log (`O número ${contador} é par!`);
    } else {
        console.log (`O número ${contador} é ímpar!`);
    }
}
