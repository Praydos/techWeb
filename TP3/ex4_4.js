function pyramide(n) {
    for (let i = 1; i <= n; i++) {
        let espaces = ' '.repeat(n - i);  // Ajoute des espaces pour centrer
        let etoiles = '*'.repeat(2 * i - 1);  // Calcule le nombre d'étoiles
        console.log(espaces + etoiles);  // Affiche la ligne
    }
}

// Exemple d'utilisation
pyramide(7);
