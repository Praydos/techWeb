
## 1. Permutation de Texte

### Objectif
Créer une page web simple avec deux champs de texte et un bouton. Lorsque l’utilisateur clique sur le bouton, les contenus des deux champs de texte sont **inversés** (permutés).

### Aperçu du Code
- Deux `<input type="text">` pour saisir deux textes différents.
- Un `<button>` qui, au clic, exécute une fonction JavaScript.
- La fonction JavaScript récupère la valeur du premier champ, la stocke dans une variable temporaire, puis copie la valeur du deuxième champ dans le premier, et enfin remet la valeur temporaire dans le deuxième champ.
- ![image](https://github.com/user-attachments/assets/b149577b-3eb8-4d94-8c33-97a8dce3d118)
![image](https://github.com/user-attachments/assets/710e5188-82aa-4c22-85df-497f8d003820)


### Points Clés
1. **HTML** :  
   - `<input>` pour la saisie du texte.  
   - `<button>` avec un `onclick="..."` qui déclenche la permutation.

2. **JavaScript** :  
   - `document.getElementById("text1").value` permet d’accéder au contenu du premier champ.  
   - On utilise une variable temporaire (`temp`) pour stocker la valeur du premier champ.  
   - Ensuite, on remplace la valeur du premier champ par celle du deuxième, et celle du deuxième par `temp`.

3. **CSS (optionnel)** :  
   - Peut être utilisé pour améliorer l’interface (marges, couleurs, alignement, etc.).

### Conclusion
C’est un **exercice d’initiation** pour comprendre :
- Comment récupérer les valeurs dans des champs de formulaire.
- Comment modifier dynamiquement du contenu en JavaScript.

---

## 2. Calculatrice Simple

### Objectif
Développer une calculatrice basique qui réalise les **opérations arithmétiques élémentaires** : addition, soustraction, multiplication et division.

### Aperçu du Code
- Trois champs `<input>` :
  1. `nombre 1` (pour le premier nombre)  
  2. `nombre 2` (pour le deuxième nombre)  
  3. `résultat` (en lecture seule)  
- Quatre `<button>` pour chaque opération : `+`, `-`, `*`, `/`.
- Une fonction JavaScript `calculate(operation)` qui calcule le résultat selon l’opération choisie.
- ![image](https://github.com/user-attachments/assets/3f2a585d-a6f8-45ca-8fce-eb31c465bf0c)


### Points Clés
1. **HTML** :  
   - Les `<input>` de type `number` facilitent la saisie de nombres et évitent les caractères invalides.  
   - Le champ `result` peut être en `readonly` pour que l’utilisateur ne le modifie pas directement.

2. **JavaScript** :  
   - `parseFloat()` convertit la valeur saisie (chaîne de caractères) en nombre à virgule flottante.  
   - Un `switch` (ou `if`) permet de choisir l’opération à réaliser en fonction du paramètre (`+`, `-`, `*`, `/`).  
   - La division par zéro est gérée en affichant un message d’erreur si `num2 === 0`.

3. **Affichage du Résultat** :  
   - Le résultat s’affiche dans le champ `result` après le calcul.  
   - Si les valeurs sont invalides, on affiche un message d’erreur (par exemple « Entrée invalide »).

### Conclusion
Cet exercice introduit la notion de **traitement d’événement** (clic sur un bouton) et la **manipulation des valeurs** dans des champs de formulaire pour effectuer des calculs simples.

---

## 3. Calculateur d’IMC

### Objectif
Développer une **mini-application web** qui calcule l’IMC (Indice de Masse Corporelle) à partir du poids (en kg) et de la taille (en mètres), puis affiche une **interprétation** (maigreur, normal, surpoids, etc.) d’après l’OMS.

### Aperçu du Code
- Deux champs `<input>` pour le **poids** et la **taille**.  
- Un bouton « Calculer ».  
- Un affichage du **résultat** (valeur de l’IMC) et de **l’interprétation**.

### Points Clés
1. **Formule de l’IMC**  
   \[
   IMC = \frac{Poids \, (kg)}{(Taille \, (m))^2}
   \]  
   Le JavaScript récupère la valeur du poids et de la taille, puis effectue ce calcul.

2. **Interprétation selon l’OMS**  
   - `< 18,5` : Insuffisance pondérale (maigreur)  
   - `18,5 à 25` : Corpulence normale  
   - `25 à 30` : Surpoids  
   - `30 à 35` : Obésité modérée  
   - `35 à 40` : Obésité sévère  
   - `> 40` : Obésité morbide  

3. **Vérification des Entrées**  
   - On vérifie que `poids` et `taille` ne sont pas `NaN` et qu’ils sont positifs.  
   - Si non valides, on affiche un message d’erreur.

4. **Affichage**  
   - L’IMC est arrondi avec `toFixed(2)` (ou tout autre précision souhaitée).  
   - On détermine la catégorie de l’utilisateur et on l’affiche (ex. « Surpoids »).
   - ![image](https://github.com/user-attachments/assets/fcc63e2f-47ad-427a-aa0f-4d50fb8b3902)
      ![image](https://github.com/user-attachments/assets/cbdb8115-6afa-404a-9703-c13c469e414e)


### Conclusion
L’exercice montre comment **intégrer une formule mathématique** dans un script, vérifier la cohérence des données et adapter
