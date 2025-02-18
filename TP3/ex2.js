function hjms(secondes) {
    // Calculer le nombre de jours
    const jours = Math.floor(secondes / (24 * 60 * 60));
    secondes = secondes % (24 * 60 * 60); // Reste après avoir soustrait les jours

    // Calculer le nombre d'heures
    const heures = Math.floor(secondes / (60 * 60));
    secondes = secondes % (60 * 60); // Reste après avoir soustrait les heures

    // Calculer le nombre de minutes
    const minutes = Math.floor(secondes / 60);
    secondes = secondes % 60; // Reste après avoir soustrait les minutes

    // Retourner le résultat sous forme d'objet
    return {
        jours: jours,
        heures: heures,
        minutes: minutes,
        secondes: secondes
    };
}

// Exemple d'utilisation de la fonction
const duree = hjms(123456);
console.log(`Jours: ${duree.jours}, Heures: ${duree.heures}, Minutes: ${duree.minutes}, Secondes: ${duree.secondes}`);