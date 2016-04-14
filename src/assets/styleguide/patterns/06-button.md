## Éléments cliquables

### Liens ayant le style d'un bouton

La classe CSS <code>.btn</code> peut être appliquée sur l'élément `<a>` pour le styler visuellement comme les éléments `<button>` et `<input type="submit">`.  
Les classes <code>.btn-primary</code>, <code>.btn-secondary</code>
ou <code>.btn-tertiary</code>
peuvent être ajoutées pour le styler comme le serait un bouton de formulaire ayant l'une de ces classes.  
<em>Note</em>&nbsp;: ne pas utiliser un lien là où il faudrait utiliser un bouton de formulaire&nbsp;!

    @example
    p
      span.inbl.w30 Liens ressemblant à un bouton :
      | <a class="btn" href="#">Default</a>
      | <a class="btn btn-primary" href="#">Primary</a>
      | <a class="btn btn-secondary" href="#">Secondary</a>
      | <a class="btn btn-tertiary" href="#">Tertiary</a>
    p
      span.inbl.w30 Les mêmes dans l'état survolé :
      | <a class="btn :hover" href="#">Default</a>
      | <a class="btn btn-primary :hover" href="#">Primary</a>
      | <a class="btn btn-secondary :hover" href="#">Secondary</a>
      | <a class="btn btn-tertiary :hover" href="#">Tertiary</a>
    p
      span.inbl.w30 Les mêmes ayant reçu le focus:
      | <a class="btn :focus" href="#">Default</a>
      | <a class="btn btn-primary :focus" href="#">Primary</a>
      | <a class="btn btn-secondary :focus" href="#">Secondary</a>
      | <a class="btn btn-tertiary :focus" href="#">Tertiary</a>

### Boutons avec une icône

La classe CSS <code>.icon-</code>
peut être appliquée sur les éléments suivants : `<i>`. 

    @example
    <a class="btn btn-primary" href="#"><i class="icon-arrow" aria-hidden="true"></i>Primary</a>
    <a class="btn btn-primary :hover mll" href="#"><i class="icon-arrow" aria-hidden="true"></i>Survolé</a>
    <a class="btn btn-primary :focus mll" href="#"><i class="icon-arrow" aria-hidden="true"></i>Prise de focus</a>
