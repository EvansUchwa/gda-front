import { useState } from "react";
export const Table1 = ({ props }) => {
    const { rowData, setCurrentItem, btnProps } = props
    const [finalTab, setFinalTab] = useState(rowData);

    return <><SearchOnTable props={{ data: rowData, tabSetter: setFinalTab }} />
        <table className="table1">
            <tr>
                <th>#</th>
                <th>Utilisateur</th>
                <th>Mail</th>
                <th>Action</th>
            </tr>
            {
                finalTab.length > 0
                    ? finalTab.map((row, index) => <tr key={'table1' + index}>
                        <td><span>{index + 1}</span></td>
                        <td><span>{row.pseudo}</span> </td>
                        <td><span>{row.mail} </span></td>
                        <td> <TableActionBtn props={{
                            ...btnProps, setCurrentItem,
                            data: { ...row, id: (index + 1) }
                        }} /></td>
                    </tr>)
                    : <p>Aucun resultat trouvé</p>
            }
        </table>
    </>
}

const TableActionBtn = ({ props }) => {
    const { onClickFunction, setCurrentItem, btnsTab, data } = props;

    return <>{
        btnsTab.map((btn, index) => <button className={btn.className}
            key={'btn-Table' + index}
            onClick={() => {
                setCurrentItem(data)
                onClickFunction(btn.functionParam)
            }}>{btn.ph}</button>)
    }
    </>
}


const SearchOnTable = ({ props }) => {
    const { data, tabSetter } = props;
    const handleSearchOnTab = (event) => {
        const value = event.target.value;
        const copyData = data.slice();

        let result = copyData.filter(item => item.mail.includes(value) || item.pseudo.includes(value))

        if (result.length > 0) {
            tabSetter(result)
        } else {
            tabSetter([])
        }
    }
    return <div className="searchOnTable">
        {/* <label>Recherche</label> */}
        <input className="semiRounded" type={"search"}
            placeholder="Rechercher ici"
            onChange={(event) => handleSearchOnTab(event)} />
    </div>
}