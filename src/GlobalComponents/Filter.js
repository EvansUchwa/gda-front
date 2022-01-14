import axios from "axios";
import { useState } from "react";
import { useAuth } from "../hooks/authHooks";
import { candidatsFields, enterpriseFields, jobFields } from "../RawData/fields";
import { dispatchCandidatListApi, dispatchEnterpriseListApi } from "../RawData/links";
import { Modal } from "./Modal";
import { dispatchInputOrSelect } from "../Tools/formValidator";

const FilterElementList = ({ props }) => {
    const { userType, setApiLink, setToggleModal } = props;
    const [filterFields, setFilterFileds] = useState({
        niveau_detude: '', domaine_de_competence: '', ville: ''
    });

    const filterObj = {
        CANDIDAT: [
            candidatsFields.niveau,
            enterpriseFields.localisation,
            jobFields.salaire,
            jobFields.contrat
        ],
        ENTREPRISE: [
            candidatsFields.niveau,
            candidatsFields.domaine_competence
        ]
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setFilterFileds({ ...filterFields, [name]: value });
    }
    const handleFilterSubmit = (event) => {
        event.preventDefault();
        let bodyData = {};
        if (userType === 'ENTREPRISE') {
            bodyData = {
                'niveau': filterFields.niveau_detude,
                'competences': filterFields.domaine_de_competence,
                'experience': "",
            }
        } else {
            bodyData = {
                'post': "nodddm",
                'niveau_etude': "bepc",
                'type_contrat': "type_contrat",
                'adresse': "adresse",
                'domaine_competence': "domaine_competence",
            }
        }
        setApiLink(dispatchCandidatListApi('filter', 'post', bodyData))
        setToggleModal(false)
    }
    return <>
        <div className="jobOfferFilter">
            <h2>Filtrer les jobs</h2>
            <form onSubmit={(event => handleFilterSubmit(event))}>
                {
                    filterObj[userType].map((field, index) => <div className="formSegment"
                        key={'filter seg' + index}>
                        <label>{field.label}</label>
                        {
                            dispatchInputOrSelect(filterObj, setFilterFileds, field, handleChange, [], [])
                        }
                    </div>)
                }
                <div className="formBtn">
                    <button>Appliquer</button>
                </div>
            </form>
        </div>
    </>
}


export const CandidateOrEmployerFilter = ({ props }) => {
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos;
    const { userType, setApiLink } = props;
    const [toggleModal, setToggleModal] = useState(false)
    const modalContent = <FilterElementList props={{ userType, setApiLink, setToggleModal }} />;

    const handleSortChange = (event) => {
        let value = event.target.value;
        if (value != '') {
            if (userType == 'ENTREPRISE') {
                setApiLink(dispatchCandidatListApi(value, 'post', value))
            } else {
                setApiLink(dispatchEnterpriseListApi(value, 'post', value))
            }
        }
    }

    return <div className="filterResults">
        <section>
            <select className="semiRounded" onChange={(event) => handleSortChange(event)} defaultValue={""}>
                <option value=''>Trier ...</option>
                <option value='az'>De A a Z</option>
                <option value='za'>De Z a A</option>
                <option value="low_high">De Moins recent a Plus recent</option>
                <option value="latest">De Plus recent a Moins recent</option>
            </select>
        </section>

        <section>
            <button className="semiRounded" onClick={() => setToggleModal(true)}>Filtrer</button>
        </section>

        {
            toggleModal ? <Modal props={{ content: modalContent, setToggleModal }} /> : ''
        }
    </div>
}