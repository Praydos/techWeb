### Conversion de Températures en JavaScript  

**1. Objectif de l'exercice :**  
L'exercice consiste à écrire une fonction en JavaScript permettant de convertir une température exprimée en degrés Fahrenheit en degrés Celsius, en utilisant la formule :  

\[
tempC = \left(\frac{5}{9}\right) \times (tempF - 32)
\]

**2. Solution proposée :**  
La fonction `degreC(tempF)` prend en entrée une température en degrés Fahrenheit (`tempF`), applique la formule de conversion, et affiche la température correspondante en degrés Celsius avec deux décimales grâce à la méthode `.toFixed(2)`.  

**3. Explication du code :**  
- La fonction commence par calculer `tempC` à partir de `tempF` en appliquant la formule de conversion.  
- Ensuite, elle affiche le résultat arrondi à deux chiffres après la virgule.  
- La fonction retourne également la valeur convertie pour une éventuelle réutilisation.  
- Enfin, un exemple d'utilisation est fourni avec `degreC(77)`, qui permet de convertir 77°F en degrés Celsius.  

**4. Résultat attendu :**  
Si l'on exécute `degreC(77)`, la console affichera :  
```
La température en degrés Celsius est : 25.00
```
La conversion est donc correcte.  

**5. Conclusion :**  
L'implémentation respecte la formule mathématique et permet une conversion simple et efficace des températures en JavaScript. Une amélioration possible serait d'ajouter une gestion des erreurs pour vérifier que l'entrée est bien un nombre.

-----------------------------------------------------
### Conversion de Durées en JavaScript  

**1. Objectif de l'exercice :**  
L'objectif de cet exercice est d'écrire une fonction en JavaScript qui prend un nombre de secondes en entrée et le convertit en jours, heures, minutes et secondes.  

**2. Solution proposée :**  
La fonction `hjms(secondes)` utilise des opérations mathématiques pour extraire successivement le nombre de jours, d'heures, de minutes et de secondes restantes.  

**3. Explication du code :**  

```javascript
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
```

**4. Résultat attendu :**  
Si on exécute `hjms(123456)`, la console affichera :  
```
Jours: 1, Heures: 10, Minutes: 17, Secondes: 36
```
Cela signifie que 123456 secondes correspondent à **1 jour, 10 heures, 17 minutes et 36 secondes**.  

**5. Conclusion :**  
Cette implémentation permet une conversion efficace d'une durée exprimée en secondes vers une représentation plus compréhensible. Une amélioration possible serait d'afficher directement les résultats sous forme de texte formaté pour une meilleure lisibilité.

-------------------------------------------------------------------

### Amélioration de la Conversion de Durées en JavaScript  

**1. Objectif de l'exercice :**  
L'objectif est d'améliorer la fonction `hjms` pour :  
- Supprimer les valeurs nulles (0 jours, 0 heures, etc.) de l'affichage.  
- Afficher les unités au singulier lorsque la valeur est égale à 1.  
- Rendre l'affichage plus naturel en utilisant "et" avant le dernier élément.  

**2. Solution améliorée :**  
La fonction modifiée convertit les secondes en jours, heures, minutes et secondes, puis génère une chaîne de texte formatée en évitant les valeurs nulles et en gérant les pluriels correctement.  

**3. Explication du code :**  

```javascript
function hjms(secondes) {
    // Calculer le nombre de jours, heures, minutes et secondes
    const jours = Math.floor(secondes / (24 * 60 * 60));
    secondes = secondes % (24 * 60 * 60);

    const heures = Math.floor(secondes / (60 * 60));
    secondes = secondes % (60 * 60);

    const minutes = Math.floor(secondes / 60);
    secondes = secondes % 60;

    // Tableau pour stocker les parties non nulles
    const parties = [];

    // Ajouter les jours 
    if (jours > 0) {
        parties.push(`${jours} jour${jours > 1 ? 's' : ''}`);
    }

    // Ajouter les heures 
    if (heures > 0) {
        parties.push(`${heures} heure${heures > 1 ? 's' : ''}`);
    }

    // Ajouter les minutes 
    if (minutes > 0) {
        parties.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
    }

    // Ajouter les secondes 
    if (secondes > 0) {
        parties.push(`${secondes} seconde${secondes > 1 ? 's' : ''}`);
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
```

**4. Résultats attendus :**  
- `hjms(123456)` → `"1 jour, 10 heures, 17 minutes et 36 secondes"`  
- `hjms(3661)` → `"1 heure, 1 minute et 1 seconde"`  
- `hjms(7200)` → `"2 heures"`  
- `hjms(60)` → `"1 minute"`  
- `hjms(0)` → `""` (aucun affichage)  

**5. Conclusion :**  
L'amélioration permet une meilleure lisibilité des résultats en évitant les valeurs inutiles et en rendant la phrase plus naturelle. Cette version est plus conviviale et peut être directement utilisée dans des applications nécessitant une conversion précise des durées.

--------------------------------------------------
### Classement de Trois Nombres en JavaScript  

**1. Objectif de l'exercice :**  
L'objectif est d'écrire une fonction `troisNombres(a, b, c)` qui prend trois nombres en entrée et les retourne triés en ordre croissant (du plus petit au plus grand).  

**2. Solution proposée :**  
La fonction utilise un tableau pour stocker les trois nombres et applique la méthode `.sort()` avec une fonction de comparaison `(x, y) => x - y` pour garantir un tri numérique correct.  

**3. Explication du code :**  

```javascript
function troisNombres(a, b, c) {
    // Créer un tableau avec les trois nombres
    const nombres = [a, b, c];

    // Trier le tableau en ordre croissant
    nombres.sort((x, y) => x - y);

    // Retourner les nombres triés
    return nombres;
}

// Exemples d'utilisation
console.log(troisNombres(3, 1, 2));  // [1, 2, 3]
console.log(troisNombres(10, 5, 8)); // [5, 8, 10]
console.log(troisNombres(-1, 0, -5)); // [-5, -1, 0]
console.log(troisNombres(7, 7, 2));  // [2, 7, 7]
```

**4. Résultats attendus :**  
- `troisNombres(3, 1, 2)` → `[1, 2, 3]`  
- `troisNombres(10, 5, 8)` → `[5, 8, 10]`  
- `troisNombres(-1, 0, -5)` → `[-5, -1, 0]`  
- `troisNombres(7, 7, 2)` → `[2, 7, 7]`  

**5. Conclusion :**  
Cette solution est efficace car elle repose sur la méthode de tri intégrée de JavaScript, garantissant une exécution rapide et un code concis. Une amélioration possible serait de gérer les entrées non valides (comme des chaînes de caractères ou des valeurs nulles) pour rendre la fonction plus robuste.

----------------------------------------------------

### Affichage de Motifs en Escaliers en JavaScript  

**1. Objectif de l'exercice :**  
L'objectif est d'afficher un motif triangulaire en utilisant des boucles, où la hauteur du triangle est déterminée par une valeur `n` donnée en entrée.  

**2. Solution proposée :**  
Deux implémentations sont proposées :  
- `triangle1(n)`, qui utilise une boucle `while`.  
- `triangle2(n)`, qui utilise une boucle `for`.  

**3. Explication du code :**  

```javascript
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
```

**4. Résultat attendu (avec `n = 7`) :**  
```
*
**
***
****
*****
******
*******
```
Les deux fonctions produisent le même résultat en utilisant des boucles différentes.  

**5. Conclusion :**  
L'implémentation est simple et efficace grâce à la méthode `.repeat()`, qui permet de générer facilement des lignes de `*`. L'utilisation d'une boucle `while` ou `for` dépend des préférences du programmeur, mais les deux solutions sont valides. Une amélioration possible serait d'ajouter une validation pour s'assurer que `n` est un entier positif.

-----------------------------------------------------
### Vérification d'un Nombre Premier en JavaScript  

**1. Objectif de l'exercice :**  
L'objectif est d'écrire une fonction `estPremier(n)` qui vérifie si un nombre donné est un nombre premier (c'est-à-dire qu'il n'a que deux diviseurs : 1 et lui-même).  

**2. Correction et amélioration du code :**  
Le code initial comporte une erreur :  
- Si `n` est divisible par `i`, il devrait immédiatement retourner `false` et arrêter l'exécution.  
- Actuellement, la boucle continue même après avoir trouvé un diviseur.  

**3. Solution corrigée et améliorée :**  

```javascript
function estPremier(n) {
    if (n < 2) return false; // 0 et 1 ne sont pas premiers

    for (let i = 2; i <= Math.sqrt(n); i++) { // Vérifier jusqu'à √n
        if (n % i === 0) {
            console.log(`${n} n'est pas un nombre premier.`);
            return false; // Arrêter immédiatement si un diviseur est trouvé
        }
    }

    console.log(`${n} est un nombre premier.`);
    return true;
}

// Exemples d'utilisation
estPremier(10);  // "10 n'est pas un nombre premier."
estPremier(7);   // "7 est un nombre premier."
estPremier(1);   // "1 n'est pas un nombre premier."
estPremier(13);  // "13 est un nombre premier."
```

**4. Explication du code :**  
- Si `n < 2`, la fonction retourne immédiatement `false` car 0 et 1 ne sont pas premiers.  
- La boucle vérifie les diviseurs de `n` jusqu'à `√n` (optimisation, car si `n` est divisible par un nombre plus grand que sa racine carrée, il l’est forcément par un plus petit).  
- Si `n` est divisible par un nombre autre que 1 et lui-même, ce n'est pas un nombre premier. La fonction affiche le message et retourne `false`.  
- Si aucun diviseur n'est trouvé, `n` est premier et la fonction retourne `true`.  

**5. Résultats attendus :**  
- `estPremier(10)` → `"10 n'est pas un nombre premier."`  
- `estPremier(7)` → `"7 est un nombre premier."`  
- `estPremier(1)` → `"1 n'est pas un nombre premier."`  
- `estPremier(13)` → `"13 est un nombre premier."`  

**6. Conclusion :**  
Le programme est maintenant correct et optimisé. Il effectue une vérification efficace en arrêtant l’exécution dès qu’un diviseur est trouvé.

-----------------------------------------------------------

### Calcul de la Suite de Fibonacci en JavaScript**  

#### **1. Objectif de l'exercice :**  
L'exercice vise à :  
a) Écrire un programme `Fibo1` qui calcule le nième terme de la suite de Fibonacci.  
b) Écrire un programme `Fibo2` qui trouve le premier terme de la suite dépassant une valeur donnée.  

---

### **2. Solution et explication du code :**  

#### **a) Programme `Fibo1` - Calcul du nième terme de Fibonacci**  
- Utilisation d'une approche itérative pour éviter la récursion et améliorer l'efficacité.  
- Les deux premiers termes sont `F(0) = 0` et `F(1) = 1`.  
- Boucle pour calculer les termes suivants jusqu'à `n`.  

```javascript
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
```

**Exemple d'exécution :**  
Si l'utilisateur entre `n = 7`, le programme affiche :  
```
Le terme Fibonacci F(7) est : 13
```

---

#### **b) Programme `Fibo2` - Trouver le premier terme supérieur à une valeur donnée**  
- Initialisation avec `F(0) = 0` et `F(1) = 1`.  
- Boucle pour générer les termes jusqu'à trouver un terme supérieur à la valeur entrée.  

```javascript
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
```

**Exemple d'exécution :**  
Si l'utilisateur entre `valeur = 20`, le programme affiche :  
```
Le premier terme de Fibonacci supérieur à 20 est F(8) = 21
```

---

### **3. Résumé des résultats attendus :**  

| Entrée `n` | Sortie `Fibo1(n)` |
|------------|------------------|
| 0          | 0                |
| 1          | 1                |
| 7          | 13               |
| 10         | 55               |

| Entrée `valeur` | Sortie `Fibo2` (Rang, Valeur) |
|----------------|----------------------------|
| 20            | `F(8) = 21`                 |
| 100           | `F(12) = 144`               |
| 1000          | `F(17) = 1597`              |

---

### **4. Conclusion :**  
- `Fibo1` permet de calculer efficacement le nième terme en utilisant une boucle.  
- `Fibo2` trouve rapidement le premier terme supérieur à une valeur donnée.  
- La solution est optimisée et évite les recalculs inutiles, contrairement à une approche récursive classique.  
- Une amélioration possible serait d'utiliser la **programmation dynamique** pour mémoriser les résultats et optimiser davantage les calculs pour de grandes valeurs de `n`.

- ---------------------------------------------------------------------------------

### Approximation de la Racine Carrée en JavaScript**  

#### **1. Objectif de l'exercice :**  
Cet exercice vise à implémenter une fonction `Raca1` permettant d’approximer la racine carrée d’un nombre réel positif `A` (compris entre 1 et 100) à l’aide d’une suite récurrente.  

L’algorithme repose sur la **méthode de Newton**, définie par la relation de récurrence :  
\[
u_{n+1} = \frac{1}{2} \left( u_n + \frac{A}{u_n} \right)
\]  
La boucle s’arrête lorsque la condition de précision suivante est remplie :  
\[
| u_n^2 - A | < 10^{-5}
\]  

---

### **2. Solution et explication du code :**  

#### **a) Implémentation de `Raca1`**
- Vérifie si `A` est bien dans l’intervalle `[1,100]`.
- Initialise la valeur `u_n` avec `A / 2`.
- Applique la relation de récurrence dans une boucle `while` jusqu’à atteindre la précision requise.
- Affiche la valeur approchée de `√A`.

```javascript
function Raca1(A) {
    if (A < 1 || A > 100) {
        console.log("Veuillez entrer un nombre A entre 1 et 100.");
        return;
    }

    let u_n = A / 2; // Initialisation de la suite
    const epsilon = 1e-5; // Précision demandée

    while (Math.abs(u_n * u_n - A) >= epsilon) {
        u_n = 0.5 * (u_n + A / u_n); // Application de la formule de récurrence
    }

    console.log(`Valeur approchée de la racine carrée de ${A} = ${u_n.toFixed(5)}`);
}

// Demander à l'utilisateur un nombre A
const A = parseFloat(prompt("Entrez un nombre A entre 1 et 100 :"));
Raca1(A);
```

---

### **3. Résultats attendus :**  

| Entrée `A` | Sortie Approximative `√A` |
|------------|--------------------------|
| 4          | 2.00000                   |
| 9          | 3.00000                   |
| 25         | 5.00000                   |
| 50         | 7.07107                   |
| 99         | 9.94987                   |

---

### **4. Conclusion :**  
- L’algorithme utilise la **méthode de Newton** pour une convergence rapide.  
- La précision `10⁻⁵` garantit une bonne approximation de `√A`.  
- Cette approche est plus efficace qu’un simple `Math.sqrt(A)`, car elle permet un meilleur contrôle de la précision et de l'itération.  
- Une amélioration possible serait d'afficher également le **nombre d’itérations** nécessaires pour converger.
