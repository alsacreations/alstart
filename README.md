# Bretzel

> Choucroute, knacks, et picon bière

**Bretzel** *(Bretzel Project Starter)* est une base de départ pour des projets HTML / CSS et JS créée par l'agence Alsacréations.

**Bretzel** est configuré pour fonctionner dans un environnement axé sur les outils Gulp, Sass et KNACSS. Des connaissances minimales de ces outils sont un pré-requis.

## Fonctionnalités
- CSS / Sass :
  - compilation Sass vers CSS,
  - ajout automatiques de préfixes CSS3 (autoprefixer)
  - réordonnement des propriétés (csscomb)
  - réindentation du code (beautify)
  - minification (csso), avec sourcemaps
- HTML :
  - possibilité de réaliser des *include* de fichiers (html-extend)
- images :
  - optimisation des images .png, .jpg, .gif, .svg (imagemin)
- scripts :
  - rassemblements des JS projet et des JS "vendor" dans le même dossier
  - concaténation des fichiers (concat)
  - minification (uglify)
- copie automatique des fichiers `favicon.ico`, `.htaccess` et autres fichiers `.txt` présents à la racine
- possibilité de créer automatiquement une archive `.zip` de build ou de production
- workflow intelligent : les tâches ne sont exécutées que pour les fichiers modifiés ou ajoutés (HTML, PHP, images, fontes)
- intégration de KNACSS, la feuille de style de départ de tout bon projet
- intégration Schnaps.it (template HTML basique)
- actualisation automatique du navigateur (browsersync)
- fichier de styleguide (guide de styles) généré sur demande
- fichier `.editorconfig` permettant d'assurer une cohérence dans les conventions d'indentations

## Par où commencer ?

### Choisissez un distributeur de Bretzels

En clair, récupérez ce repo :
- grâce au plugin npm [bretzel-start](https://github.com/alsacreations/bretzel-start) ❤
- ou bien [en enregistrant le .zip](https://github.com/alsacreations/bretzel/archive/master.zip)
- ou au pire via `npm install alsacreations/bretzel`

### Prenez une Bretzel

Au sein de votre dossier de projet :
- lancez `npm install` pour installer les plugins nécessaires, les dépendances et lancer une première fois Gulp

### Mangez votre Bretzel !

Compilez vos fichiers avec `gulp` pour les tâches de base, ou `gulp watch` pour surveiller les modifications.


## Tâches Gulp

### Tâches principales

- **`gulp`** : tous les fichiers de `/src` sont compilés dans `/dist` et ne sont ni minifiés ni concaténés. Le client peut modifier, améliorer et mettre en prod lui-même. (`gulp` est alias de `gulp build`)
- **`gulp --prod`** : tous les fichiers de `/src` sont compilés dans `/dist` et sont - en plus - concaténés, minifiés, optimisés. Le client utilise tel quel ou doit recompiler lui-même.
- `gulp watch` : surveille styles, html, php et scripts

### Tâches individuelles
- `gulp css` : compile uniquement les fichiers Sass
- `gulp js`, `gulp html`, `gulp php`, `gulp img`, `gulp fonts` : toi même tu sais
- `gulp styleguide` : création d'un guide de styles
- `gulp clean` : suppression des fichiers inutiles en production
- `guilp zip` et `guilp zip --prod` : tâche `build` ou `prod` puis création d'une archive zip. Ex. `projectName-build-2015-11-22-13h37.zip` ou `projectName-prod-2015-11-22-13h37.zip`

### Comparatif des tâches

| fichiers source  | fichiers destination <br>(tâche build)  | fichiers destination <br>(tâche prod)  | tâche watch  |
|---|---|---|---|
| src/assets/css/\*.scss<br>src/assets/css/includes/\*.scss  | dist/assets/css/styles.css <br>*(autoprefixer, csscomb, beautify)*  | dist/assets/css/styles.min.css <br>dist/assets/css/styles.css <br>*("build" + csso-minify)*<br>*(option: unCSS si activé)*   | tâche "css" exécutée si modification \*.scss<br>*(+ Browsersync)*  |
| src/assets/\*.html<br>src/assets/includes/\*.html  | dist/assets/\*.html<br>dist/assets/includes/\*.html<br>*(htmlExtend = include de partiels si présents)*  | dist/assets/\*.html<br>dist/assets/includes/\*.html<br>*(option : Critical si activé)*  | tâche "html+php" exécutée si modification \*.html<br>*(+ Browsersync)*  |
| src/assets/\*.php<br>src/assets/includes/\*.php  | dist/assets/\*.php<br>dist/assets/includes/\*.php<br>*(simple copie)*  | dist/assets/\*.php<br>dist/assets/includes/\*.php<br>*(simple copie)*  | tâche "html+php" exécutée si modification \*.php<br>*(+ Browsersync)* |
| src/assets/img/\*<br>src/assets/css/img/\*  | dist/assets/img/\*<br>dist/assets/css/img/\* <br>*(imagemin)*  | dist/assets/img/\*<br>dist/assets/css/img/\* <br>*(imagemin)*  | pas de watch |
| src/assets/js/\*.js<br>src/vendor/.../\*.js  | dist/assets/js/\*.js<br>*(fichiers JS et JS vendor rassemblés, non concaténés)*  | dist/assets/js/global.min.js<br>*(concat, uglify)*  | tâche "js" exécutée si modification \*.js<br>*(+ Browsersync)* |
| src/assets/css/fonts/\*  | dist/assets/css/fonts/\* <br>*(simple copie)*  | dist/assets/css/fonts/\* <br>*(simple copie)*   | pas de watch  |


## Gérer les dépendances

Bretzel gère les dépendances directement via npm (pas via Bower).

Pour ajouter une dépendance, il suffit de modifier le fichier `package.json` :
```
  "dependencies": {
    "jquery": "^2.2.0", // dépendance npm
    "knacss": "^4.4.4",
    "styledown-skins": "drakeh/styledown-skins" // dépendance de type github
  },
```

Vos dépendances JavaScript devront être listées dans le fichier `gulpfile.js` sous cette forme : 
```
var vendors = [
  paths.vendors + 'jquery/dist/jquery.min.js',
  paths.vendors + 'styledown-skins/dist/Default/styleguide.min.js',
  paths.vendors + 'swiper/dist/js/swiper.min.js',
  paths.src + paths.scripts.files,
];
```

## Architecture Bretzel

Voici comment est architecturé **bretzel** par défaut, mais rien ne vous empêche de modifier cette structure en changeant les variables présentes dans `gulpfile.js` :

![structure-type bretzel](https://raw.githubusercontent.com/alsacreations/bretzel/master/src/assets/img/architecture.png)

## Usage avec KNACSS :
- Créez ou modifiez le fichier `_00-config.scss` dans votre dossier `src/assets/css/`
- N'utilisez **pas** `src/vendor/knacss/scss/_00-config.scss`, car il sera écrasé à chaque misé à jour de KNACSS
- Choisissez les fichiers KNACSS à importer au sein du fichier `knacss.scss`
- Votre fichier de travail est `styles.scss` et commencera par : `@import "knacss";`, puis suivront vos styles perso.


## Crédits :

Projet lancé par [Matthieu Bousendorfer](https://github.com/edenpulse), et tenu à jour par Alsacréations.

GitIgnore Mac OSX Crap : https://github.com/github/gitignore/blob/master/Global/OSX.gitignore

## Changelog :

### v3.0.0 (1er mars 2016)

- passage de LESS vers Sass

### v2.1.2 (28 janvier 2016)

- suppression de unCSS et remplacement de `npm run setup` par `npm install` dans la procédure d'installation.

### v2.1.1 (12 janvier 2016)

- version "publique" avec code plus présentable, configuration plus cohérente et maintenable
- tâches principales rassemblées en une seule (`build`) avec un argument optionnel (`--prod`) pour la production
- suppression de Critical 
- lanceur de projet via `npm run setup`

### v2.0.1 (13 décembre 2015)

- ajout de gulp-changed pour ne traiter que les fichiers modifiés ou ajoutés

### v2.0.0 (11 décembre 2015)

- renommage de "alstart" en "bretzel"
- refonte complète du workflow (basé à présent sur une tâche de "build" et une tâche de "prod" différentes)
