import axios from "axios";
export const employerSteps = {
    step1: [
        {
            comp: 'input', label: "Nom de l'entreprise", htmlType: 'text', name: 'nom_entreprise',
            value: '', ph: 'AaZz', id: '', errmsgname: "nom entreprise",
        },
        {
            comp: 'input', label: "Mail de l'entreprise", htmlType: 'mail', name: 'mail_entreprise',
            value: '', ph: 'AaZz', id: '', errmsgname: "mail de l' entreprise",
        },
        {
            comp: 'input', label: "Ifu", htmlType: 'number', name: 'ifu',
            value: '', ph: '00000000', id: '', errmsgname: "ifu",
        }],
    step2: [
        {
            comp: 'input', label: "Localisation de entreprise", htmlType: 'text', name: 'localisation_entreprise',
            value: '', ph: 'AaZz', id: '', errmsgname: "localisation de l'entreprise",
        },
        {
            comp: 'input', label: 'Numero de telephone 1', htmlType: 'number', name: 'numero_1',
            value: '', ph: '00000000', id: '', errmsgname: "numero",
        },
        {
            comp: 'input', label: 'Numero de telephone 2', htmlType: 'number', name: 'numero_2',
            value: '', ph: '00000000', id: '', errmsgname: "numero",
        },
    ],
    step3: [
        {
            comp: 'select', label: "Type de l'entreprise", name: 'type_entreprise',
            options: [
                { value: 'Commerce', ph: 'Commerce' },
                { value: 'Prestation', ph: 'Prestation' },
                { value: 'Finance', ph: 'Finance' }
            ],
            value: '', ph: '18', id: '', errmsgname: "type de l'entreprise",

        },
        {
            comp: 'input', label: "Logo de l'entreprise", htmlType: 'file', name: 'logo_entreprise',
            value: '', ph: '00000000', id: 'logo_photo', errmsgname: "logo de l'entreprise",

        },
        {
            comp: 'textarea', label: "Une petite description de l'entreprise", name: 'description_entreprise',
            value: '', ph: '00000000', id: '', errmsgname: "description de l'entreprise",

        }
    ],
}



export const stepEmployerValidator = (stepId, userOtherInfo) => {
    const { nom_entreprise, mail_entreprise,
        numero_1, numero_2,
        type_entreprise, logo_entreprise,
        ifu, localisation_entreprise,
        description_entreprise } = userOtherInfo;
    if (stepId == 1) {
        return nom_entreprise != "" && mail_entreprise != "" && ifu != "";
    } else if (stepId == 2) {
        return localisation_entreprise != "" && numero_1 != "" && numero_2 != "";
    }
    else if (stepId == 3) {
        return type_entreprise != "" && logo_entreprise != "" && description_entreprise != "";
    }
}


export const insertEntrepriseDataOnLastStep = (userOtherInfo, mail, updateOtherUserInfo, apiInfos) => {
    const { baseApi, headerApi } = apiInfos;

    const formData = new FormData()
    formData.append("email", mail)
    formData.append("email_entrepise", userOtherInfo.mail_entreprise)
    formData.append("nom_entreprise", userOtherInfo.nom_entreprise)
    formData.append("ifu", userOtherInfo.ifu)
    formData.append("contact", userOtherInfo.numero_1)
    formData.append("contact2", userOtherInfo.numero_2)
    formData.append("niveau", userOtherInfo.niveau_detude)
    formData.append("type", userOtherInfo.type_entreprise)
    formData.append("situation_geographie", userOtherInfo.localisation_entreprise)
    formData.append("description", userOtherInfo.description_entreprise)
    formData.append("logo", userOtherInfo.logo_entreprise)

    axios.post(baseApi + '/api/auth/register/entreprise/sept', formData, { headers: headerApi })
        .then(res => {
            updateOtherUserInfo(res.data.data)
            // console.log(res)
        })
        .catch(err => console.log(err))
}