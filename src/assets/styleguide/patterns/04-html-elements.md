## Autres éléments HTML

### Citation

Bloc de citation avec l'élément `<blockquote>`

    @example
    <blockquote>One small step for man, one giant leap for mankind.</blockquote>

    <blockquote>
    Le petit prince traversa le désert et ne rencontra qu' une fleur. Une fleur à trois pétales, une fleur de rien du tout…<br>
      -Bonjour, dit le prince.<br>
      -Bonjour, dit la fleur.<br>
      -Où sont les hommes ? demanda poliment le petit prince;
    </blockquote>


### Adresse

L'élément `<address>` permet de fournir une information de contact

    @example
    <address>
      <a href="http://www.undomaine.com/contact">www.undomaine.com</a>.<br>
      Si vous relevez quelques bogues que ce soient, merci de contacter <a href="mailto:webmaster@somedomain.com">le webmaster</a>.<br>
      Vous pouvez aussi venir nous voir :<br>
      Mozilla Foundation<br>
      1981 Landings Drive<br>
      Building K<br>
      Mountain View, CA 94043-0801<br>
      USA
    </address>


## Listes

### Liste non ordonnée

Exemple d'une liste non ordonnée avec l'élément `<ul>`

    @example
    <ul class="content-list-bullet">
        <li>Sur la planète du petit prince</li>
        <li>il y avait comme sur toutes les planètes
            <ul>
                <li>de bonnes herbes et de mauvaises herbes</li>
                <li>Par conséquent de bonnes graines de bonnes herbes
                    <ul>
                        <li>et de mauvaises graines de mauvaises herbes</li>
                        <li>Mais les graines sont invisibles</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Elles dorment dans le secret</li>
        <li>de la terre jusqu'à ce qu'il prenne fantaisie</li>
    </ul>


### Liste ordonnée

Exemple d'une liste ordonnée avec l'élément `<ol>`

    @example
    <ol class="content-list-bullet">
        <li>Sur la planète du petit prince</li>
        <li>il y avait comme sur toutes les planètes
            <ol>
                <li>de bonnes herbes et de mauvaises herbes</li>
                <li>Par conséquent de bonnes graines de bonnes herbes
                    <ol>
                        <li>et de mauvaises graines de mauvaises herbes</li>
                        <li>Mais les graines sont invisibles</li>
                    </ol>
                </li>
            </ol>
        </li>
        <li>Elles dorment dans le secret</li>
        <li>de la terre jusqu'à ce qu'il prenne fantaisie</li>
    </ol>
