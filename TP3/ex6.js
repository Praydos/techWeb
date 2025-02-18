function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Demander un nombre à l'utilisateur
const n = parseInt(prompt("Entrez la valeur de n :"), 10);
console.log(`Le terme Fibonacci F(${n}) est : ${fibonacci(n)}`);

function premierFiboSuperieur(valeur) {
    let a = 0, b = 1, index = 1;

    while (b <= valeur) {
        let temp = a + b;
        a = b;
        b = temp;
        index++;
    }

    return { rang: index, valeur: b };
}

// Demander une valeur à l'utilisateur
const valeur = parseInt(prompt("Entrez une valeur limite :"), 10);
const resultat = premierFiboSuperieur(valeur);

console.log(`Le premier terme de Fibonacci supérieur à ${valeur} est F(${resultat.rang}) = ${resultat.valeur}`);

