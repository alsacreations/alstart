## Formulaires

### Champs
La classe CSS `.form-txt`
peut s'appliquer sur les champs texte de type&nbsp;: `text`, `password`,
`datetime-local`, `date`, `month`, `time`, `week`, `number`, `email`, `url`,
`search`, `tel`
et `color`.

    @example
    p Les champs marqués d'un * sont obligatoires

    p.form-item
        label(for="a0") Champ texte
        input#a0.form-txt(type="text")

    p.form-item
        label(for='a1')
            | Champ texte (placeholder)
            span.form-required(title='Champs obligatoire') *
        input#a1.form-txt(type='text', placeholder='dessine-moi un mouton', required='')

    p.form-item
        label(for='a2')
            | Champ texte (value)
            span.form-required(title='Champs obligatoire') *
        input#a2.form-txt(type='text', value="je t'ai donné un tout petit mouton", required='')

    p.form-item
        label(for='a2-2') Champ texte (disabled)
        input#a2-2.form-txt(type='text', disabled)

    p.form-item
        label(for='a2-3') Champ de type date
        input#a2-3.form-txt(type='date')

    p.form-item
        label(for='a2-4') Champ de type time
        input#a2-4.form-txt(type='time')

    p.form-item
        label(for='a2-5') Champ de type password
        input#a2-5.form-txt(type='password')

    p.form-item
        label(for='a2-6') Champ recherche
        input#a2-6.form-txt(type='search')


### Boutons

Boutons de validation d'un formulaire&nbsp;: `<button type="submit">`,
`<input type="submit">`.  
Les classes CSS `.btn-primary`, `.btn-secondary` ou `.btn-tertiary` peuvent être
appliquées pour styler ces boutons de formulaire.

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

### Champs Télécharger

    @example
    p.form-item
        label(for='a6') Un fichier à télécharger
        input#a6(type='file')


### Textarea

    @example
    p.form-item
        label(for='a5') Votre message
        textarea#a5.form-txt(rows='6')


### Messages
Styles pour les 3 états suivants&nbsp;: succès, erreur ou avertissement.

    @example
    p.form-item.has-error
        label(for='a0-0')
            | Champ texte (error)
            input#a0-0.form-txt(type='text')
            span.form-help Ici mon message d'erreur

    p.form-item.has-warning
        label(for='a0-1')
            | Champ texte (warning)
            input#a0-1.form-txt(type='text')
            span.form-help Ici mon message d'avertissement

    p.form-item.has-success
        label(for='a0-2')
            | Champ texte (success)
            input#a0-2.form-txt(type='text')
            span.form-help Ici mon message pour valider

### Liste déroulante

    @example
    .form-item
        label(for='l1') Une liste déroulante
        select#l1
            option(value='') Lundi
            option(value='') Mardi
            option(value='') Mercredi
            option(value='') Jeudi
            option(value='') Vendredi
            option(value='') Samedi
            option(value='') Dimanche


### Radio & Checkbox

    @example
    p.form-item
        label(for='cb5')
            input#cb5.form-checkbox(type='checkbox', name='cb', value='1')
            | &nbsp;Oui je souhaite m'inscrire à la newsletter
    p.form-item
        label(for='rd6')
            input#rd6.form-radio(type='radio', name='rd', value='1')
            | &nbsp;Oui je souhaite m'inscrire à la newsletter


### Choix multiple
L'élément `<fieldset>`
est utilisé pour regrouper plusieurs éléments de formulaire, par exemple
plusieurs cases à cocher.

Un élément `<legend>`
unique doit être son 1er enfant.

    @example
    fieldset
        legend Un choix multiple avec bouton radio
        p.form-item-radio
            input#br1.form-radio(type='radio', name='br', value='1', checked='')
            // NOTE: or checked="checked" or checked=""
            label(for='br1') Une réponse possible (checked)
        p.form-item-radio
            input#br2.form-radio(type='radio', name='br', value='2')
            label(for='br2') Une réponse possible
        p.form-item-radio
            input#br3.form-radio(type='radio', name='br', value='3', disabled='')
            label(for='br3') Réponse (disabled)
    hr
    fieldset
        legend Un choix multiple avec checkbox
        p.form-item-checkbox
            input#cb1.form-checkbox(type='checkbox', name='cb', value='1', checked='')
            label(for='cb1') Une réponse possible (checked)
        p.form-item-checkbox
            input#cb2.form-checkbox(type='checkbox', name='cb', value='2')
            label(for='cb2') Une réponse possible
        p.form-item-checkbox
            input#cb3.form-checkbox(type='checkbox', name='cb', value='3', disabled='')
            label(for='br3') Réponse (disabled)
