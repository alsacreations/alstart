## Autres éléments HTML

### Citation

Bloc de citation avec l'élément `<blockquote>`.

    @example
    blockquote
        | Le petit prince traversa le désert et ne rencontra qu'une fleur.
        | Une fleur à trois pétales, une fleur de rien du tout…
        br
        |   - Bonjour, dit le prince.
        br
        |   - Bonjour, dit la fleur.
        br
        |   - Où sont les hommes ? demanda poliment le petit prince;


### Adresse

L'élément `<address>`
permet de fournir une information de contact.

    @example
    address
        | Han Solo
        br
        | 1337 avenue des étoiles
        br
        | Planète Corellia
        br
        a(href='#') www.chewbaccaisthebest.com

### Figure

L'élément `<figure>`
représente un contenu indépendant, habituellement accompagné d'une légende grâce
à l'élément `<figcaption>`.

    @example
    figure
        img(alt="" height="200" width="200" src="./assets/img/hello.jpg")
        figcaption Une légende pour cette magnifique photo

## Listes

### Liste non ordonnée

Exemple d'une liste non ordonnée avec l'élément `<ul>`

    @example
    ul.content-list-bullet
        li Sur la planète du petit prince
        li
            | il y avait comme sur toutes les planètes
            ul
                li de bonnes herbes et de mauvaises herbes
                li
                    | Par conséquent de bonnes graines de bonnes herbes
                    ul
                        li et de mauvaises graines de mauvaises herbes
                        li Mais les graines sont invisibles
        li Elles dorment dans le secret
        li de la terre jusqu'à ce qu'il prenne fantaisie


### Liste ordonnée

Exemple d'une liste ordonnée avec l'élément `<ol>`

    @example
    ol.content-list-bullet
        li Sur la planète du petit prince
        li
            | il y avait comme sur toutes les planètes
            ol
                li de bonnes herbes et de mauvaises herbes
                li
                    | Par conséquent de bonnes graines de bonnes herbes
                    ol
                        li et de mauvaises graines de mauvaises herbes
                        li Mais les graines sont invisibles
        li Elles dorment dans le secret
        li de la terre jusqu'à ce qu'il prenne fantaisie
