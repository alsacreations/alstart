# Changelog de alsacreations/bretzel

## 5.0.0 (22 janvier 2019)

- passage à Gulp 4.x
- réactualisation des versions des packages
- optimisation de quelques sous-tâches
- mise à jour du Readme

## 4.0.1 (2 mars 2018)

- ajout de ce changelog

## 4.0.0 (1er ou 2 mars 2018)

### CSS

- importe et utilise KNACSS v7 (ses variables, mixins, breakpoints). Version 7.0.3 très précisément.
- ajout de Browserslist pour configurer finement Autoprefixer
- Liens : soulignés quand ils sont dans du contenu (parent ayant la classe .content)
- Tableaux : ajout d'exemples
- Boutons : correspondance entre .btn--primary de KNACSS v7 et .btn-primary de Bretzel (on peut donc continuer à utiliser la nomenclature .btn-primary)

### Styleguide

- améliorations couleurs, code HTML de la section formulaire;, longue citation
- grille(s) de KNACSS commentée et renvoi vers leurs 2 docs (l'actuelle utilisant Grid layout et l'ancienne de KNACSS v6 utilisant Flexbox)
- déplacement section boutons avec éléments cliquables

### Outillage

- amélioration syntaxe des tâches watch
- meilleure cohérence de l'environnement `--prod` pour les CSS du projet d'une part et du styleguide d'autre part (renommage en .min ou pas, minifié ou pas, sourcemaps ou pas)


## 3.3.0

### Styleguide

- génération / compilation indépendante des autres tâches
- title de la page configurable (nom du client par ex.)
- amélioration présentation couleurs
- présentation "en tableau" des icônes (commenté)
- Scss : _partials communs à tous les projets prêts à être décommentés
- utilisation de Jade/Pug et MarkDown plutôt que HTML (redite de 3.2.0 ou suite et fin ?)

### Pages HTML

- page-type avec @@include html-extend et includes HTML prêts à l'emploi


## 3.2.0 (et 3.1.4 sans tag de la branche styleguide mergée sur master)

### CSS :

- Autoprefixer ajoute les préfixes pour Grid Layout
- KNACSS v6.1.1

### JS :

- ajout de Babel
- Babel optionnel
- ajout de gulp-documentation

### Styleguide :

- meta viewport
- design du styleguide
- génération des couleurs dans le styleguide
- utilisation de Jade/Pug et MarkDown plutôt que HTML

### Outillage :

- bump versions packages
- modification .editorconfig (forcer un retour chariot final) et documentation
- ajout config sass-lint.yml et documentation
- copie des images présentes dans des sous-répertoires

### Documentation

- suppression changelog des versions 2.0.0 à 3.0.0 (voir commit 3422cbe)

## 3.1.3

- améliorations du .gitignore


## 3.0.x – 3.1.2

Pas de changelog


## v3.0.0 (1er mars 2016)

- passage de LESS vers Sass


## v2.1.2 (28 janvier 2016)

- suppression de unCSS et remplacement de `npm run setup` par `npm install` dans la procédure d'installation.


### v2.1.1 (12 janvier 2016)

- version "publique" avec code plus présentable, configuration plus cohérente et maintenable
- tâches principales rassemblées en une seule (`build`) avec un argument optionnel (`--prod`) pour la production
- suppression de Critical
- lanceur de projet via `npm run setup`


## v2.0.1 (13 décembre 2015)

- ajout de gulp-changed pour ne traiter que les fichiers modifiés ou ajoutés


## v2.0.0 (11 décembre 2015)

- renommage de "alstart" en "bretzel"
- refonte complète du workflow (basé à présent sur une tâche de "build" et une tâche de "prod" différentes)
