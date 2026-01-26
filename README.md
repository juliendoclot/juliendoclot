# Blog Julien Doclot

Blog personnel construit avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com).

## Fonctionnalités

- Design minimaliste et moderne
- Mode sombre automatique (basé sur les préférences système)
- Typographie soignée avec la police Atkinson
- Collections de contenu typées
- Support Markdown et MDX
- Système de tags pour les articles
- Flux RSS
- Sitemap automatique
- Optimisé pour le SEO
- 100/100 Lighthouse performance

## Structure du projet

```text
├── public/
│   ├── fonts/           # Polices personnalisées
│   └── favicon.svg      # Favicon
├── src/
│   ├── assets/          # Images optimisées
│   ├── components/      # Composants Astro
│   ├── content/
│   │   └── blog/        # Articles de blog (Markdown/MDX)
│   ├── layouts/         # Layouts partagés
│   ├── pages/           # Pages du site
│   └── styles/          # Styles CSS globaux
├── astro.config.mjs     # Configuration Astro
├── package.json
└── tsconfig.json
```

## Développement local

### Prérequis

- Node.js 18+
- npm ou pnpm

### Installation

```bash
# Cloner le repository
git clone <votre-repo-url>
cd juliendoclot

# Installer les dépendances
npm install
```

### Commandes

| Commande            | Action                                         |
| :------------------ | :--------------------------------------------- |
| `npm run dev`       | Lance le serveur de développement sur `localhost:4321` |
| `npm run build`     | Compile le site pour la production dans `./dist/` |
| `npm run preview`   | Prévisualise le build localement               |
| `npm run astro ...` | Exécute les commandes CLI Astro                |

## Ajouter un article

1. Créer un nouveau fichier dans `src/content/blog/`
2. Utiliser le format suivant dans le frontmatter :

```yaml
---
title: 'Titre de l article'
description: 'Description courte pour le SEO et les aperçus'
pubDate: 'Jan 01 2024'
heroImage: '../../assets/mon-image.jpg'
tags: ['tag1', 'tag2']
---
```

3. Écrire le contenu en Markdown ou MDX

## Déploiement sur Koyeb

### Configuration

1. Créer un compte sur [Koyeb](https://www.koyeb.com)
2. Connecter votre repository GitHub
3. Configurer le déploiement :

   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Run command**: Laisser vide (site statique)

### Méthode avec Git

```bash
# S'assurer que les changements sont commités
git add .
git commit -m "Deploy to Koyeb"
git push origin main
```

Koyeb détectera automatiquement les changements et redéploiera le site.

### Méthode manuelle

```bash
# Build du site
npm run build

# Le dossier dist/ contient le site statique
# Uploadez-le sur Koyeb via l'interface web
```

### Configuration Koyeb recommandée

Pour un site statique Astro sur Koyeb :

1. **Type de service** : Web Service
2. **Builder** : Buildpack (détection automatique) ou Dockerfile
3. **Instance** : nano (suffisant pour un site statique)
4. **Scaling** : 1 instance

### Variables d'environnement

Aucune variable d'environnement n'est requise pour le build statique.

## Personnalisation

### Modifier les informations du site

Éditez le fichier `src/consts.ts` :

```typescript
export const SITE_TITLE = 'Votre Nom';
export const SITE_DESCRIPTION = 'Votre description';
```

### Modifier l'URL du site

Éditez `astro.config.mjs` et changez la propriété `site` :

```javascript
export default defineConfig({
  site: 'https://votre-domaine.koyeb.app',
  // ...
});
```

### Modifier les réseaux sociaux

Éditez les liens dans `src/components/Footer.astro`.

## Technologies utilisées

- [Astro](https://astro.build) - Framework web
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS
- [MDX](https://mdxjs.com) - Markdown avec JSX
- [TypeScript](https://www.typescriptlang.org) - Typage statique

## Licence

MIT
