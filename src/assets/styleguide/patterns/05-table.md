## Tableau

### Avec en-tête et pied de tableau

    @example
    table
        thead
            tr
                th(scope='col') Ville
                th(scope='col') Pays
        tfoot
            tr
                td Pied de tableau 1
                td Pied de tableau 2
        tbody
            tr
                td Strasbourg
                td France
            tr
                td Berlin
                td Allemagne

### Avec en-tête de ligne et de colonne

    @example
    table
        thead
            tr
                th
                th(scope="col") Ville
                th(scope="col") Pays
        tbody
            tr
                th(scope="row") Jour 1
                td Strasbourg
                td France
            tr
                th(scope="row") Jour 2
                td Berlin
                td Allemagne
