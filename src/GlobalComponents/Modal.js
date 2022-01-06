export const Modal = ({ props }) => {
    let bgColor = 'white';
    const { content, setToggleModal, className } = props
    return <div className="modal1">
        <div className={className ? "modal1-body " + className : 'modal1-body'} >
            <div className="mb1-header">
                <i className="mdi mdi-close" onClick={() => setToggleModal(false)}></i>
            </div>
            <div className="mb1-content">
                {content}
            </div>
            {/* <div className="mb1-footer">
                <button onClick={() => setToggleModal(false)}>Fermer</button>
            </div> */}
        </div>
    </div>
}

export const ConfirmationModal = ({ props }) => {
    const { setToggleModal, className, confirmMsg, data } = props
    const modalContent = <div className="modalConfirmation">
        <b>Voulez vous vraiment {confirmMsg} {data.id} ? </b>
        <section>
            <button className="semiRounded">Oui</button>
            <button className="semiRounded">Non</button>
        </section>
    </div>
    return <Modal props={{ content: modalContent, setToggleModal: setToggleModal, className }} />
}