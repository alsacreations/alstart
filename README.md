# Bretzel

> Choucroute, knacks, et picon bière

**Bretzel** *(Bretzel Project Starter)* est une base de départ pour des projets HTML / CSS et JS créée par l'agence Alsacréations.

**Bretzel** est configuré pour fonctionner dans un environnement axé sur les outils Gulp, Sass et [KNACSS](http://knacss.com) (v7). Des connaissances minimales de ces outils sont un pré-requis.

## Fonctionnalités

- CSS / Sass :
  - compilation Scss vers CSS
  - ajout automatiques de préfixes CSS3 ([Autoprefixer](https://github.com/postcss/autoprefixer) configuré via [Browserslist](https://github.com/ai/browserslist))
  - réordonnement des propriétés (csscomb)
  - réindentation du code (beautify)
  - minification (csso), avec sourcemaps (en environnement de prod, voir ci-dessous)
- HTML :
  - possibilité de réaliser des *include* de fichiers avec [gulp-html-extend](https://github.com/FrankFang/gulp-html-extend/), voir `src/home.html`
- images :
  - optimisation des images .png, .jpg, .gif, .svg (imagemin)
- scripts :
  - rassemblements des JS projet et des JS "vendor" dans le même dossier
  - transpilation avec [Babel](https://babeljs.io/) pour profiter des syntaxes EcmaScript récentes
  - concaténation des fichiers (concat) en environnement de prod (voir ci-dessous)
  - minification (uglify) en environnement de prod
- copie automatique des fichiers `favicon.ico`, `.htaccess` et autres fichiers `.txt` présents à la racine
- possibilité de créer automatiquement une archive `.zip` de *build* ou de production
- workflow intelligent : les tâches ne sont exécutées que pour les fichiers modifiés ou ajoutés (HTML, PHP, images, fontes)
- intégration de KNACSS, la feuille de style de départ de tout bon projet
- intégration [Schnaps.it](http://schnaps.it) (template HTML basique)
- actualisation automatique du navigateur (browsersync)
- fichier de styleguide (guide de styles) généré sur demande
- fichiers de documentation des fonctions JavaScript
- fichier `.editorconfig` permettant d'assurer une cohérence dans les conventions d'indentations
- fichier `.sass-lint.yml` de configuration pour outils de Linter `.scss`

## Par où commencer

### Choisissez un distributeur de Bretzels

Récupérez ce repo :

- avec `git clone https://github.com/alsacreations/bretzel`
- ou avec le plugin npm [bretzel-start](https://github.com/alsacreations/bretzel-start) ❤
- ou [en enregistrant le .zip](https://github.com/alsacreations/bretzel/archive/master.zip)

### Prenez une Bretzel

Au sein de votre dossier de projet :

- lancez `npm install` ou `yarn` pour installer les plugins et dépendances nécessaires (notamment KNACSS et jQuery),
- lancez une première fois la tâche `gulp` pour générer le dossier de destination `/dist`.

En production, `npm install --production` n'installera que les dépendances requises et non les dépendances de développement local (`devDependencies`).

### Mangez votre Bretzel

Au choix :

- compilez vos fichiers avec `gulp` pour les tâches de base,
- surveillez les changements de fichiers dans votre projet avec `gulp watch`,
- créez le guide de styles avec  `gulp styleguide`.

## Tâches Gulp

### Tâches principales

- **`gulp`** : tous les fichiers de `/src` sont compilés dans `/dist` et ne sont ni minifiés ni concaténés. Le client peut modifier, améliorer et mettre en prod lui-même. (`gulp` est alias de `gulp build`)
- **`gulp --prod`** : tous les fichiers de `/src` sont compilés dans `/dist` et sont - en plus - concaténés, minifiés, optimisés. Le client utilise tel quel ou doit recompiler lui-même.
- `gulp watch` : surveille styles, html, php (facultatif) et scripts.

### Tâches individuelles

- `gulp css` : compile uniquement les fichiers Sass
- `gulp js`, `gulp html`, `gulp php`, `gulp img`, `gulp fonts` : toi même tu sais
- `gulp styleguide` : création d'un guide de styles
- `gulp doc-md` : génère une documentation des sources JavaScript vers Markdown
- `gulp doc-html` : génère une documentation des sources JavaScript vers HTML
- `gulp clean` : suppression des fichiers inutiles en production
- `gulp zip` et `gulp zip --prod` : tâche `build` ou `prod` puis création d'une archive zip. Ex. `projectName-build-2017-11-22-13h37.zip` ou `projectName-prod-2017-11-22-13h37.zip`

## Gérer les dépendances

Bretzel gère les dépendances directement via npm ou yarn (pas via Bower).

Pour ajouter une dépendance, il suffit de modifier le fichier `package.json` ou d'utiliser les commandes `npm install --save-dev` :

```json
  "dependencies": {
    "jquery": "^3.x",
    "knacss": "7.x",
    "styledown-skins": "drakeh/styledown-skins"
  },
```

Dans cet exemple jQuery est une dépendance npm et styledown-skins de type GitHub.

Vos dépendances JavaScript pourront être listées dans le fichier `gulpfile.js` sous cette forme pour être concaténées aux autres :

```javascript
var vendors = [
  paths.vendors + 'jquery/dist/jquery.min.js',
  paths.vendors + 'swiper/dist/js/swiper.min.js',
  paths.src + paths.scripts.files,
  '!' + paths.src + paths.scripts.styleguideFiles, // exclusion des JS spécifiques au styleguide de la liste construite précédemment
];
```

## .editorconfig

Les  règles d'indentation (espace / tabulation) sont configurées via le fichier `.editorconfig` à la racine du projet.

Pour qu'elles s'appliquent, il suffit généralement de télécharger le plugin "editorconfig" dans votre éditeur.

## CSS / SCSS Lint

Les fichiers Sass (`.scss`) de Bretzel sont rendus corrigés à l'aide d'un "linter" (outil de correction  et bonnes pratiques) dont les règles sont configurées via le fichier `.sass-lint.yml` à la racine du projet.

L'action de correction se fera à l'aide de plugins au sein de votre éditeur HTML, ou bien d'une tâche Gulp. Par exemple, sur l'éditeur Atom, les plugins nécessaires sont [Atom Linter](https://atom.io/packages/linter) et  [Atom Sass Lint](https://atom.io/packages/linter-sass-lint).

Note : les  _warning_ subsistants dans le *linter*, sont connus et éventuellement à corriger selon les projets au cas par cas.

## Architecture Bretzel

Voici comment est architecturé **bretzel** par défaut, mais rien ne vous empêche de modifier cette structure en changeant les variables présentes dans `gulpfile.js` :

![Structure-type de l'arborescence des fichiers de bretzel](https://raw.githubusercontent.com/alsacreations/bretzel/master/src/assets/img/architecture.png)

## Usage avec KNACSS

- Modifiez le fichier `_variables.scss` dans votre dossier `src/assets/css/_config` (c'est une copie modifiée de `./node_modules/knacss/sass/_config/_variables.scss`. Ce dernier n'est pas utlisé car il est écrasé à chaque mise à jour de KNACSS)
- Choisissez les fichiers KNACSS à importer au sein du fichier `src/assets/css/knacss.scss`
- Votre fichier de travail est `styles.scss` et commencera par l'import des 2 fichiers de configuration de KNACSS `_config/_variables` et `_config/_mixins` puis par `@import "knacss";` (ce dernier ne réimporte pas les 2 premiers _partials ; ils y sont commentés), puis suivront vos styles personnalisés.

## Documentation

Bretzel utilise `gulp-documentation` basé sur `http://documentation.js.org/` pour pouvoir générer une documentation au format HTML ou Markdown selon les blocs de commentaires JSDoc placés dans les fichiers JavaScript.

La syntaxe est décrite dans la documentation de documentation `https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md`

Avec l'éditeur Atom, le package `https://atom.io/packages/docblockr` est conseillé.

## Publication sur AWS S3

Pour publier les fichiers compilés vers Amazon Web Services S3 (Simple Storage Service) par exemple pour héberger un site statique, utiliser le module [gulp-awspublish](https://www.npmjs.com/package/gulp-awspublish).

Installation :
```
npm install --save-dev gulp-awspublish
```

Les droits doivent être configurés côté AWS (via IAM) pour donner les capacités d'écriture à un utilisateur doté d'une _access key_ et d'une _secret key_.

Création de la configuration dans le fichier `aws-credentials.json`

```json
{
  "params": {
    "Bucket": "<nom_du_bucket_S3>"
  },
  "accessKeyId": "<aws_access_key>",
  "secretAccessKey": "<aws_secret_key>",
  "region":"<code_region>"
}
```

Le code région est celui donné par la région hébergeant le bucket S3. Par exemple `eu-central-1` pour Francfort.

Lancement de la synchronisation : `gulp s3` (va utiliser tous les fichiers dans `/dist/` par défaut). Il est possible de définir dans quel sous-dossier du bucket envoyer les fichiers, et d'ignorer certains types. Pour ceci modifier `gulpfile.js`.

## Changelog

Voir le [Changelog](CHANGELOG.md)

## Crédits

Projet lancé par [Matthieu Bousendorfer](https://github.com/edenpulse), et tenu à jour par Alsacréations.

GitIgnore Mac OSX Crap : `https://github.com/github/gitignore/blob/master/Global/OSX.gitignore`
