# Les aventures de Jean Claude, le site web

Site web du jeu _Les aventures de Jean Claude_, généré par [Cecil](https://cecil.app).

## Pré-requis

1. PHP 8.1
1. `cecil.phar` : <https://cecil.app/download/>

## Structure du projet

- Paramètres du site : `cecil.yml`
- Pages de contenu : `pages`
- Templates ([Twig](https://twig.symfony.com)) : `layouts`
- Images et feuille de styles : `assets`
- Fichiers copiés tels quels : `static`
- Site web généré et publié : `_site`

## Aperçu local

Exécuter la commande suivante dans un terminal :

```bash
php cecil.phar serve
```

Puis ouvrir un navigateur web à l'adresse <http://localhost:8000>.

## Génération du site

Exécuter la commande suivante dans un terminal :

```bash
php cecil.phar build
```

Puis copier le contenu du dossier `_site` sur le serveur web.

## (re)Génération de la feuille de styles

Le fichier de styles `assets/styles.css` est généré par [Tailwind CSS](https://tailwindcss.com), à partir des fichiers suivants :

1. `tailwind.config.js`
2. `assets/tailwind.css`

Si l’un de ces 2 fichiers est modifié, il est nécessaire de régénérer la feuille de styles :

```bash
npm run css:build
```
