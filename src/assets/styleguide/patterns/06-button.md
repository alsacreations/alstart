## Éléments cliquables

### Liens ayant le style d'un bouton

La classe CSS `.btn`
peut être appliquée sur l'élément `<a>`
pour le styler visuellement comme les éléments `<button>`
et `<input type="submit">`.  
Les classes `.btn-primary`,
`.btn-secondary`
ou `.btn-tertiary`
peuvent être ajoutées pour le styler comme le serait un bouton de formulaire
ayant l'une de ces classes.

*Note*&nbsp;: ne pas utiliser un lien là où il faudrait utiliser un bouton de formulaire&nbsp;!

    @example
    p Link that looks like a button with style:
        a.btn(href="#") Default
        a.btn.btn-primary(href='#') Primary
        a.btn.btn-secondary(href='#') Secondary
        a.btn.btn-tertiary(href='#') Tertiary

### Boutons avec une icône

La classe CSS
`.icon-`
peut être appliquée sur les éléments suivants&nbsp;: `<i>`.

    @example
    a.btn.btn-primary(href="#")
        i.icon-arrow(aria-hidden="true")
        | Primary
