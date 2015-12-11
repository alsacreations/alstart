# Bretzel

> Choucroute, knacks, et picon bière

**Bretzel** est une base de départ pour les projets de l'agence Alsacréations.

**Bretzel** est configuré pour fonctionner dans un environnement axé sur les outils NPM, Gulp, LESS et KNACSS.

## Fonctionnalités
- HTML5 Boilerplate .htaccess
- Bower
- Gulpfile pour LESS (building - autoprefix - minify), JavaScript (Concat & Uglify), Fontes, Images (optimisation), etc.
- Usage de KNACSS
- Template HTML basique de Schnaps.it
- SourceMaps généré sur demande

## Par où commencer
1. (créer le repo sur gitlab)
2. récupérer ce repo :
  - [en enregistrant le .zip](https://github.com/alsacreations/bretzel/archive/master.zip)
  - ou via `npm install alsacreations/bretzel`
  - ou grâce au plugin npm [create-project](https://www.npmjs.com/package/create-project) ❤
3. lancer `npm install` (ou `npm update`)
4. lancer `bower update`
5. lancer `gulp` pour les tâches de base, ou `gulp watch` pour surveiller les modifications


## Tâches Gulp
- `gulp styles` : compile uniquement les fichiers LESS
- `gulp scripts`, `gulp images`, `gulp fonts` : toi même tu sais
- `gulp all` : exécute toutes les tâches (styles, scripts, images, fontes)
- `gulp` : alias de `gulp all`
- `gulp watch` : surveille styles et scripts

## Architecture Bretzel

Voici comment est architecturé **bretzel** par défaut :

![structure-type bretzel](https://raw.githubusercontent.com/alsacreations/bretzel/master/src/assets/img/architecture.png)

## Usage avec KNACSS :
- Créez ou modifiez le fichier `_00-config.less` dans votre dossier `src/assets/css/`
- N'utilisez **pas** `src/vendor/knacss/less/_00-config.less`, car il sera écrasé à chaque misé à jour de KNACSS
- Choisissez les fichiers KNACSS à importer au sein du fichier `knacss.less`
- Votre fichier de travail est `styles.less` et commencera par : `@import "knacss";`, puis suivront vos styles perso.


## Crédits :

Projet lancé par [Matthieu Bousendorfer](https://github.com/edenpulse), et tenu à jour par Alsacréations.

GitIgnore Mac OSX Crap : https://github.com/github/gitignore/blob/master/Global/OSX.gitignore

## Changelog :

### v2 (11/12/2015)

- renommage de "alstart" en "bretzel"
- refonte complète du workflow (basé à présent sur une tâche de "build" et une tâche de "prod" différentes)
