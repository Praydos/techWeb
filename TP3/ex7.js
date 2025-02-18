function Raca1(A) {
    if (A < 1 || A > 100) {
        console.log("Veuillez entrer un nombre A entre 1 et 100.");
        return;
    }

    let u_n = A / 2; // Initialisation
    const epsilon = 1e-5; // Précision demandée

    while (Math.abs(u_n * u_n - A) >= epsilon) {
        u_n = 0.5 * (u_n + A / u_n); // Relation de récurrence
    }

    console.log(`Valeur approchée de la racine carrée = ${u_n}`);
}

// Demande à l'utilisateur un nombre A
const A = parseFloat(prompt("Entrez un nombre A entre 1 et 100 :"));
Raca1(A);
