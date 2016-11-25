## Grilles

Le système de grille provient de <a href="http://knacss.com/grillade/">KNACSS / Grillade</a>&nbsp;et utilise <em>CSS3 Flexbox</em>.

### Grille simple, monoligne

Appliquez simplement la classe <code>.grid</code> sur un conteneur pour obtenir une grille mono-ligne.

Les enfants, quels qu'ils soient et quel que soit leur nombre, s'afficheront de manière équitable les uns à côté des autres

**NOTE :  dans tous les codes suivants, la classe <code>.sg-grid</code> n'est utilisée que pour ce styleguide, elles sont inutiles en production.**

    @example
    <div class="sg-grid grid">
    <div>je suis un div, sans class</div>
    <div>hey moi aussi</div>
    <aside>moi je suis un aside</aside>
    </div>
    
### La même avec gouttières

L'ajout de la classe <code>.has-gutter</code> crée un espace entre les enfants Cet espace est configurable dans la version <code>.scss</code> de Grillade. La valeur par défaut de la gouttière est "1rem" mais il est parfaitement possible de la modifier en optant pour la valeur et l'unité qui vous siéra (pixel, em, rem, %).

    @example
    <div class="sg-grid grid has-gutter">
    <div>je suis un div, sans class</div>
    <div>hey moi aussi</div>
    <aside>moi je suis un aside</aside>
    </div>

La taille de la gouttière est configurable à l'aide de classes additionnelles : <code>.has-gutter-l</code> (gouttière x2) ou <code>.has-gutter-xl</code> (gouttière x4).

    @example
    <div class="sg-grid grid has-gutter-l">
    <div>je suis un div, sans class</div>
    <div>hey moi aussi</div>
    <aside>moi je suis un aside</aside>
    </div>

    @example
    <div class="sg-grid grid has-gutter-xl">
    <div>je suis un div, sans class</div>
    <div>hey moi aussi</div>
    <aside>moi je suis un aside</aside>
    </div>

### Dimensionner les enfants

Il est possible, en option, de dimensionner chaque enfant par rapport à l'espace contenu au sein du parent, grâce aux classes <code>.one-half</code>, <code>.one-third</code>, <code>.one-quarter</code>, <code>.one-fifth</code>, <code>.two-thirds</code>, <code>.three-quarters</code>, <code>.one-sixth</code>, <code>.five-sixths</code> ou <code>.full</code>

    @example
    <div class="sg-grid grid">
    <div class="one-fifth">.one-fifth</div>
    <div>lorem ipsum</div>
    <div>lorem ipsum</div>
    </div>

Cela fonctionne également avec l'indication de gouttière <code>.has-gutter</code> 

    @example
    <div class="sg-grid grid has-gutter">
    <div class="one-fifth">.one-fifth</div>
    <div>lorem ipsum</div>
    <div class="one-fifth">.one-fifth</div>
    </div>



### Une grille multi-lignes

À partir de l'objet <code>.grid</code>, il suffit d'ajouter un suffixe <code>-N</code> (par exemple <code>-3</code>) pour passer en <b>mode multi-lignes</b>. Les valeurs du suffixe, et donc le nombre de colonnes peuvent aller de 2 à 12.

    @example
    <div class="sg-grid grid-3">
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    </div>

Cela fonctionne également avec l'indication de gouttière <code>.has-gutter</code> 

    @example
    <div class="sg-grid grid-3 has-gutter">
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    </div>

Cela fonctionne également avec des enfants dimensionnés explicitement. 

    @example
    <div class="sg-grid grid-3 has-gutter">
    <div class="one-half">.one-half</div>
    <div class="one-half">.one-half</div>
    <div class="one-third">.one-third</div>
    <div class="two-thirds">.two-thirds</div>
    <div class="one-quarter">.one-quarter</div>
    <div class="three-quarters">.three-quarters</div>
    </div>


### Les offsets (pull et push)

Ajoutez les classes <code>.pull</code> ou <code>.push</code> pour pousser un enfant vers sa droite ou sa gauche.

    @example
    <div class="sg-grid grid-5">
    <div>lorem</div>
    <div>lorem</div>
    <div class="push">.push</div>
    <div>lorem</div>
    </div>

### Réordonner les éléments

Les classes <code>.item-first</code> et <code>.item-last</code> servent à réordonner visuellement les éléments.

    @example
    <div class="sg-grid grid-3">
    <div>lorem</div>
    <div>lorem</div>
    <div class="item-first">.item-first</div>
    </div>


### Inverser la grille

Il est possible d'inverser totalement le sens de lecture de la grille grâce au suffixe <code>--reverse</code>

    @example
    <div class="sg-grid grid-3--reverse">
    <div>premier</div>
    <div>deuxième</div>
    <div>troisième</div>
    </div>

### Taille d'écran intermédiaire

Vous pouvez indiquer le nombre de colonnes souhaitées lorsque la taille d'écran est intermédiaire (entre <i>tiny</i> et <i>small</i>, soit entre 545px et 768px par défaut) à l'aide d'un suffixe <code>-small-N</code> (avec N entre 1 et 4).
<br> Par exemple, un conteneur <code>.grid-3-small-2</code> disposera de 1 colonne en mobile (cas par défaut), puis 2 colonnes en écran intermédiaire, puis 3 colonnes sur grand écran.

    @example
    <div class="sg-grid grid-3-small-2">
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    </div>

Cela fonctionne avec des gouttières (classe <code>.has-gutter</code>) ainsi qu'avec des dimensions explicites sur les enfants.

    @example
    <div class="sg-grid grid-3-small-2 has-gutter">
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    </div>

### Votre grille avec des mixins Sass

Le préprocesseur Sass (version <code>.scss</code>) permet d'étendre les possibilités de Grillade, voire de concevoir votre propre grille. Pour commencer, il est très facilement possible de modifier les variables de taille de gouttière (<code>$grid-gutters</code>).
<br>Vous pouvez également concevoir vos propres colonnes. Le mixin suivant, appliqué à votre classe <code>.grid-perso</code> construira une grille de 4 colonnes sans gouttière&nbsp;: <code> .grid-perso { @include grid(4, 0); }</code>


Avec gouttière personnalisée, cela pourrait donner&nbsp;: <code> .grid-perso { @include grid(4, 1rem); }</code>
