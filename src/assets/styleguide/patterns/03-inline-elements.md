## Éléments inline

### A (anchor)

L'élément `<a>`
définit un hyperlien, une cible de destination nommée pour un hyperlien, ou les deux à la fois.

    @example
    p
        | C'est que sa planète d'origine était à peine
        a(href='#') plus grande qu'une maison
        | .

### Strong

L'élément `<strong>`
est utilisé pour donner de l'importance à un texte.

    @example
    p
        | C'est que sa planète d'origine était à peine
        strong plus grande qu'une maison
        | .

### Em (emphase)

L'élément `<em>`
sert à marquer un texte sur lequel on veut insister.

    @example
    p
        | C'est que
        em sa planète d'origine
        | &nbsp;était à peine plus grande qu'une maison.

### Small

L'élément `<small>`
permet de représenter du texte avec une police dont la taille est plus petite
que celle utilisée pour le texte environnant.

    @example
    p
        | C'est que
        em sa planète d'origine
        | &nbsp;était à peine plus grande qu'une maison.


### S (Strikethrough)

L'élément `<s>`
permet d'afficher du texte barré au sens où celui-ci n'est plus d'actualité ou
n'est plus pertinent.

    @example
    p
        | C'est que
        s sa nouvelle planète
        | &nbsp;sa planète d'origine était à peine plus grande qu'une maison.


### Mark

L'élément `<mark>`
représente du texte surligné, c'est-à-dire du texte marqué afin d'être utilisé
en tant que source étant donné sa pertinence dans un contexte en particulier.

    @example
    p
        | C'est que sa
        mark planète
        | &nbsp;d'origine était à peine plus grande qu'une maison.


### Abbr

L'élément `<abbr>`
représente une abréviation et permet de façon optionnelle d'en fournir une
description complète. S'il est présent, l'attribut title doit contenir cette
même description complète et rien d'autre. S'il y a plusieurs occurences de la
même abréviation dans une page, l'attribut title ne doit être présent que sur la
1ère occurence.

    @example
    p
        | Ce document a été conçu avec du code
        abbr(title="HyperText Markup Language") HTML
        | . Voir la définition de
        abbr HTML
        | &nbsp;sur
        a(href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language") Wikipedia
        | .
