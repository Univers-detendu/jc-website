# Les aventures de Jean Claude, le site web

Site web du jeu _Les aventures de Jean Claude_, généré par [Cecil](https://cecil.app).

## Pré-requis

1. PHP 8.1
1. `cecil.phar` : <https://cecil.app/download/>

## Gestion du contenu

- Paramétrage du site : `cecil.yml`
- Home page : `pages/index.md`

## Aperçu local

```bash
php cecil.phar serve
```

Puis ouvrir un navigateur web à l'adresse <http://localhost:8000>.

## Génération du site

```bash
php cecil.phar build
```

Puis copier le contenu du dossier `_site` sur le serveur web.

## (re)Création de la feuille de styles

Le fichier de style `assets/styles.css` est généré par Tailwind CSS, à partir des fichiers suivants :

1. `tailwind.config.js`
2. `tailwind.css`

```bash
npm install
npx tailwindcss -i ./tailwind.css -o ./assets/css/styles.css
```
