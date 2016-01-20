### Button

Create your buttons with a `.button` class.

    @example
    <a class="button">Button</a>
    <a class="button primary">Button</a>

## Grilles

Le système de grille provient de <a href="https://github.com/alsacreations/KNACSS/blob/master/doc/03-grilles.md">KNACSS</a>&nbsp;et utilise <em>CSS3 Flexbox</em>.

### Grilles à colonnes égales (non responsive)

Les grilles de largeurs égales vont de <code>.grid-2</code>&nbsp;à <code>.grid-12</code>. Les classes de grille s'appliquent **sur le parent**  et non sur les enfants.

    @example
    <div class="sg-grid grid-2">
      <div>enfant</div>
      <div>enfant</div>
    </div>
    <div class="sg-grid grid-3">
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
    </div>
    <div class="sg-grid grid-4">
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
    </div>
    <div class="sg-grid grid-5">
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
    </div>
    
### Grilles à colonnes égales responsive

Les grilles de largeurs égales deviennent responsives lorsqu'elles contiennent les mots-clés  <code>-small</code> et/ou <code>-tiny</code>. Les classes de grille s'appliquent **sur le parent**  et non sur les enfants.

Par exemple:
- `div class="grid-3-tiny-1"` : grille de 3 colonnes égales, puis 1 colonne sur très petit écran
- `div class="grid-6-small-3-tiny-2"` : grille de 6 colonnes, puis 3 colonnes sur écran "small", puis 2 colonnes sur écran "tiny".


### 2 colonnes, puis 1 colonne sur écran "tiny"

    @example
    <div class="sg-grid grid-2-tiny-1">
      <div>enfant</div>
      <div>enfant</div>
    </div>


### 3 colonnes, 2 colonnes sur écran "small", et 1 colonne sur écran "tiny"

    @example
    <div class="sg-grid grid-3-small-2-tiny-1">
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
    </div>

### 4 colonnes, 2 colonnes sur écran "small", et 1 colonne sur écran "tiny"

    @example
    <div class="sg-grid grid-4-small-2-tiny-1">
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
    </div>

### 5 colonnes, 3 colonnes sur écran "small", et 2 colonnes sur écran "tiny"

    @example
    <div class="sg-grid grid-5-small-3-tiny-2">
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
      <div>enfant</div>
    </div>


### Grilles à colonnes inégales (responsive)

    @example
    <div class="sg-grid grid-1-4">
      <div>enfant</div>
      <div>enfant</div>
    </div>
    <div class="sg-grid grid-1-3">
      <div>enfant</div>
      <div>enfant</div>
    </div>
    <div class="sg-grid grid-1-2">
      <div>enfant</div>
      <div>enfant</div>
    </div>
    <div class="sg-grid grid-2-3">
      <div>enfant</div>
      <div>enfant</div>
    </div>
    <div class="sg-grid grid-3-2">
      <div>enfant</div>
      <div>enfant</div>
    </div>
    <div class="sg-grid grid-2-1">
      <div>enfant</div>
      <div>enfant</div>
    </div>
    <div class="sg-grid grid-3-1">
      <div>enfant</div>
      <div>enfant</div>
    </div>
    <div class="sg-grid grid-4-1">
      <div>enfant</div>
      <div>enfant</div>
    </div>

