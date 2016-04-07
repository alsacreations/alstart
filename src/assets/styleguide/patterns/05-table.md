## Tableau

### Avec en-tête et pied de tableau

    @example
    <table>
        <thead>
            <tr>
                <th scope="col">Ville</th>
                <th scope="col">Pays</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td>Pied de tableau 1</td>
                <td>Pied de tableau 2</td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>Strasbourg</td>
                <td>France</td>
            </tr>
            <tr>
                <td>Berlin</td>
                <td>Allemagne</td>
            </tr>
        </tbody>
    </table>

### Avec en-tête de ligne et de colonne

    @example
    <table>
        <thead>
            <tr>
                <th></th>
                <th scope="col">Ville</th>
                <th scope="col">Pays</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Jour 1</th>
                <td>Strasbourg</td>
                <td>France</td>
            </tr>
            <tr>
                <th scope="row">Jour 2</th>
                <td>Berlin</td>
                <td>Allemagne</td>
            </tr>
        </tbody>
    </table>


