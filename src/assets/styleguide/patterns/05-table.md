## Tableau

### Avec en-tête et pied de tableau

Le 1er exemple montre les styles par défaut d'un tableau, le 2e ceux obtenus par l'ajout de la classe `.table` sur l'élément table.

    @example
    p
        strong Styles par défaut&nbsp;:
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

    p
        strong Avec la classe <code>.table</code>
        | &nbsp;(styles configurables via KNACSS)&nbsp;:
    table.table
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
    p
        strong Styles par défaut&nbsp;:
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

    p
        strong Avec la classe <code>.table</code>
        | &nbsp;(styles configurables via KNACSS)&nbsp;:
    table.table
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
