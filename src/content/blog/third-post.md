---
title: 'Introduction à Astro'
description: 'Pourquoi Astro est le framework idéal pour créer des sites web rapides et performants.'
pubDate: 'Jul 22 2022'
heroImage: '../../assets/blog-placeholder-2.jpg'
tags: ['Tech']
---

Astro est un framework web moderne qui permet de créer des sites ultra-rapides. Découvrons ensemble ses avantages.

## Qu'est-ce qu'Astro ?

Astro est un framework "content-first" qui génère des sites statiques par défaut, avec la possibilité d'ajouter de l'interactivité là où c'est nécessaire.

## Les points forts

### 1. Zero JavaScript par défaut

Astro n'envoie aucun JavaScript au navigateur sauf si vous le demandez explicitement. Résultat : des pages ultra-rapides.

### 2. Agnostique aux frameworks

Vous pouvez utiliser React, Vue, Svelte, ou même rien du tout. Astro s'adapte à vos préférences.

```astro
---
// Dans un composant Astro, vous pouvez importer n'importe quel framework
import MonComposantReact from './MonComposant.jsx';
import MonComposantVue from './MonComposant.vue';
---

<MonComposantReact client:load />
<MonComposantVue client:visible />
```

### 3. Collections de contenu

Gérez facilement votre contenu Markdown/MDX avec un système de typage intégré.

```typescript
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});
```

## Conclusion

Astro est un excellent choix pour les blogs, les sites de documentation, et tout projet où le contenu est roi. Ce blog en est la preuve !
