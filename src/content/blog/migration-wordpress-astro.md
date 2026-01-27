---
title: Pourquoi j'ai migré mon blog de WordPress à Astro
description: "Après plusieurs années sur WordPress, j'ai décidé de tout refaire
  avec Astro. Performance, sécurité, simplicité : je vous explique pourquoi."
pubDate: Jan 26 2025
heroImage: ../../assets/astro-article.png
tags:
  - Tech
---
Bon, il fallait que j'en parle ! Après plusieurs années sur WordPress, j'ai décidé de tout refaire avec Astro. Et franchement, je ne regrette pas.

## Le problème avec WordPress

Ne me faites pas dire ce que je n'ai pas dit : WordPress est une excellente plateforme. C'est grâce à lui que j'ai pu lancer ce blog facilement, sans avoir besoin de coder quoi que ce soit au départ. J'ai pu me concentrer sur l'écriture, tester différents thèmes, ajouter des fonctionnalités avec des plugins... Bref, WordPress m'a permis de démarrer rapidement et c'est ce dont j'avais besoin à l'époque.

Mais au fil du temps, quelques trucs ont commencé à me fatiguer. Ce qui était un avantage au début est devenu une contrainte.

### La lenteur

Entre le thème, les plugins, et la base de données MySQL, mon blog ramait. Je me souviens d'avoir passé un week-end entier à essayer d'optimiser les performances. J'ai installé WP Super Cache, puis W3 Total Cache, puis LiteSpeed Cache. J'ai optimisé les images avec Imagify, minifié le CSS et le JavaScript, activé la compression GZIP...

Et malgré tout ça ? Mon score PageSpeed plafonnait péniblement autour de 60-70. Chaque page devait interroger la base de données, exécuter du PHP, charger une tonne de scripts jQuery dont je n'avais même pas besoin. Pour un simple blog avec une dizaine d'articles, c'était devenu complètement disproportionné. J'avais l'impression de conduire un semi-remorque pour aller chercher le pain.

### La maintenance permanente

WordPress, les plugins, le thème... Il y avait toujours quelque chose à mettre à jour. Chaque semaine, je me connectais au dashboard et je voyais ces petites pastilles rouges : "3 mises à jour disponibles", "5 mises à jour disponibles"...

Et le pire, c'est que parfois une mise à jour cassait tout. Je me souviens d'une fois où j'ai mis à jour Elementor (mon page builder à l'époque) et ça a complètement explosé la mise en page de ma homepage. J'ai dû passer deux heures à tout reconfigurer. Une autre fois, c'est une mise à jour de PHP sur l'hébergeur qui a rendu un plugin incompatible.

Je passais plus de temps à maintenir la plateforme qu'à écrire des articles. Sans parler des sauvegardes à gérer, de la base de données à optimiser régulièrement avec WP-Optimize, des révisions d'articles qui s'accumulaient et gonflaient la base de données...

### La sécurité

Quand tu regardes les logs d'un WordPress, ça fait froid dans le dos. Des centaines de tentatives de connexion par jour, des bots qui cherchent des failles dans les plugins, des attaques par force brute sur `/wp-admin`...

Un jour, j'ai installé Wordfence juste pour voir. En une semaine, il avait bloqué plus de 2000 tentatives d'intrusion. Des IPs du monde entier qui essayaient des combinaisons login/mot de passe, qui scannaient mes plugins à la recherche de vulnérabilités connues, qui tentaient d'exploiter des failles dans xmlrpc.php...

WordPress étant le CMS le plus utilisé au monde (plus de 40% des sites web !), c'est aussi le plus ciblé. Il faut blinder le site, installer des plugins de sécurité, configurer des pare-feux, changer l'URL de connexion, désactiver l'édition de fichiers... Encore de la maintenance. Encore du temps qui ne va pas à l'écriture.

### L'envie de reprendre le contrôle

Et puis il y avait cette envie qui me trottait dans la tête depuis un moment : mettre les mains dans le cambouis. Avec WordPress, tu finis par être dépendant de ton thème, de tes plugins. Tu cliques sur des boutons, tu configures des options dans des menus, mais tu ne touches jamais vraiment au code. C'est une boîte noire.

Je ne suis pas développeur de formation, loin de là. Mais j'avais envie d'apprendre, de comprendre comment ça marche, de bidouiller. Avec l'arrivée de l'IA et des outils comme Claude, c'est devenu possible de coder sans être expert. Je fais ce qu'on appelle du "vibe coding" : j'explique ce que je veux, Claude me propose du code, je teste, j'apprends au passage. C'est une façon de créer qui me plaît énormément.

Avec WordPress, cette approche était frustrante. Le code est complexe, il y a des hooks partout, des conventions spécifiques... Difficile de s'y retrouver. Je voulais quelque chose de plus simple, de plus lisible, où je pourrais expérimenter sans avoir peur de tout casser.

## Pourquoi Astro ?

J'ai découvert Astro un peu par hasard en scrollant sur X. Quelqu'un partageait son nouveau portfolio fait avec Astro et vantait les performances. Curieux, j'ai été voir la doc.

Et j'ai tout de suite accroché. Astro, c'est un framework qui génère des sites statiques ultra-rapides, pensé pour le contenu. Exactement ce dont j'avais besoin pour un blog.

### Zéro base de données

Avec Astro, mes articles sont de simples fichiers Markdown. Tu sais, ce format qu'on utilise pour écrire des README sur GitHub ? C'est ça. Pas de MySQL, pas de requêtes SQL, pas de connexion à gérer, pas de phpMyAdmin à ouvrir en cas de problème.

Tu crées un fichier `.md`, tu écris ton article avec quelques balises de formatage basiques, et c'est tout. C'est exactement comme prendre des notes dans Notion ou Obsidian, sauf que ça devient une page web.

Voilà, c'est aussi simple que ça. Pas besoin d'éditeur WYSIWYG buggé, pas de Gutenberg qui rame, pas de blocs qui se décalent mystérieusement.

### Performance maximale

Le site est pré-généré au moment du build. Concrètement, quand je lance `npm run build`, Astro transforme tous mes fichiers Markdown en pages HTML statiques. C'est fait une fois, et c'est fini.

Quand un visiteur arrive sur mon blog, il reçoit directement du HTML et du CSS. Pas de PHP à exécuter côté serveur, pas de base de données à interroger, pas de JavaScript inutile à télécharger. Le navigateur affiche la page quasi instantanément.

Le résultat ? Des scores Lighthouse à 100/100 sans effort. Je n'ai rien optimisé, je n'ai installé aucun plugin de cache, et pourtant mon site charge en moins d'une seconde. Sur mobile, sur une connexion 3G pourrie, n'importe où. Ça fait plaisir.

### Sécurité par défaut

Pas de PHP, pas de base de données, pas de panneau d'administration exposé sur `/wp-admin` = pas de surface d'attaque. Un site statique, c'est juste des fichiers HTML, CSS et quelques images. Il n'y a littéralement rien à hacker.

Fini Wordfence, fini les alertes de sécurité, fini les tentatives de connexion à bloquer, fini les failles à patcher en urgence. Mon site est aussi sécurisé qu'une page HTML que tu aurais écrite à la main en 1999. Et c'est exactement ce que je voulais.

### Simplicité et contrôle total

Le code Astro est propre, lisible, organisé en composants. Même sans être développeur expert, on peut comprendre ce qui se passe. Un fichier `.astro`, c'est essentiellement du HTML avec quelques variables. Pas de plugins obscurs qui injectent du code dans tous les sens, pas de hooks WordPress incompréhensibles, pas de magie noire.

Et avec Claude à mes côtés, je peux expérimenter sans limite. "Ajoute-moi un mode sombre", "Change le style des cartes d'articles", "Crée un système de tags"... J'explique ce que je veux, on itère ensemble, et j'apprends au fur et à mesure. C'est une façon de coder qui n'existait pas il y a deux ans, et ça change tout.

### Moderne et agréable à utiliser

Astro utilise des concepts modernes qui rendent le développement vraiment plaisant. Les composants `.astro` ressemblent à du HTML enrichi, faciles à comprendre même pour quelqu'un qui n'a jamais touché au framework. Tailwind CSS permet de styler rapidement sans quitter le fichier. Le hot reload recharge la page instantanément quand je modifie quelque chose.

## La migration

Comme je n'avais pas beaucoup d'articles, j'ai décidé de reprendre le blog à zéro avec ce nouveau cms. J'ai donc commencé à coder avec Claude Code et mes quelques idées de mise en page. Ensuite, j'ai ajouté un Decap pour avoir une interface web pour la gestion des articles.

La dernière étape consistait à déployer le tout sur Cloudflare Pages via Github.

## Le résultat

Mon blog est maintenant :

* **Plus rapide** : Les pages se chargent instantanément, score Lighthouse 100/100
* **Plus simple** : Pour écrire un article, j'ouvre VS Code, je crée un fichier Markdown, je push, et c'est en ligne
* **Plus sécurisé** : Rien à maintenir, rien à patcher, rien à surveiller
* **Plus agréable** : Je code, je personnalise, je m'amuse, je ne me bats plus avec des plugins

Est-ce que c'est pour tout le monde ? Non. Si tu veux juste écrire sans jamais toucher au code, WordPress reste un excellent choix. Son éditeur visuel et son écosystème de plugins permettent de faire énormément de choses.

Mais si comme moi tu as envie d'apprendre, de bidouiller, de créer quelque chose de vraiment personnel... Fonce. Avec les outils d'IA comme Claude, tu n'as plus besoin d'être développeur pour te lancer. Tu expliques ce que tu veux, tu testes, tu apprends. C'est du vibe coding, et c'est addictif.

Et si tu as des questions sur la migration ou sur Astro en général, n'hésite pas à me contacter. Je serai content d'en discuter.
