import { useState } from "react";
import { Modal } from "../GlobalComponents/Modal";
import { UpdateInfoModal } from "../GlobalComponents/SiteModal";
import { useAuth } from "../hooks/authHooks";
import { UrlImage } from "../GlobalComponents/Img";
import { candidatsFields, enterpriseFields } from "../RawData/fields";

export const UpdateProfilForm = () => {
    var urlImgRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
    const { userType, authedInfo } = useAuth();
    function handleSubmit(event) {
        return;
    }
    const [toggleModal, setToggleModal] = useState(false);
    const [upField, setUpField] = useState({})

    const updateProfilFormFieds = {
        ENTREPRISE: [
            enterpriseFields.nom_entreprise, enterpriseFields.mail_entreprise,
            enterpriseFields.ifu, enterpriseFields.localisation,
            enterpriseFields.numero1, enterpriseFields.numero2,
            enterpriseFields.type_entreprise, enterpriseFields.logo,
            enterpriseFields.description
        ],
        CANDIDAT: [candidatsFields.nom, candidatsFields.prenom, candidatsFields.sexe,
        candidatsFields.age, candidatsFields.lieu_de_naissance,
        candidatsFields.numero_1, candidatsFields.numero_2,
        candidatsFields.niveau, candidatsFields.filiere, candidatsFields.ecole,
        candidatsFields.pays, candidatsFields.ville, candidatsFields.nationalité,
        candidatsFields.moyen_de_deplacement, candidatsFields.salaire,
        candidatsFields.situation_matrimonial, candidatsFields.salaire,
        candidatsFields.poste, candidatsFields.domaine_competence, candidatsFields.autre_competence,
        candidatsFields.photo1, candidatsFields.photo2
        ]
    }
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