function degreC(tempF) {
    // Appliquer la formule de conversion
    let tempC = (5 / 9) * (tempF - 32);


    console.log("La température en degrés Celsius est : " + tempC.toFixed(2));


    return tempC;
}

// Exemple d'utilisation de la fonction
degreC(77); // Convertit 77°F en °C