## Alignements de base

Il existe différentes classes utilitaires intégrées à <a href="https://github.com/alsacreations/KNACSS/blob/master/doc/02a-layout-alignements.md">KNACSS</a>&nbsp;pour gérer les alignements d'éléments.

### Contenus "inline"

Les textes et contenus "inline" sont gérés via les classes <code>.txtleft</code>,&nbsp;<code>.txtright</code>&nbsp;et&nbsp;<code>.txtcenter</code>&nbsp;qui agiront sur la propriété CSS <code>text-align</code>.

    @example
    <div class="txtleft">
      <p>Texte aligné à gauche.<br><code>.txtleft</code></p>
    </div>
    <div class="txtcenter">
      <p>Texte centré.<br><code>.txtcenter</code></p>
    </div>
    <div class="txtright">
      <p>Texte aligné à droite.<br><code>.txtright</code></p>
    </div>


### Blocs

Les blocs (dont une largeur a été fixée) sont alignés avec les classes <code>.left</code>,&nbsp;<code>.right</code>&nbsp;et&nbsp;<code>.center</code>&nbsp;qui affectent la valeur <code>auto</code>&nbsp;à la propriété <code>margin</code>.

    @example
    <div class="left w50 sg-align-block">
      <p>Bloc aligné à gauche.<br><code>.left</code></p>
    </div>
    <div class="center w50 sg-align-block">
      <p>Bloc centré.<br><code>.txtcenter</code></p>
    </div>
    <div class="right w50 sg-align-block">
      <p>Bloc aligné à droite.<br><code>.right</code></p>
    </div>


### Flottants

Les flottements sont gérés via les classes <code>.fl</code>&nbsp;(pour <code>float: left</code>), et <code>.fr</code>&nbsp;(pour <code>float: right</code>).

    @example
    <div class="sg-align-float">
      <div class="fl">Bloc flottant<code>.fl</code></div>
      <p>Texte avec un bloc flottant à gauche</p>
    </div>
    <div class="sg-align-float">
      <div class="fr">Bloc flottant<code>.fr</code></div>
      <p>Texte avec un bloc flottant à droite</p>
    </div>
