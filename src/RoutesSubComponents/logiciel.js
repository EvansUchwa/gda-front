export const DispatchPageTitle = ({ props }) => {
    const { type, action } = props;
    return <div className="logicielHeader">
        {
            (() => {
                if (action === 'liste') {
                    return <h1>Liste  des {type}s </h1>
                } else {
                    return <h1>Ajouter {type}</h1>
                }
            })()
        }
    </div>
}

export const LogicielDataListTable = ({ props }) => {
    const { type } = props

    const tableTitleObj = {
        vente: ['Produit', 'Quantité'],
        depense: ['Montant', 'Motif'],
        produit: ['Nom'],
        client: ['Nom', 'Prenom', 'Contact'],
    }
    const tableBtnActionObj = {
        vente: [
            { text: 'Detail', class: 'detailBtn' },
            { text: 'Modifier', class: 'updateBtn' },
            { text: 'Supprimer', class: 'deleteBtn' }],
        depense: [
            { text: 'Modifier', class: 'updateBtn' },
            { text: 'Supprimer', class: 'deleteBtn' }],
        produit: [
            { text: 'Modifier', class: 'updateBtn' },
            { text: 'Supprimer', class: 'deleteBtn' }],
        client: [
            { text: 'Modifier', class: 'updateBtn' },
            { text: 'Supprimer', class: 'deleteBtn' }],
    }
    return <table className="logicielTable">
        <tr>
            <th>N*</th>
            {tableTitleObj[type].map((title, index) => <th key={"logiciel table title" + index}>
                {title}
            </th>)}
            <th>Ajouté le</th>
            <th>Action</th>

        </tr>
        {
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => <tr key={"table " + type + " row" + index}>
                <td>{index + 1} </td>
                {tableTitleObj[type].map((title, index) => <td key={"logiciel table title" + index}>
                    Data
                </td>)}
                <td>12/12/2022</td>
                <td>
                    {tableBtnActionObj[type].map((btn, index) => <button className={btn.class}
                        key={"logiciel table title" + index}>
                        {btn.text}
                    </button>)}
                </td>
            </tr>)
        }
    </table>
}

export const LogicielAddDataForm = () => {
    return <div>
        <form>

        </form>
    </div>
}