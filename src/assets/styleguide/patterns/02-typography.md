## Typographie

### Fonts

    @example
    .sg-font-common
        code $font-stack-common
        br
        |   ABCDEFGHIJKLMNOPQRSTUVWXYZ
        br
        |   abcdefghijklmnopqrstuvwxyz
        br
        |   0123456789
    .sg-font-headings
        code $font-stack-headings
        br
        |   ABCDEFGHIJKLMNOPQRSTUVWXYZ
        br
        |   abcdefghijklmnopqrstuvwxyz
        br
        |   0123456789
    .sg-font-monospace
        code $font-stack-monospace
        br
        |   ABCDEFGHIJKLMNOPQRSTUVWXYZ
        br
        |   abcdefghijklmnopqrstuvwxyz
        br
        |   0123456789

### Titres

Niveaux de titre, de `<h1>`
à `<h6>`.

    @example
    h1 Titre de niveau 1
    h2 Titre de niveau 2
    h3 Titre de niveau 3
    h4 Titre de niveau 4
    h5 Titre de niveau 5
    h6 Titre de niveau 6

### Texte

Paragraphe avec des éléments *inline*.

    @example
    p
        | J'avais ainsi appris une seconde chose très importante : C'est que sa
        | planète d'origine était à peine
        em plus grande qu'une maison
        | &nbsp;!

    p
        | Ça ne pouvait pas m'étonner beaucoup. Je savais bien qu'en dehors des
        strong grosses planètes comme la Terre
        | , Jupiter, Mars, Vénus, auxquelles on a donné des noms, il y en a des
        | centaines d'autres qui sont quelquefois si petites qu'on a beaucoup de
        | mal à les apercevoir au télescope.
        | Quand un astronome découvre l'une d'elles, il lui donne pour nom
        | un numéro. Il l'appelle par exemple :
        a(href='#') "l'astéroïde 3251"
        | .
