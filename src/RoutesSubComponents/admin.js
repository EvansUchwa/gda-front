import { useState } from "react/cjs/react.development"
import { ConfirmationModal } from "../GlobalComponents/Modal";
import { Table1 } from "../GlobalComponents/Tables"

const fakeUserTabs = [{ pseudo: "Johna", mail: 'johna06@gmail.com' },
{ pseudo: "Paul", mail: 'paulo78@gmail.com' },
{ pseudo: "Kevin", mail: 'kev22@gmail.com' },
{ pseudo: "Ansu", mail: 'ansu907@gmail.com' }]
export const ListeComptes = ({ props }) => {
    const { typeCompte } = props;
    const tableActionBtn = <button className="table-normalBtn">Voir</button>
    return <>
        <h1>Liste de tout les comptes {typeCompte}</h1>
        <section>
            <Table1 props={{ rowData: fakeUserTabs }} />
        </section>
    </>
}


export const ActivationComptes = ({ props }) => {
    const { typeCompte } = props;
    const [toggleModal, setToggleModal] = useState(false);
    const [activationAction, setActivationAction] = useState(null);
    const [currentItem, setCurrentItem] = useState(null)
    const handleActivationConfirmation = (action) => {
        setActivationAction(action)
        setToggleModal(true)
    }

    const btnProps = {
        onClickFunction: handleActivationConfirmation,
        btnsTab: [
            { className: 'table-goodBtn', id: '', ph: 'Activez', functionParam: 'activez' },
            { className: 'table-badBtn', id: '', ph: 'Desactivez', functionParam: 'desactivez' }]
    }
    return <>
        <h1>Validez/Invalidez les comptes {typeCompte}</h1>
        <section>
            <Table1 props={{ rowData: fakeUserTabs, setCurrentItem, btnProps }} />
        </section>
        {
            toggleModal ?
                <ConfirmationModal props={{
                    data: currentItem,
                    setToggleModal, className: '',
                    confirmMsg: activationAction + ' ce compte ' + typeCompte
                }} />
                : ''
        }
    </>
}


