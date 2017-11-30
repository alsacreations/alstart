## Grilles

Le système de grille provient de [KNACSS / Grillade](http://knacss.com/grillade/)
et utilise _CSS3 Flexbox_.

### Grille simple, monoligne

Appliquez simplement la classe `.grid`
sur un conteneur pour obtenir une grille mono-ligne.

Les enfants, quels qu'ils soient et quel que soit leur nombre, s'afficheront de
manière équitable les uns à côté des autres

**NOTE :  dans tous les codes suivants, la classe `.sg-grid` n'est utilisée que
pour ce styleguide, elles sont inutiles en production.**

    @example
    .sg-grid.grid
        div je suis un div, sans class
        div hey moi aussi
        aside moi je suis un aside

### La même avec gouttières

L'ajout de la classe `.has-gutter`
crée un espace entre les enfants.
Cet espace est configurable dans la version `.scss`
de Grillade.
La valeur par défaut de la gouttière est `1rem`
mais il est parfaitement possible de la modifier en optant pour la valeur et
l'unité qui vous siéra (pixel, em, rem, %).

    @example
    .sg-grid.grid.has-gutter
        div je suis un div, sans class
        div hey moi aussi
        aside moi je suis un aside

La taille de la gouttière est configurable à l'aide de classes additionnelles :
`.has-gutter-l`
(gouttière x2)
ou `.has-gutter-xl`
(gouttière x4).

    @example
    .sg-grid.grid.has-gutter-l
        div je suis un div, sans class
        div hey moi aussi
        aside moi je suis un aside

    @example
    .sg-grid.grid.has-gutter-xl
        div je suis un div, sans class
        div hey moi aussi
        aside moi je suis un aside

### Dimensionner les enfants

Il est possible, en option, de dimensionner chaque enfant par rapport à l'espace
contenu au sein du parent, grâce aux classes `.one-half`, `.one-third`,
`.one-quarter`, `.one-fifth`, `.two-thirds`, `.three-quarters`, `.one-sixth`,
`.five-sixths`
ou `.full`.

    @example
    .sg-grid.grid
        .one-fifth .one-fifth
        div lorem ipsum
        div lorem ipsum

Cela fonctionne également avec l'indication de gouttière `.has-gutter`.

    @example
    .sg-grid.grid.has-gutter
        .one-fifth .one-fifth
        div lorem ipsum
        .one-fifth .one-fifth

### Une grille multi-lignes

À partir de l'objet `.grid`, il suffit d'ajouter un suffixe -N (par exemple -3)
pour passer en **mode multi-lignes**. Les valeurs du suffixe, et donc le nombre
de colonnes peuvent aller de 2 à 12.

    @example
    .sg-grid.grid-3
        each i in new Array(5)
            div lorem

Cela fonctionne également avec l'indication de gouttière `.has-gutter`.

    @example
    .sg-grid.grid-3.has-gutter
        each i in new Array(5)
            div lorem

Cela fonctionne également avec des enfants dimensionnés explicitement.

    @example
    .sg-grid.grid-3.has-gutter
        .one-half .one-half
        .one-half .one-half
        .one-third .one-third
        .two-thirds .two-thirds
        .one-quarter .one-quarter
        .three-quarters .three-quarters


### Les offsets (pull et push)

Ajoutez les classes `.pull`
ou `.push`
pour pousser un enfant vers sa droite ou sa gauche.

    @example
    .sg-grid.grid-5
        div lorem
        div lorem
        .push .push
        div lorem

### Réordonner les éléments

Les classes `.item-first`
et `.item-last`
servent à réordonner visuellement les éléments.

    @example
    .sg-grid.grid-3
        div lorem
        div lorem
        .item-first .item-first


### Inverser la grille

Il est possible d'inverser totalement le sens de lecture de la grille grâce au
suffixe `--reverse`.

    @example
    .sg-grid.grid-3--reverse
        div premier
        div deuxième
        div troisième

### Taille d'écran intermédiaire

Vous pouvez indiquer le nombre de colonnes souhaitées lorsque la taille d'écran
est intermédiaire (entre *tiny* et *small*, soit entre 545px et 768px par défaut)
à l'aide d'un suffixe `-small-N`
(avec N entre 1 et 4).

Par exemple, un conteneur `.grid-3-small-2`
disposera de 1 colonne en mobile (cas par défaut), puis 2 colonnes en écran
intermédiaire, puis 3 colonnes sur grand écran.

    @example
    .sg-grid.grid-3-small-2
        each i in new Array(3)
            div lorem

Cela fonctionne avec des gouttières (classe `.has-gutter`) ainsi qu'avec des
dimensions explicites sur les enfants.

    @example
    .sg-grid.grid-3-small-2.has-gutter
        each i in new Array(3)
            div lorem

### Votre grille avec des mixins Sass

Le préprocesseur Sass (version `.scss`) permet d'étendre les possibilités de
Grillade, voire de concevoir votre propre grille.
Pour commencer, il est très facilement possible de modifier les variables de
taille de gouttière (`$grid-gutters`).

Vous pouvez également concevoir vos propres colonnes.
Le mixin suivant, appliqué à votre classe `.grid-perso`
construira une grille de 4 colonnes sans gouttière&nbsp;:
`.grid-perso { @include grid(4, 0); }`

Avec gouttière personnalisée, cela pourrait donner&nbsp;:
`.grid-perso { @include grid(4, 1rem); }`
