## Éléments cliquables

### Liens ayant le style d'un bouton

La classe CSS <code>.btn</code> peut être appliquée sur l'élément `<a>` pour le styler visuellement comme les éléments `<button>` et `<input type="submit">`.  
Les classes <code>.btn-primary</code>, <code>.btn-secondary</code>
ou <code>.btn-tertiary</code>
peuvent être ajoutées pour le styler comme le serait un bouton de formulaire ayant l'une de ces classes.  
<em>Note</em>&nbsp;: ne pas utiliser un lien là où il faudrait utiliser un bouton de formulaire&nbsp;!

    @example
    p Link that looks like a button with style:
      | <a class="btn" href="#">Default</a>
      | <a class="btn btn-primary" href="#">Primary</a>
      | <a class="btn btn-secondary" href="#">Secondary</a>
      | <a class="btn btn-tertiary" href="#">Tertiary</a>

### Boutons avec une icône

La classe CSS <code>.icon-</code>
peut être appliquée sur les éléments suivants : `<i>`. 

    @example
    <a class="btn btn-primary" href="#"><i class="icon-arrow" aria-hidden="true"></i>Primary</a>
