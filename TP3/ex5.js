function estPremier(n) {
    if (n < 2) return false; // 0 et 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(n); i++) { // Vérifier jusqu'à √n
        if (n % i === 0) {
            console.log(`${n} n'est pas un nombre premier.`); // Si divisible, ce n'est pas un nombre premier
        }
    }
    console.log(`${n} est un nombre premier.`);

}

estPremier(10);

