function troisNombres(a, b, c) {
    // Créer un tableau avec les trois nombres
    const nombres = [a, b, c];

    // Trier le tableau en ordre croissant
    nombres.sort((x, y) => x - y);

    // Retourner les nombres triés
    return nombres;
}

// Exemples d'utilisation
console.log(troisNombres(3, 1, 2)); // [1, 2, 3]
console.log(troisNombres(10, 5, 8)); // [5, 8, 10]
console.log(troisNombres(-1, 0, -5)); // [-5, -1, 0]
console.log(troisNombres(7, 7, 2)); // [2, 7, 7]