function triangle1(n) {
    let i = 1;
    while (i <= n) {
        console.log('*'.repeat(i));
        i++;
    }
}

// Exemple d'utilisation
triangle1(7);

function triangle2(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
}

// Exemple d'utilisation
triangle2(7);
