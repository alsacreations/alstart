# Bretzel

> Choucroute, knacks, et picon bière

**Bretzel** *(Bretzel Project Starter)* est une base de départ pour des projets HTML / CSS et JS créée par l'agence Alsacréations.

**Bretzel** est configuré pour fonctionner dans un environnement axé sur les outils Gulp, Sass et [KNACSS](http://knacss.com). Des connaissances minimales de ces outils sont un pré-requis.

## Fonctionnalités

- CSS / Sass :
  - compilation Sass vers CSS
  - ajout automatiques de préfixes CSS3 ([Autoprefixer](https://github.com/postcss/autoprefixer))
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
- intégration [Schnaps.it](http://schnaps.it) (template HTML basique)
- actualisation automatique du navigateur (browsersync)
- fichier de styleguide (guide de styles) généré sur demande
- fichier `.editorconfig` permettant d'assurer une cohérence dans les conventions d'indentations
- fichier `.sass-lint.yml` de configuration pour outils de Linter `.scss`

## Par où commencer ?

### Choisissez un distributeur de Bretzels

En clair, récupérez ce repo :
- grâce au plugin npm [bretzel-start](https://github.com/alsacreations/bretzel-start) ❤
- ou bien [en enregistrant le .zip](https://github.com/alsacreations/bretzel/archive/master.zip)
- ou au pire via `npm install alsacreations/bretzel`

### Prenez une Bretzel

Au sein de votre dossier de projet :
- lancez `npm install`  ou `yarn` pour installer les plugins et dépendances nécessaires (notament KNACSS et jQuery),
- lancez une première fois la tâche `gulp` pour générer le dossier distant `/dist`.

### Mangez votre Bretzel !

- compilez vos fichiers avec `gulp` pour les tâches de base,
- surveillez votre projet avec `gulp watch`,
- créez le style guide avec  `gulp styleguide`.

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
- `gulp zip` et `gulp zip --prod` : tâche `build` ou `prod` puis création d'une archive zip. Ex. `projectName-build-2015-11-22-13h37.zip` ou `projectName-prod-2015-11-22-13h37.zip`


## Gérer les dépendances

Bretzel gère les dépendances directement via npm ou yarn (pas via Bower).

Pour ajouter une dépendance, il suffit de modifier le fichier `package.json` :
```
  "dependencies": {
    "jquery": "^2.2.0", // dépendance npm
    "knacss": "^4.4.4",
    "styledown-skins": "drakeh/styledown-skins" // dépendance de type GitHub
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

## editorconfig

Les  règles d'indentation (espace / tabulation) sont configurées via le fichier `.editorconfig` à la racine du projet.

Pour qu'elles s'appliquent, il suffit généralement de télécharger le plugin "editorconfig" dans votre éditeur.

## CSS / SCSS Lint

Les fichiers Sass (`.scss`) de Bretzel sont rendus corrigés à l'aide d'un "linter" (outil de correction  et bonnes pratiques) dont les règles sont configurées via le fichier `.sass-lint.yml` à la racine du projet.

L'action de correction se fera à l'aide de plugins au sein de votre éditeur HTML, ou bien d'une tâche Gulp. Par exemple, sur l'éditeur Atom, les plugins nécessaires sont [Atom Linter](https://atom.io/packages/linter) et  [Atom Sass Lint](https://atom.io/packages/linter-sass-lint).

Note : les  _warning_ subsistants dans le linter, sont connus et éventuellement à corriger selon les projets au cas par cas. 

## Architecture Bretzel

Voici comment est architecturé **bretzel** par défaut, mais rien ne vous empêche de modifier cette structure en changeant les variables présentes dans `gulpfile.js` :

![Structure-type de l'arborescence des fichiers de bretzel](https://raw.githubusercontent.com/alsacreations/bretzel/master/src/assets/img/architecture.png)

## Usage avec KNACSS

- Créez ou modifiez le fichier `_00-config.scss` dans votre dossier `src/assets/css/`
- N'utilisez **pas** `src/vendor/knacss/scss/_00-config.scss`, car il sera écrasé à chaque mise à jour de KNACSS
- Choisissez les fichiers KNACSS à importer au sein du fichier `knacss.scss`
- Votre fichier de travail est `styles.scss` et commencera par : `@import "knacss";`, puis suivront vos styles perso.

## Crédits

Projet lancé par [Matthieu Bousendorfer](https://github.com/edenpulse), et tenu à jour par Alsacréations.

GitIgnore Mac OSX Crap : https://github.com/github/gitignore/blob/master/Global/OSX.gitignore

