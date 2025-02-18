function hjms(secondes) {
    // Calculer le nombre de jours, heures, minutes et secondes
    const jours = Math.floor(secondes / (24 * 60 * 60));
    secondes = secondes % (24 * 60 * 60); // Reste après avoir soustrait les jours

    const heures = Math.floor(secondes / (60 * 60));
    secondes = secondes % (60 * 60); // Reste après avoir soustrait les heures

    const minutes = Math.floor(secondes / 60);
    secondes = secondes % 60; // Reste après avoir soustrait les minutes

    // un tableau pour stocker les parties non nulles
    const parties = [];

    // Ajouter les jours 
    if (jours > 0) {
        parties.push(`${jours} jour`);//${jours > 1 ? 's' : ''}
    }

    // Ajouter les heures 
    if (heures > 0) {
        parties.push(`${heures} heure`);//${heures > 1 ? 's' : ''}
    }

    // Ajouter les minutes 
    if (minutes > 0) {
        parties.push(`${minutes} minute`);//${minutes > 1 ? 's' : ''}
    }

    // Ajouter les secondes 
    if (secondes > 0) {
        parties.push(`${secondes} seconde`);//${secondes > 1 ? 's' : ''}
    }

    // Joindre les parties avec des virgules et un "et" pour la dernière partie
    let resultat = parties.join(', ');
    if (parties.length > 1) {
        const dernierVirgule = resultat.lastIndexOf(', ');
        resultat = resultat.substring(0, dernierVirgule) + ' et ' + resultat.substring(dernierVirgule + 2);
    }

    // Retourner le résultat
    return resultat;
}

// Exemples d'utilisation
console.log(hjms(123456)); // "1 jour, 10 heures, 17 minutes et 36 secondes"
console.log(hjms(3661));   // "1 heure, 1 minute et 1 seconde"
console.log(hjms(7200));   // "2 heures"
console.log(hjms(60));     // "1 minute"
console.log(hjms(0));      // "" (aucune valeur)