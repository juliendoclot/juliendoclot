---
title: 'Guide de style Markdown'
description: 'Exemples de syntaxe Markdown de base pour écrire du contenu dans Astro.'
pubDate: 'Jun 19 2024'
heroImage: '../../assets/blog-placeholder-1.jpg'
tags: ['Tech']
---

Voici un échantillon de la syntaxe Markdown de base que vous pouvez utiliser lors de l'écriture de contenu dans Astro.

## Titres

Les éléments HTML `<h1>` à `<h6>` représentent six niveaux de titres de section. `<h1>` est le niveau le plus élevé tandis que `<h6>` est le plus bas.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraphe

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa.

## Images

### Syntaxe

```markdown
![Texte alternatif](./chemin/vers/image)
```

### Résultat

![blog placeholder](../../assets/blog-placeholder-about.jpg)

## Citations

L'élément blockquote représente du contenu cité d'une autre source.

### Citation simple

> Ceci est une citation.
> **Notez** que vous pouvez utiliser la _syntaxe Markdown_ à l'intérieur.

### Citation avec attribution

> Ne communiquez pas en partageant la mémoire, partagez la mémoire en communicant.<br>
> — <cite>Rob Pike</cite>

## Tableaux

| Italique  | Gras     | Code   |
| --------- | -------- | ------ |
| _italique_ | **gras** | `code` |

## Blocs de code

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Document HTML5</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Types de listes

### Liste ordonnée

1. Premier élément
2. Deuxième élément
3. Troisième élément

### Liste non ordonnée

- Élément de liste
- Un autre élément
- Et encore un autre

### Liste imbriquée

- Fruits
  - Pomme
  - Orange
  - Banane
- Produits laitiers
  - Lait
  - Fromage

## Autres éléments

<abbr title="Graphics Interchange Format">GIF</abbr> est un format d'image bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Appuyez sur <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Suppr</kbd> pour terminer la session.

La plupart des <mark>salamandres</mark> sont nocturnes et chassent les insectes, les vers et d'autres petites créatures.
