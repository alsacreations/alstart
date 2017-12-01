## Boutons et éléments cliquables

### Boutons de formulaire

Boutons de validation d'un formulaire&nbsp;: `<button type="submit">`,
`<input type="submit">`.  
Les classes CSS `.btn-primary`, `.btn-secondary` ou `.btn-tertiary`
peuvent être appliquées pour styler ces boutons de formulaire.

    @example
    p
        span.inbl.w10 Default:
        button(type='submit') Valider
        input(type='submit', value='Valider')
    p
        span.inbl.w10 Primary:
        button.btn-primary(type='submit') Valider
        input.btn-primary(type='submit', value='Valider')
    p
        span.inbl.w10 Secondary:
        button.btn-secondary(type='submit') Valider
        input.btn-secondary(type='submit', value='Valider')
    p
        span.inbl.w10 Tertiary:
        button.btn-tertiary(type='submit') Valider
        input.btn-tertiary(type='submit', value='Valider')


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
En général un lien mène quelque part tandis qu'un bouton permet de réaliser une action. Indice&nbsp;: un lien
avec pour attribut `href="#"`
ou `onclick="nope()"`
ou `href="javascript:nope()"`
devrait probablement être remplacé par un `button` de type button ou submit.

    @example
    p Link that looks like a button with style:
        a.btn(href="#") Default
        a.btn.btn-primary(href='#') Primary
        a.btn.btn-secondary(href='#') Secondary
        a.btn.btn-tertiary(href='#') Tertiary


### Boutons avec une icône

La classe CSS
`.icon-nameofanicon`
peut être appliquée sur les éléments suivants&nbsp;: `<i>`, `<span>` en veillant à ajouter l'attribut `aria-hidden="true"`
pour être certain que cet élément ne soit pas lu par les lecteurs d'écran et en veillant également à ce que l'information
apportée par l'icône soit &ndash; si nécessaire &ndash; donnée par un autre moyen (par exemple texte masqué hors *viewport*).

    @example
    a.btn-primary(href="#")
        i.icon-arrow(aria-hidden="true")
        | Primary
