import { updateProfilFormFieds } from "../RawData/updateForm";
import { useState } from "react";
import { Modal } from "../GlobalComponents/Modal";
import { UpdateInfoModal } from "../GlobalComponents/SiteModal";
import { useAuth } from "../hooks/authHooks";
import { UrlImage } from "../GlobalComponents/Img";

export const UpdateProfilForm = () => {
    var urlImgRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
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
                    {
                        (() => {
                            if (urlImgRegex.test(authedInfo.other[upf.dbKey])) {
                                return <UrlImage props={{ src: authedInfo.other[upf.dbKey], alt: 'Image updater preview' }} />
                            } else if (authedInfo.other[upf.dbKey] == 'https://www.gda-services.com/public/candidats/image/') {
                                return <p>Aucun Fichier</p>
                            }
                            else {
                                return !['type'].includes(upf.dbKey) ? <p>{upf.dbKey ? authedInfo.other[upf.dbKey] : 'data'} </p> : ''
                            }
                        })()
                    }
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
                    content: <UpdateInfoModal props={{ upField, initialData: authedInfo.other, setToggleModal }} />,
                    setToggleModal,
                    className: 'updateModal'
                }} />
                : ''
        }
    </div>
}