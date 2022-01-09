import { updateProfilFormFieds } from "../RawData/updateForm";
import { useState } from "react";
import { Modal } from "../GlobalComponents/Modal";
import { UpdateInfoModal } from "../GlobalComponents/SiteModal";
import { useAuth } from "../hooks/authHooks";

export const UpdateProfilForm = () => {
    const { userType, authedInfo } = useAuth();
    function handleSubmit(event) {
        return;
    }
    const [toggleModal, setToggleModal] = useState(false);
    const [upField, setUpField] = useState({})
    return <div
        onSubmit={(event) => handleSubmit(event)}>
        {
            updateProfilFormFieds[userType].map((upf, index) => <div className="formUpdateSection"
                key={'upField-' + index}>
                <label><b>{upf.label}</b> </label>
                <section>
                    <p>{upf.dbKey ? authedInfo.other[upf.dbKey] : 'data'} </p>
                </section>
                <button onClick={(event) => {
                    setUpField(upf)
                    setToggleModal(true)
                }}>Modifier</button>
            </div>)

        }
        {
            toggleModal ?
                <Modal props={{
                    content: <UpdateInfoModal props={{ upField, initialData: authedInfo.other }} />,
                    setToggleModal,
                    className: 'updateModal'
                }} />
                : ''
        }
    </div>
}