---
title: 'Les bases de JavaScript moderne'
description: 'Découvrez les fonctionnalités essentielles de JavaScript ES6+ pour améliorer votre code.'
pubDate: 'Jul 15 2022'
heroImage: '../../assets/blog-placeholder-4.jpg'
tags: ['Tech']
---

JavaScript a beaucoup évolué ces dernières années. Voici un aperçu des fonctionnalités modernes que tout développeur devrait connaître.

## Déclarations de variables

### let et const

Oubliez `var` ! Utilisez `const` par défaut et `let` quand la réassignation est nécessaire.

```javascript
const PI = 3.14159; // Ne peut pas être réassigné
let compteur = 0; // Peut être réassigné
compteur = 1;
```

## Les fonctions fléchées

Une syntaxe plus concise pour les fonctions.

```javascript
// Fonction classique
function addition(a, b) {
  return a + b;
}

// Fonction fléchée
const addition = (a, b) => a + b;
```

## Déstructuration

Extraire des valeurs d'objets ou de tableaux facilement.

```javascript
const utilisateur = { nom: 'Jean', age: 30 };
const { nom, age } = utilisateur;

const couleurs = ['rouge', 'vert', 'bleu'];
const [premiere, ...reste] = couleurs;
```

## Template literals

Des chaînes de caractères plus lisibles avec interpolation.

```javascript
const nom = 'Marie';
const message = `Bonjour ${nom}, comment allez-vous ?`;
```

## Conclusion

Ces fonctionnalités rendent JavaScript plus agréable à écrire et à lire. Dans un prochain article, nous explorerons les promesses et async/await.
