## Alignements de base

Il existe différentes classes utilitaires intégrées à
[KNACSS](https://github.com/alsacreations/KNACSS/blob/master/doc/02a-layout-alignements.md)
pour gérer les alignements d'éléments.


### Contenus "inline"

Les textes et contenus "inline" sont gérés via les classes `.txtleft`, `.txtright`
et `.txtcenter`
qui agiront sur la propriété CSS `text-align`.

    @example
    .txtleft
        p
            | Texte aligné à gauche.
            br
            code .txtleft
    .txtcenter
        p
            | Texte centré.
            br
            code .txtcenter
    .txtright
        p
            | Texte aligné à droite.
            br
            code .txtright


### Blocs

Les blocs (dont une largeur a été fixée) sont alignés avec les classes `.left`,
`.right`
et `.center`
qui affectent la valeur `auto`
à la propriété `margin`.

    @example
    .left.w50.sg-align-block
        p
            | Bloc aligné à gauche.
            br
            code .left
    .center.w50.sg-align-block
        p
            | Bloc centré.
            br
            code .center
    .right.w50.sg-align-block
        p
            | Bloc aligné à droite.
            br
            code .right


### Flottants

Les flottements sont gérés via les classes `.fl`
(pour `float: left;`), et `.fr`
(pour `float: right;`).

    @example
    .sg-align-float
        .fl
            | Bloc flottant
            code .fl
        p Texte avec un bloc flottant à gauche
    .sg-align-float
        .fr
            | Bloc flottant
            code .fr
        p Texte avec un bloc flottant à droite
